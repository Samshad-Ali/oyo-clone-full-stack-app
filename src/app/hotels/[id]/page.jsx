"use client"
import Cookies from "js-cookie";
import { singleHotelData } from "@/lib/action";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";

const page =  () => {
  const [data,setData] = useState(null);
  const [auth,setAuth] = useState(false)
  const params = useParams();
  const { id } = params;
  const fetchSingleHotel=async()=>{
    const res = await fetch(`${process.env.BASE_URL}/api/hotels/${id}`);
    const response = await res.json();
    setData(response?.data)
  }

  useEffect(()=>{
    fetchSingleHotel();
    const key = Cookies.get('user');
    if(key){
      setAuth(true);
      return
    }
    setAuth(false)
  },[])
  return (
    <div className="   w-full gap-4 p-4 px-10 flex flex-col">
      {
        data!==null ? <>
         <div className="flex gap-2 w-full ">
        <Image
          alt="hotel-img"
          src={data?.banner}
          width={500}
          height={400}
          className="w-[70%] object-cover rounded-md h-96"
        />
        <div className="flex w-[20%] justify-between flex-col">
          {data?.gallery?.map((img, idx) => (
            <Image
              alt="hotel-img"
              key={idx}
              src={img}
              width={500}
              height={400}
              className="w-full h-[120px] object-cover rounded-md"
            />
          ))}
        </div>
      </div>
      <div className="flex h-full flex-col gap-2 w-full">
        <h3 className=" font-bold text-2xl">{data?.title}</h3>
        <p className="text-gray-500 w-[90%]">{data?.description}</p>
        <span className="p-2 my-3 w-fit px-5 bg-blue-500 text-white rounded-sm font-semibold text-sm">
          Price : ₹ {data?.price}
        </span>
        <div className="flex gap-8 items-center">
          <span className="font-bold">Facilities : </span>
          <div className="flex items-center gap-4">
            {data?.facilities?.map((item) => (
              <div
                key={item?.name}
                className=" px-4 flex rounded-md bg-gray-300 items-center gap-2"
              >
                {" "}
                <Image
                  className="w-4 h-4 rounded-md object-cover"
                  src={item?.img}
                  height={200}
                  width={200}
                  alt="facilities"
                />{" "}
                <span className="font-semibold  px-2 text-sm p-1">
                  {item?.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {
          auth ? 
        <button className="p-3 my-4  w-fit px-10 text-sm hover:bg-green-600 transition-all bg-green-500  border border-green-500 rounded-sm text-white font-bold ">
          Book now
        </button>: <Link className="p-3 my-4 w-fit px-10 text-sm hover:bg-gray-200 transition-all border-green-500   border rounded-sm text-green-500 underline font-bold" href={'/login'} >Log in to Book the Hotel </Link>
        }
      </div>
        </> : <Loader/>
      }
     
    </div>
  );
};

export default page;
