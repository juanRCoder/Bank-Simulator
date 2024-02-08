import express from "express";
import { postDepositUser, getResultTransaction } from "../controllers/transactions.controllers.js";

const transactionRouter = express.Router();

// Ruta para realizar transacción a otro usuario
transactionRouter.post("/sendDepositUser/:id", postDepositUser);
transactionRouter.get("/ResultTransaction/:idResult", getResultTransaction);

export default transactionRouter;
