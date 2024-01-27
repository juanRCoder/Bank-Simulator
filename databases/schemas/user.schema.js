import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  dni: {
    type: Number,
    required: true,
    unique: true
  },
  numTarjeta: {
    type: Number,
    unique: true
  },
  key: {
    type: Number,
    required: true,
    unique: true
  },
});

const Users = mongoose.model("Users", userSchema, "users");
export default Users;
