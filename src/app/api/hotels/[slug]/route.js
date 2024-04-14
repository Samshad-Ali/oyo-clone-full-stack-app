import { dbConnect } from "@/database/dbConnect";
import Hotel from "@/model/Hotel";
import { NextResponse } from "next/server";

export async function GET(req,params){
    try {
        await dbConnect();
        const {slug} = params.params;
        const isHotel = await Hotel.findById(slug);
        if(!isHotel){
            return NextResponse.json({
                success:false,
                message:"Hotel not found"
            })
        }
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