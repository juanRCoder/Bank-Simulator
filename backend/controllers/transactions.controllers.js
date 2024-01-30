import Movements from "../../databases/schemas/movements.schema.js";
import Users from "../../databases/schemas/user.schema.js";
import History from "../../databases/schemas/history.schema.js";
import moment from "moment-timezone";

const createNewMovement = (quantity, user) => {
  return new Movements({
    id_user: user._id,
    name: user.name,
    lastName: user.lastName,
    timestamp: moment().tz("America/Lima").format(),
    amount: quantity,
  });
};

const createNewHistory = (user) => {
  return new History({
    name: user.name,
    lastName: user.lastName,
    cardNumber: user.cardNumber,
    timestamp: moment().tz("America/Lima").format(),
  });
};

export const postDepositUser = async (req, res) => {
  try {
    const { accountNumber, cantDeposit, dni, token } = req.body;
    const { idUser } = req.params.id;

    if (!accountNumber || !cantDeposit || !dni || !token) {
      return res.status(400).json({ error: "Datos de entrada incompletos" });
    }

    //Usuario que recibira el deposito
    const findUser = await Users.findOne({ accountNumber, dni, token });
    if (!findUser) {
      return res
        .status(404)
        .json({ error: "Usuario para depositar no encontrado" });
    }

    //Usuario que envia el deposito
    const imUser = await Users.findById({ idUser });
    if (!imUser) {
      return res.status(404).json({ error: "Usuario mismo no encontrado" });
    }

    const session = await Users.startSession();
    session.startTransaction();

    try {
      findUser.amount += cantDeposit;
      imUser.amount -= cantDeposit;
      await findUser.save();
      await imUser.save();

      //creando un nuevo movimiento
      const newMovement = createNewMovement(cantDeposit, findUser);
      await newMovement.save();

      //creando una nuevo registro(historial)
      const newHistory = createNewHistory(findUser);
      await newHistory.save();

      // Actualizar para agregar el campo de depositado para el historial.
      await History.updateOne(
        { _id: newHistory._id },
        { $set: { for: findUser.name, deposited: cantDeposit } }
      );

      //aplicar todo los cambios
      await session.commitTransaction();

      //enviar al frontend los datos necesarios para verificar el deposito.
      res.status(201).json({
        name: findUser.name,
        lastName: findUser.lastName,
        deposit: newMovement.amount,
        date: newMovement.timestamp,
      });
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (e) {}
};
