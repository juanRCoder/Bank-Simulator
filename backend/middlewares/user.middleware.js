import User from "../../databases/schemas/user.schema.js";

export const UserAuthentication = async (req, res, next) => {
  try {
    const { dni, key } = req.body;

    const user = await User.findOne({ dni });

    if (user && user.key === key) {
      next();
    } else {
      res.redirect("/");
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
