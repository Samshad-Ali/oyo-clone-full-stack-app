import mongoose from "mongoose";
export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      bufferTimeoutMS: 60000, // Example: Increase timeout to 60 seconds
    });
    console.log("database connected...!");
  } catch (error) {
    console.log(error.message);
  }
};
