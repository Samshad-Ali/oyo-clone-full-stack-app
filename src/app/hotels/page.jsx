"use client";
import Filter from "@/components/Filter";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import Loader from "@/components/Loader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState(null);
  const [list, setList] = useState(null);
  const [price, setPrice] = useState(1000);
  const [checklist, setChecklist] = useState(null);
  const params = useSearchParams();
  const city = params.get("city");
  const filterHandler = async () => {
    const res = await fetch(
      `${process.env.BASE_URL}/api/filters?key=${checklist}`
    );
    const response = await res.json();
    setData(response?.data);
  };

  const priceRangeHandler = async () => {
    const res = await fetch(
      `${process.env.BASE_URL}/api/filters/price?price=${price}`
    );
    const response = await res.json();
    setData(response?.data);
  };
  const fetchingFacilitiesData = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/facilities`);
    const response = await res.json();
    setList(response?.data);
  };

  const getHotelsData = async (city) => {
    const res = await fetch(`${process.env.BASE_URL}/api/hotels?query=${city}`);
    const response = await res.json();
    setData(response?.data);
  };
  useEffect(() => {
    getHotelsData(city);
    fetchingFacilitiesData();
  }, []);

  useEffect(()=>{
    if(checklist){
      filterHandler()
    }else{
      getHotelsData(city)
    }
  },[checklist])
  if (data === null) return <Loader />;
  return (
    <>
      <Header1 />
      <div className=" md:flex-row flex-col w-full px-2 xl:px-10 flex items-center gap-4  p-4">
        <div className=" self-start w-full md:w-[25%]">
          <Filter
            checklist={checklist}
            setChecklist={setChecklist}
            price={price}
            setPrice={setPrice}
            priceRangeHandler={priceRangeHandler}
            list={list}
            data={data}
            setData={setData}
          />
        </div>
        <div className=" w-full md:w-[75%]">
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

export default Page;
