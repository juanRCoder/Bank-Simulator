import mongoose from "mongoose";
import moment from "moment-timezone";

const movementSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Bank",
  },
  lastName: {
    type: String,
    default: "Simulator",
  },
  timestamp: {
    type: Date,
    default: () => moment.tz("America/Lima").format(),
  },
  amount: Number,
});

const Movements = mongoose.model("Movements", movementSchema, "movements");
export default Movements;
