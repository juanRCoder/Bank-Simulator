import Movements from "../../databases/schemas/movements.schema.js";
import Users from "../../databases/schemas/user.schema.js";
import History from "../../databases/schemas/history.schema.js";
import moment from "moment-timezone";

const createNewMovement = (quantity) => {
  return new Movements({
    name: "Bank",
    lastName: "Simulator",
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

export const postDeposit = async (req, res) => {
  try {
    const { accountNumber, deposit, dni } = req.body;

    //verifica si los datos estan completos en caso se envien valores undefined o nulos
    if (!accountNumber || !deposit || !dni) {
      return res.status(400).json({ error: "Datos de entrada incompletos" });
    }

    //buscando un usuario que coincida con los cmapos ingresados
    const findUser = await Users.findOne({ accountNumber, dni });
    if (!findUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Realizar una transacción para garantizar la consistencia de los datos
    const session = await Users.startSession();
    session.startTransaction();

    try {
      // sumando el deposito al monto del usuario.
      findUser.amount += deposit;
      await findUser.save();

      //creando un nuevo movimiento
      const newMovement = createNewMovement(deposit);
      await newMovement.save();

      //creando una nuevo registro(historial)
      const newHistory = createNewHistory(findUser);
      await newHistory.save();

      // Actualizar para agregar el campo de depositado para el historial.
      await History.updateOne(
        { _id: newHistory._id },
        { $set: { deposited: deposit } }
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
  } catch (e) {
    console.error("Error al realizar el depósito:", e.message);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud de depósito" });
  }
};




export const postRetiro = async (req, res) => {
  try {
    const { withdrawal, keyFour } = req.body;

    const findUser = await Users.findOne({ keyFour });
    if (!findUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });

      //verifica si el saldo actual del usuario es suficiente para retirar
    } else if (findUser.amount < withdrawal) {
      return res
        .status(400)
        .json({ error: `Saldo insuficiente: ${findUser.amount}` });
    }

    // Realizar una transacción para garantizar la consistencia de los datos
    const session = await Users.startSession();
    session.startTransaction();

    try {
      // restar el retiro al monto del usuario.
      findUser.amount -= withdrawal;
      await findUser.save();

      
      const newMovement = createNewMovement(withdrawal);
      await newMovement.save();

      
      const newHistory = createNewHistory(findUser);
      await newHistory.save();

      // Actualizar para agregar el campo de retiro para el historial.
      await History.updateOne(
        { _id: newHistory._id },
        { $set: { withdrawaled: withdrawal } }
      );

      //aplicar todo los cambios
      await session.commitTransaction();

      //enviar al frontend los datos necesarios para verificar el retiro.
      res.status(201).json({
        withdrawal: newMovement.amount,
        date: newMovement.timestamp,
      });
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (e) {
    console.error("Error al realizar el retiro:", e.message);
    res
      .status(500)
      .json({ error: "Error al procesar la solicitud de retiro" });
  }
};
