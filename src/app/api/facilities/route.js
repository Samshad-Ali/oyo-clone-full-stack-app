import { dbConnect } from "@/database/dbConnect";
import Hotel from "@/model/Hotel";
import { NextResponse } from "next/server";

export async function GET(){
    try {
      await  dbConnect()
      const facilities = await Hotel.find({}).distinct("facilities.name");
      return NextResponse.json({
        success:true,
        data:facilities
      })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:error.message
        })
    }
}