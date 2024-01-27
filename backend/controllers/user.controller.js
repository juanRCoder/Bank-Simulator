import Users from "../../databases/schemas/user.schema.js";
import Masters from "../../databases/schemas/masters.schema.js";

export const postUser = async (req, res) => {
  try {
    const { dni, cardNumber, key } = req.body;
    //verifica que los datos entrantes no sean nulos o undefined
    if (!dni || !cardNumber || !key) {
      return res.status(400).json({ error: "Datos de entrada incompletos" });
    }

    const master = await Masters.findOne({ dni, key });
    const usuario = await Users.findOne({ dni, cardNumber, key });

    //verifica si un usuario existe en la base de datos o no
    if (!usuario) {
      if (master && master.dni === dni && master.key === key) {
        // Redirigir solo si es un "master" válido
        return res.redirect("/transactionHistory");
      } else {
        // Respuesta JSON para "Master o usuario no válido/a"
        return res.status(404).json({ error: "Master o usuario no válido/a" });
      }
    }

    //devolver el id al frontend.
    res.status(200).json(usuario._id);
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
    res.status(200).json({ name: findUser.name, amount: findUser.amount });
  } catch (e) {
    console.log("Error en el controlador de Users: " + e.message);
    res.status(500).json({ e: "Error al procesar los datos del usuario" });
  }
};
