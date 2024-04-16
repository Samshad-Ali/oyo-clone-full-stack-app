import Image from "next/image";
import Link from "next/link";

const Hotel = ({ data }) => {
  return (
    <div className="  border gap-4 flex lg:gap-2 lg:flex-row flex-col items-center border-red-500 h-auto xl:h-64 rounded-md  w-full mb-5 p-3 lg:p-2">
      <div className="  w-full lg:w-[40%] ">
        <Image
          alt="hotel-img"
          src={data?.banner}
          width={500} 
          height={400}
          className="w-full object-cover rounded-md h-52 md:h-60 lg:h-60 xl:h-58"
        />
      </div>
      <div className="flex h-full flex-col gap-2 justify-between w-full lg:w-[70%] pl-0 lg:pl-4">
        <h3 className="line-clamp-1 font-bold text-lg md:text-2xl">{data?.title}</h3>
        <p className="text-gray-500 line-clamp-3">{data?.description}</p>
        <div className="flex xl:flex-row flex-col gap-4">
          <span className="font-bold self-start">Facilities : </span>
          <div className="flex flex-wrap gap-4 lg:justify-between items-center lg:gap-2">
            {data?.facilities?.map((item) => (
              <div key={item?.name} className="px-2  xl:px-4 flex rounded-md bg-gray-300 items-center gap-2">
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
        <div className="mt-4 flex items-center gap-4">
          <span className="p-2 px-5 bg-blue-500 text-white rounded-sm font-semibold text-sm">
          ₹ {data?.price}
          </span>
          <Link
            href={`/hotels/${data?._id}`}
            className="p-2 px-5 text-sm underline hover:scale-105 transition-all rounded-sm text-red-500 font-bold "
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
