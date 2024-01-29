import mongoose from "mongoose";
import moment from "moment-timezone";

const historySchema = new mongoose.Schema({
  name: String,
  lastName: String,
  cardNumber: Number,
  CurrentAmount: Number,
  timestamp: { 
    type: Date, 
    default: () => moment.tz("America/Lima").format() },
});

const History = mongoose.model("History", historySchema, "history");
export default History;

//variable
//retiro // deposito // transaccion y nombre persona y tarjeta de credito
