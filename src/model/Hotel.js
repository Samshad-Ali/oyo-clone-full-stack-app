import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    banner: {
      type: String,
    },
    gallery: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
    },
    facilities: [
      {
        img: String,
        name: String,
      },
    ],
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.allhotels || mongoose.model("allhotels", hotelSchema);
