import Movements from "../../databases/schemas/movements.schema.js";
import Users from "../../databases/schemas/user.schema.js";
import History from "../../databases/schemas/history.schema.js";
import moment from "moment-timezone";

const createNewMovement = (user, imUser) => {
  return new Movements({
    id_user: imUser._id,
    from_user: `${imUser.name} ${imUser.lastName}`,
    timestamp: moment().tz("America/Lima").format(),
    for: `${user.name} ${user.lastName}`,
  });
};

const createNewHistory = (user, imUser) => {
  return new History({
    from: `${imUser.name} ${imUser.lastName}`,
    timestamp: moment().tz("America/Lima").format(),
    for: `${user.name} ${user.lastName}`,
    cardNumber: user.cardNumber,
  });
};

export const postDepositUser = async (req, res) => {
  try {
    const { token, accountNumber, cantDeposit } = req.body;
    const id = req.params.id;

    if (!token || !accountNumber || !cantDeposit) {
      return res.status(400).json({ error: "Datos de entrada incompletos" });
    }

    //Usuario que recibira el deposito
    const findUser = await Users.findOne({ accountNumber });
    if (!findUser) {
      return res
        .status(404)
        .json({ error: "Usuario para depositar no encontrado" });
    }

    //Usuario que envia el deposito
    const imUser = await Users.findOne({ _id: id, token: token });
    if (!imUser) {
      return res.status(404).json({ error: "Usuario mismo no encontrado" });
    }

    //verificar si el monto que deposito es mayor al que tengo
    if (cantDeposit > imUser.amount) {
      return res
        .status(400)
        .json({ error: `Saldo insuficiente: ${imUser.amount}` });
    }

    const session = await Users.startSession();
    session.startTransaction();

    try {
      findUser.amount += cantDeposit;
      imUser.amount -= cantDeposit;
      await findUser.save();
      await imUser.save();

      //creando un nuevo movimiento
      const newMovement = createNewMovement(findUser, imUser);
      await newMovement.save();

      //creando una nuevo registro(historial)
      const newHistory = createNewHistory(findUser, imUser);
      await newHistory.save();

      // Actualizar para agregar el campo de depositado para el historial.
      await History.updateOne(
        { _id: newHistory._id },
        { $set: { deposited: cantDeposit } }
      );
      await Movements.updateOne(
        { _id: newMovement._id },
        { $set: { deposited: cantDeposit } }
      );

      //aplicar todo los cambios
      await session.commitTransaction();

      //enviar al frontend los datos necesarios para verificar el deposito.
      res.status(201).json(newMovement._id);
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (e) {
    console.log("Error en el controlador de Transaccion: " + e.message);
    res.status(500).json({ e: "Error al procesar los datos del Transaccion" });
  }
};




export const getResultTransaction = async (req, res) => {
  try {
    const transactionId = req.params.idResult;

    const resultTransacion = await Movements.findById(transactionId);
    if (!resultTransacion) {
      return res.status(404).json({ error: "Transacción no encontrada" });
    }

    res.status(200).json({
      id_user: resultTransacion.id_user,
      for: resultTransacion.for,
      time: resultTransacion.timestamp,
      amount: resultTransacion.deposited,
    });
  } catch (e) {
    console.error("Error en el controlador de Transaccion:", e.message);
    res
      .status(500)
      .json({ error: "Error al procesar los datos de la transacción" });
  }
};
