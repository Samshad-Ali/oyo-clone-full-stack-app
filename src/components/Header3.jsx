"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState("");
  const handleSearch = (e) => {
    setCity(e.target.value);
   
  };
  return (
    <div className="  h-60 flex flex-col gap-2 items-center justify-center bg-gradient-to-r from-red-600 to-red-500 px-2 lg:px-10">
      <h2 className="md:text-2xl lg:text-4xl text-white text-center font-bold">
        Over 157,000 hotels and homes across 35 countries
      </h2>
      <div className="flex w-full justify-center  items-center">
        <div className="bg-white h-14 w-[60%] lg:w-1/3  flex items-center gap-2 rounded-tl-sm rounded-bl-sm px-2 ">
          <input
            value={city}
            className="outline-none p-1 pl-3 w-full bg-transparent"
            type="text"
            placeholder="Search by city.."
            onChange={handleSearch}
          />
      
        </div>
        <Link href={`/hotels?city=${city}`}>
          <button className=" px-6 h-14 bg-green-700 text-white rounded-tr-sm rounded-br-sm transition-all hover:bg-green-600">
            Search
          </button>
        </Link>
      </div>
      <div className="self-start mt-2  flex items-center gap-2">
        <button className="text-white font-semibold">
          Continue your search
        </button>
        <button className="text-white font-semibold border hover:bg-gray-800 rounded-md px-2 p-2">
          Homestay in India hotels
        </button>
      </div>
    </div>
  );
};

export default Header3;
