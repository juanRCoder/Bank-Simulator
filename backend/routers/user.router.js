import express from "express";
import { postUser, getDashboard, getUsersHistory } from "../controllers/user.controller.js";
import { showAPI } from "../middlewares/user.middleware.js";

const userRouter = express.Router();

// Ruta para usuarios normales
userRouter.use("/sendUser", showAPI);
userRouter.post("/sendUser", postUser);

userRouter.get("/getUser/:id", getDashboard);
userRouter.get("/UsersHystorial", getUsersHistory);

export default userRouter;
