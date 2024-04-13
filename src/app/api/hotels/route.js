import Hotel from "@/model/Hotel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    console.log(query);
    if (query !== null) {
      const hotels = await Hotel.find({ location: query });
      return NextResponse.json({
        success: true,
        query,
        data: hotels,
      });
    }
    // console.log(hotels);
    // if (hotels.length > 0) {
    // }
    const allhotels = await Hotel.find({});
    console.log(allhotels);
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
