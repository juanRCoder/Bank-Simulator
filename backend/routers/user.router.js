import express from "express";
import { postUser, getDashboard  } from "../controllers/user.controller.js";
import { UserAuthentication } from "../middlewares/user.middleware.js";

const userRouter = express.Router();

// Ruta para usuarios normales o personal autorizado(master)
userRouter.post("/sendUser", postUser);

// Protector de la ruta getDasboard

// userRouter.use("/getUser/:id", UserAuthentication);
userRouter.get("/getUser/:id", getDashboard );

export default userRouter;
