import express from "express";
import { postDeposit, postRetiro } from "../controllers/funds.controller.js";

const fundsRouters = express.Router();

// Ruta para enviar el deposito
fundsRouters.post("/sendDeposit", postDeposit);
fundsRouters.post("/sendRetiro", postRetiro);

export default fundsRouters;
