import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@/model/User";
import { dbConnect } from "@/database/dbConnect";

export async function POST(req) {
  try {
    dbConnect();
    const { name, email, password } = await req.json();
    console.log(name, email, password);
    if (!name || !email || !password) {
      return NextResponse.json({
        success:false,
        message: "all fields are required",
      });
    }
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return NextResponse.json({
        success:true,
        message: "user already registered ! login",
      });
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: encryptedPassword,
    });
    const savedUser = await newUser.save();
    const token = jwt.sign({ userId: savedUser._id }, "secret_key", {
      expiresIn: "1d",
    });
    return NextResponse.json({
        success:true,
      message: "user successfully registered",
      token,
    });
  } catch (error) {
    return NextResponse.json({
        success:false,
      message: error.message,
    });
  }
}
