"use client";
import Image from "next/image";
import Link from "next/link";
import { PiSuitcaseSimple, PiBuildings } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import Phoneblock from "./Phoneblock";
const Phonenav = ({isauth,handleLogout,toggle}) => {
  return (
    <div className={` ${toggle?'translate-x-0':'-translate-x-[100%]'} transition-all flex p-4  top-0 right-0 flex-col gap-4 items-center justify-center absolute w-full z-20 bg-white md:hidden   h-screen`}>
      <a className="self-start" href="/">
        <Image
          alt="logo"
          src={"/oyo.png"}
          width={200}
          height={200}
          className="w-24 lg:w-28"
        />
      </a>
        <Phoneblock
          icon={<PiSuitcaseSimple size={26} />}
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Phoneblock
          title={"List your property"}
          para={"Start earning in 30 min."}
          icon={<PiBuildings size={26} />}
        />
        <Phoneblock
          title={"987654321"}
          para={"Call us to book now."}
          icon={<IoCallOutline size={26} />}
        />
        <div className="flex items-center px-4 border gap-4 p-2 rounded-md  ">
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
  )
}

export default Phonenav