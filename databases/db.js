import mongoose from "mongoose";

//Connect to MondoDB
const url = "mongodb://127.0.0.1/BankDB";

async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("Connected to the database!!");
  } catch (err) {
    console.log("Disconnect from the database!!", err)
  }
}

export default connectDB;
