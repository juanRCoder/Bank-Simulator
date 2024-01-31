import mongoose from "mongoose";
import moment from "moment-timezone";

const movementSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    from_user: String,
    timestamp: {
      type: Date,
      default: () => moment.tz("America/Lima").format(),
    },
    for: String,
  },
  { strict: false, versionKey: false }
);

const Movements = mongoose.model("Movements", movementSchema, "movements");
export default Movements;
