import express from "express";
import { postDeposit } from "../controllers/funds.controller.js";

const fundsRouters = express.Router();

// Ruta para enviar el deposito
fundsRouters.use("/sendDeposit", postDeposit);

export default fundsRouters;
