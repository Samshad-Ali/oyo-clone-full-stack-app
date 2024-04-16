"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Block from "./Block";
import Cookies from "js-cookie";
import { PiSuitcaseSimple, PiBuildings } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FaBarsStaggered } from "react-icons/fa6";
import Phonenav from "./Phonenav";

const Header1 = () => {
  const router = useRouter();
  const [isauth, setIsauth] = useState(false);
  const [toggle,setToggle] = useState(false);
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  const handleLogout = () => {
    setIsauth(false);
    Cookies.remove("user");
    router.push("/login");
  };
  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setIsauth(true);
      return;
    }
    setIsauth(false);
  }, [isauth]);
  return (
    <div className="relative flex justify-between  border-b-2 border-gray-200 items-center h-20 px-2 lg:px-10">
      <a href="/">
        <Image
          alt="logo"
          src={"/oyo.png"}
          width={200}
          height={200}
          className="w-24 lg:w-28"
        />
      </a>
      <button
      onClick={handleToggle}
      className="text-red-500 z-50 absolute top-7 right-4 block md:hidden"> <FaBarsStaggered size={25} /> </button>
      <div className="hidden md:flex   h-full">
        <Block
          icon={<PiSuitcaseSimple size={26} />}
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block
          title={"List your property"}
          para={"Start earning in 30 min."}
          icon={<PiBuildings size={26} />}
        />
        <Block
          title={"987654321"}
          para={"Call us to book now."}
          icon={<IoCallOutline size={26} />}
        />
        <div className="flex items-center px-3 ">
          <Image
            alt="user-avatar"
            src={"/avatar.png"}
            width={200}
            height={200}
            className="w-10 h-10"
          />
          {isauth ? (
            <h3 onClick={handleLogout} className=" font-bold cursor-pointer">
              Logout
            </h3>
          ) : (
            <Link href={"/login"} className=" font-bold">
              Login / Signup
            </Link>
          )}
        </div>
      </div>
          <Phonenav 
          toggle={toggle}
          isauth={isauth}
          handleLogout={handleLogout}
          />
    </div>
  );
};

export default Header1;


