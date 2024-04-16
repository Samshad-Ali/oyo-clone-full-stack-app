import { dbConnect } from "@/database/dbConnect";
import Hotel from "@/model/Hotel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
   await dbConnect();
    const newHotel =  await req.json();
    await Hotel.create(newHotel);
    return NextResponse.json({
        success:true,
        message:"Hotels added successfully."
    })
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
