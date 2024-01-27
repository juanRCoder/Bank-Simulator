import express from "express";
import { postUser, getDasboard } from "../controllers/user.controller.js";
import { UserAuthentication } from "../middlewares/user.middleware.js";

const userRouter = express.Router();

// Ruta para usuarios normales o personal autorizado(master)
userRouter.post("/sendUser", postUser);

// Protector de la ruta getDasboard
userRouter.use("/getDasboard/:id", UserAuthentication);
userRouter.get("/getDasboard/:id", getDasboard);

export default userRouter;
