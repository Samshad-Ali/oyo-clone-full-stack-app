import { dbConnect } from "@/database/dbConnect";
import Hotel from "@/model/Hotel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    const capitalise = query[0].toUpperCase() + query.substring(1);
    const hotels = await Hotel.find({ location: capitalise });
    if (hotels.length > 0) {
      return NextResponse.json({
        success: true,
        data: hotels,
      });
    }
    const allhotels = await Hotel.find({});
    return NextResponse.json({
      success: true,
      data: allhotels,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
