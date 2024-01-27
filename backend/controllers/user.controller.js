import Users from "../../databases/schemas/user.schema.js";
import Masters from "../../databases/schemas/masters.schema.js";

export const postUser = async (req, res) => {
  try {
    const { dni, numTarjeta, key } = req.body;
    //verifica que los datos entrantes no sean nulos o undefined
    if (!dni || !numTarjeta || !key) {
      return res.status(400).json({ error: "Datos de entrada incompletos" });
    }

    const master = await Masters.findOne({ dni, key });
    const usuario = await Users.findOne({ dni, numTarjeta, key });

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

export const getDasboard = async (req, res) => {
  try {
    //id del usuario en la ruta
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ error: "ID de usuario no proporcionado" });
    }

    //buscar al usuario por el id en la coleccion "users"
    const findUser = await Users.findById(userId);
    if (!findUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    //devolver el nombre del usuario al frontend.
    res.status(200).json(findUser.name);
  } catch (e) {
    console.log(
      "Error: No se puedo contactar el id del usuario en la base de datos" +
        e.message
    );
    res.status(500).json({ e: "Error al procesar los datos del usuario" });
  }
};
