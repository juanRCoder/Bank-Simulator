import Masters from "../../databases/schemas/masters.schema.js";

export const showAPI = async (req, res, next) => {
  try {
    const { dni, cardNumber, keySix } = req.body;

    //busca coincidencias en la coleccion "masters"
    const master = await Masters.findOne({ dni, cardNumber, keySix });

    //si no encuentra nada seguira con la siguiente ruta.
    if (!master) {
      return next();
    }
    // enviar variable booleana diciendole al front que es un master
    return res.status(200).json({ isMaster: true });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getUsersHistory = async (req, res) => {
  try {
    //enviar toda la coleccion.
    // const allMasters = await Masters.find();
    // res.json(allMasters);
    res.json({ hisorial: "usuarios" });
  } catch (e) {
    console.log("Error en el historial: " + e.message);
  }
};
