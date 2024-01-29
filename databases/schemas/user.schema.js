import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
  amount: Number,
  accountNumber: {
    type: Number,
    unique: true,
  },
  keyFour: {
    type: Number,
    unique: true,
  },
  keySix: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Users = mongoose.model("Users", userSchema, "users");
export default Users;
