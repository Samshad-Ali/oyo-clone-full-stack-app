"use client";
import Cookies from "js-cookie";
import { singleHotelData } from "@/lib/action";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";
import Header1 from "@/components/Header1";
import toast from "react-hot-toast";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const page = () => {
  const [data, setData] = useState(null);
  const [auth, setAuth] = useState(false);
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const handleBook = () => {
    toast.success("Happy Booking..😄");
    router.push("/");
  };
  const fetchSingleHotel = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/hotels/${id}`);
    const response = await res.json();
    setData(response?.data);
  };
  const allImages = [...(data?.gallery || []), data?.banner];
  useEffect(() => {
    fetchSingleHotel();
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, []);
  return (
    <>
      <Header1 />
      <div className="   w-full gap-4 p-2 sm:p-4 sm:px-5 lg:px-10 flex flex-col">
        {data !== null ? (
          <>
            <div className="flex flex-col sm:flex-row gap-2 w-full "></div>
            <div className="w-full">
              <Carousel
              autoPlay
              interval={2000} 
              stopOnHover={true}
              infiniteLoop={true}
              >
                {allImages?.map((image, index) => (
                  <Image
                    key={index}
                    alt="hotel-img"
                    src={image}
                    width={500}
                    height={400}
                    className="h-52 sm:h-80  md:h-[400px] object-cover rounded-md"
                  />
                ))}
              </Carousel>
            </div>
            <div className="flex h-full flex-col gap-2 w-full">
              <h3 className=" font-bold text-xl sm:text-2xl">{data?.title}</h3>
              <p className="text-gray-500 w-full sm:text-base text-sm sm:w-[90%]">
                {data?.description}
              </p>
              <span className="p-2 my-3 w-fit px-5 bg-blue-500 text-white rounded-sm font-semibold text-sm">
                Price : ₹ {data?.price}
              </span>
              <div className="flex sm:flex-row flex-col items-start gap-4 sm:gap-8 sm:items-center">
                <span className="font-bold">Facilities : </span>
                <div className="flex flex-wrap items-center gap-4">
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
              {auth ? (
                <button
                  onClick={handleBook}
                  className=" p-2 sm:p-3 my-4  w-fit px-10 text-sm hover:bg-green-600 transition-all bg-green-500  border border-green-500 rounded-sm text-white font-bold "
                >
                  Book now
                </button>
              ) : (
                <Link
                  className="p-3 my-4 w-fit px-10 text-sm hover:bg-gray-200 transition-all border-green-500   border rounded-sm text-green-500 underline font-bold"
                  href={"/login"}
                >
                  Log in to Book the Hotel{" "}
                </Link>
              )}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default page;
