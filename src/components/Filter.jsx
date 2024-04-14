import React from "react";

const Filter = () => {
  return (
    <div className="w-full flex flex-col gap-4 border border-red-500 rounded-md p-4">
      <div className="flex gap-2  flex-col">
        <div className="flex flex-col gap-2">
          <label htmlFor="price" className="  font-bold">
            Price :{" "}
          </label>
          <input
            type="range"
            className="w-full h-4 outline-none  accent-red-500  transition-colors duration-200 ease-in-out"
            name="price"
            id="price"
            min={1000}
            max={3500}
          />
          <span className="font-semibold">&#8377; 500</span>
        </div>
        <button className="p-2 px-6 font-semibold bg-green-500 text-white rounded-sm cursor-pointer">
          Search
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className=" font-semibold">Filter by Facilities : </h3>
        <div className="flex-col flex gap-2">
          <div className="flex gap-2">
            <input className="accent-green-500" type="checkbox" id="wifi" />
            <label className="font-semibold text-sm text-gray-600" htmlFor="wifi"> Free Wi-Fi </label>
          </div>{" "}
          <div className="flex gap-2">
            <input className="accent-green-500" type="checkbox" id="swimming" />
            <label className="font-semibold text-sm text-gray-600" htmlFor="swimming"> Swimming Pool </label>
          </div>{" "}
          <div className="flex gap-2">
            <input className="accent-green-500" type="checkbox" id="pet" />
            <label className="font-semibold text-sm text-gray-600" htmlFor="pet"> Pet Care </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
