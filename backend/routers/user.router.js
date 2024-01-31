import express from "express";
import { postUser, getDashboard, getMovementsForUser } from "../controllers/user.controller.js";
import { showAPI, getUsersHistory } from "../middlewares/user.middleware.js";

const userRouter = express.Router();

// Ruta para usuarios normales
userRouter.use("/sendUser", showAPI);
userRouter.post("/sendUser", postUser);

userRouter.get("/getUser/:id", getDashboard);
// API Historial
userRouter.get("/UsersHystorial", getUsersHistory);
//API para Historial de Movimientos del usuario
userRouter.get("/UserMovements/:id", getMovementsForUser)

export default userRouter;
