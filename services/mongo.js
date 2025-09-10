import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    console.log("mongo connected");
  } catch (error) {
    console.error("not coonected");
  }
}
