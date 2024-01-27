import express from "express";
import { postUser, getDasboard } from "../controllers/user.controller.js";
import { UserAuthentication } from "../middlewares/user.middleware.js";

const userRouter = express.Router();

// Ruta para usuarios normales o personal autorizado(master)
userRouter.post("/sendUser", postUser);

// Protector de la ruta getDasboard
<<<<<<< HEAD
userRouter.use("/getDashboard/:id", UserAuthentication);
userRouter.get("/getDashboard/:id", getDasboard);
=======
userRouter.use("/getUser/:id", UserAuthentication);
userRouter.get("/getUser/:id", getDasboard);
>>>>>>> f5a867ec69db7d183d955ac6bc3ac80fb325b8c4

export default userRouter;
