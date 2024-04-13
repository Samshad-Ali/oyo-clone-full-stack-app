import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import React from "react";

const getHotelsData = async (city) => {
  "use server";
  const response = await fetch(
    `http://localhost:3000/api/hotels?query=${city}`,{cache:'no-store'}
  );
  if (!response.ok) {
    throw new Error("failed to load the data");
  }
  const data = response.json();
  return data;
};
const page = async (params) => {
  const { searchParams } = params;
  const city = searchParams.city;
  const {data} = await getHotelsData(city);
  return (
    <>
      <Header1 />
      <div className="px-10 p-4">
        {data
          ? data?.map((item) => {
              return <Hotel key={item?._id} data={item} />;
            })
          : ""}
      </div>
    </>
  );
};

export default page;
