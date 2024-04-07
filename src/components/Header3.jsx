import Link from "next/link";
import React from "react";

const Header3 = () => {
  return (
    <div className="  h-60 flex flex-col gap-2 items-center justify-center bg-gradient-to-r from-red-600 to-red-500 px-10">
      <h2 className=" text-4xl text-white text-center font-bold">
        Over 157,000 hotels and homes across 35 countries
      </h2>
      <div className="flex   items-center">
        <form className="bg-white h-14 flex items-center gap-2 rounded-tl-sm rounded-bl-sm px-2 ">
          <input
            className="outline-none p-1 border-r bg-transparent"
            type="text"
            placeholder="Search..."
          />
          <input
            className="outline-none p-1 bg-transparent border-r"
            type="time"
          />

          <input className="outline-none p-1 bg-transparent" type="date" />
        </form>
        <Link href={'/hotels'}>
        <button
          type="submit"
          className=" px-6 h-14 bg-green-700 text-white rounded-tr-sm rounded-br-sm transition-all hover:bg-green-600"
          >
          Search
        </button>
          </Link>
      </div>
      <div className="self-start mt-2  flex items-center gap-2">
        <button className="text-white font-semibold">Continue your search</button>
        <button className="text-white font-semibold border hover:bg-gray-800 rounded-md px-2 p-2">Homestay in India hotels</button>
      </div>
    </div>
  );
};

export default Header3;
