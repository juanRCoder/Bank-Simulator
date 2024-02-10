import mongoose from "mongoose";
import moment from "moment-timezone";

const movementSchema = new mongoose.Schema(
  {
    id_fromUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    fromUser: String,
    timestamp: {
      type: Date,
      default: () => moment.tz("America/Lima").format(),
    },
    id_forUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    forUser: String,
  },
  { strict: false, versionKey: false }
);

const Movements = mongoose.model("Movements", movementSchema, "movements");
export default Movements;
