"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Block from "./Block";
import logo from "../../public/logo .png";
import avatar from "../../public/avatar.png";
import { PiSuitcaseSimple, PiBuildings } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
const Header1 = () => {
  const isauth = true;
  return (
    <div className="w-full flex justify-between border-b-2 border-gray-200 items-center h-20 px-10">
      <Image
        src={logo}
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28"
      />
      <div className=" h-full flex">
        <Block
          icon={<PiSuitcaseSimple size={28} />}
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block
          title={"List your property"}
          para={"Start earning in 30 min."}
          icon={<PiBuildings size={28} />}
        />
        <Block
          title={"987654321"}
          para={"Call us to book now."}
          icon={<IoCallOutline size={28} />}
        />
        <div className="flex items-center px-3 ">
          <Image src={avatar} width={200} height={200} className="w-10 h-10" />
          {isauth ? (
            <Link href={"/login"} className=" font-bold">
              Login / Signup
            </Link>
          ) : (
            <h3 className=" font-bold cursor-pointer">Logout</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
