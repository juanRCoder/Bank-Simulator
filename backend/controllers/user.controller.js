import Users from "../../databases/schemas/user.schema.js";
import Movements from "../../databases/schemas/movements.schema.js";

export const postUser = async (req, res) => {
  try {
    const { dni, cardNumber, keySix } = req.body;
    //verifica que los datos entrantes no sean nulos o undefined
    if (!dni || !cardNumber || !keySix) {
      return res.status(400).json({ error: "Datos de entrada incompletos" });
    }

    const usuario = await Users.findOne({ dni, cardNumber, keySix });

    //verifica si un usuario existe en la base de datos o no
    if (!usuario) {
      return res.status(404).json({ error: "Master o usuario no válido/a" });
    }

    //devolver el id al frontend y tambien decirle que no es master.
    res.status(200).json({ userId: usuario._id, isMaster: false });
  } catch (e) {
    console.error(
      "Error al intentar buscar al usuario en la base de datos" + e.message
    );
    res.status(500).json({ e: "Error al procesar los datos del usuario" });
  }
};

export const getDashboard = async (req, res) => {
  try {
    // id del usuario en la ruta
    const userId = req.params.id;

    // buscar al usuario por el id en la colección "users"
    const findUser = await Users.findById(userId);

    if (!findUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // devolver el nombre y el monto del usuario al frontend.
    res
      .status(200)
      .json({
        name: `${findUser.name} ${findUser.lastName}`,
        amount: findUser.amount,
        cardNumber: findUser.cardNumber,
      });
  } catch (e) {
    console.log("Error en el controlador de Users: " + e.message);
    res.status(500).json({ e: "Error al procesar los datos del usuario" });
  }
};

export const getMovementsForUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ error: "Datos de entrada incompletos" });
    }

    const findUser = await Users.findById(userId);
    if (!findUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const userMovements = await Movements.find({ id_user: findUser._id });
    if (!userMovements) {
      return res
        .status(404)
        .json({ error: "Usuario no vinculado con movimientos" });
    }

    res.status(200).json({ userMovements });
  } catch (e) {
    console.log("Error en el controlador de Movimientos: " + e.message);
    res
      .status(500)
      .json({ e: "Error al procesar los datos del movimiento por usuario" });
  }
};
