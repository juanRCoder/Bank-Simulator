import express from "express";
import { postUser, getDasboard } from "../controllers/user.controller.js";
import { UserAuthentication } from "../middlewares/user.middleware.js";

const userRouter = express.Router();

// Ruta para usuarios normales o personal autorizado(master)
userRouter.post("login/sendUser", postUser);

// Protector de la ruta getDasboard
userRouter.use("login/getDasboard/:id", UserAuthentication);
userRouter.get("login/getDasboard/:id", getDasboard);

export default userRouter;
