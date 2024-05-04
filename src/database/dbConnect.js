import mongoose from "mongoose";
export const dbConnect = async () => {
  try {
    console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected...!");
  } catch (error) {
    console.log(error.message);
  }
};
