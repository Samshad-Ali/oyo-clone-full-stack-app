import { dbConnect } from "@/database/dbConnect";
import Hotel from "@/model/Hotel";
import { NextResponse } from "next/server";

export async function GET(req){
    try {
        await dbConnect();
        const searchParams = req.nextUrl.searchParams;
        const query = searchParams.get("key");
        const isHotel = await Hotel.find({'facilities.name':{$in:query}})
        return NextResponse.json({
            success:true,
            data:isHotel
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:error.message
        })
    }
}