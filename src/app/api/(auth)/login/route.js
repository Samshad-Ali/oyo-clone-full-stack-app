import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@/model/User";
import { dbConnect } from "@/database/dbConnect";

export async function POST(req) {
  try {
   await dbConnect();
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({
        success:false,
        message: "all fields are required",
      });
    }
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return NextResponse.json({
        success:false,
        message: "user not found ! registered first",
      });
    }
    const matchedPassword = await bcrypt.compare(
      password,
      isUserExist.password
    );
    if (!matchedPassword) {
      return NextResponse.json({
        success:false,
        message: "invalid credentials !",
      });
    }
    const token = jwt.sign({ userId: isUserExist._id }, "secret_key", {
      expiresIn: "1d",
    });
    return NextResponse.json({
        success:true,
      message: "welcome back...",
      token,
    });
  } catch (error) {
    return NextResponse.json({
        success:false,
      message: error.message,
    });
  }
}
