import Masters from "../../databases/schemas/masters.schema.js";

export const showAPI = async (req, res, next) => {
  try {
    const { dni, cardNumber, key } = req.body;

    const master = await Masters.findOne({ dni, cardNumber, key });

    if (!master) {
      return next();
    }

    return res.status(200).json({ isMaster: true });

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getUsersHistory = async (req, res) => {
  try {
    res.json({ historial: "Historial de usuarios" });
  } catch (e) {
    console.log("Error en el historial: " + e.message);
  }
};
