import mongoose from "mongoose";

const masterSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  dni: {
    type: Number,
    required: true,
    unique: true,
  },
  cardNumber: {
    type: Number,
    unique: true,
  },
  key: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Masters = mongoose.model("Masters", masterSchema, "masters");
export default Masters;
