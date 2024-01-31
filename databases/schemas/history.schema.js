import mongoose from "mongoose";
import moment from "moment-timezone";

const historySchema = new mongoose.Schema(
  {
    from: String,
    timestamp: {
      type: Date,
      default: () => moment.tz("America/Lima").format(),
    },
    for: String,
    cardNumber: Number,
  },
  { strict: false, versionKey: false }
);

const History = mongoose.model("History", historySchema, "history");
export default History;

//variable
//retiro // depositado // transaccion y nombre persona y tarjeta de credito
