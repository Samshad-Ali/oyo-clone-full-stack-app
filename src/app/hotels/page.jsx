import Filter from "@/components/Filter";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import { getHotelsData } from "@/lib/api";
import React from "react";

export const metadata = {
  title: "All available hotels",
};
const page = async (params) => {
  const { searchParams } = params;
  const city = searchParams.city;
  const { data } = await getHotelsData(city);
  return (
    <>
      <Header1 />
      <div className=" w-full px-2 lg:px-10 flex items-center gap-4  p-4">
        <div className=" self-start w-[25%]">
          <Filter />
        </div>
        <div className="w-[75%]">
          {data
            ? data?.map((item) => {
                return <Hotel key={item?._id} data={item} />;
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default page;
