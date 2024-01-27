import mongoose from "mongoose";

const mastersSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  dni: {
    type: Number,
    unique: true
  },
  key: {
    type: Number,
    required: true,
    unique: true
  },
});

const Masters = mongoose.model("Masters", mastersSchema, "masters");
export default Masters;
