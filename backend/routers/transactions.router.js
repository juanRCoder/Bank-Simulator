import express from "express";
import { postDepositUser } from "../controllers/transactions.controllers.js";

const transactionRouter = express.Router();

// Ruta para realizar transacción a otro usuario
transactionRouter.post("/sendDepositUser/:idUser", postDepositUser);

export default transactionRouter;
