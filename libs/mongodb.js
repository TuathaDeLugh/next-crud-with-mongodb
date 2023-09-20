import mongoose from "mongoose";
export default async function mongoDBConnect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/crud");
    console.log("Connection Successful");
  } catch (error) {
    console.log(error);
  }
}
