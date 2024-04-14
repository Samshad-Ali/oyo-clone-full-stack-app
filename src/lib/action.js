"use server"

import { dbConnect } from "@/database/dbConnect";
import Hotel from "@/model/Hotel";

  const singleHotelData = async (id) => {
    "use server"
    try {
      await dbConnect();
      const data = await Hotel.findById(id);
      return data;
    } catch (error) {
      return error.mesaage;
    }
  };

  export {singleHotelData};