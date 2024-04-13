import Image from "next/image";
import Link from "next/link";

const Hotel = ({ data }) => {
  return (
    <div className=" border flex items-center border-red-500 rounded-md h-60 w-full mb-5 p-2">
      <div className="flex gap-2 w-[45%] items-center ">
        <Image
          alt="hotel-img"
          src={data?.banner}
          width={500}
          height={400}
          className="w-80 object-cover rounded-md h-56"
        />
        <div className="flex justify-between flex-col h-56">
          {data?.gallery?.map((img, idx) => (
            <Image
              alt="hotel-img"
              key={idx}
              src={img}
              width={500}
              height={400}
              className="w-36 h-[68px] object-cover rounded-md"
            />
          ))}
        </div>
      </div>
      <div className="flex h-full flex-col justify-between w-[65%] pl-4">
        <h3 className="line-clamp-1 font-bold text-2xl">{data?.title}</h3>
        <p className="text-gray-500 line-clamp-3">{data?.description}</p>
        <div className="flex gap-4 items-center">
          <span className="font-bold">Facilities : </span>
          <div className="flex items-center gap-2">
            {data?.facilities?.map((item) => (
              <div key={item?.name} className=" px-4 flex rounded-md bg-gray-300 items-center gap-2">
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
          <span className="p-2 px-5 bg-red-500 text-white rounded-sm font-semibold text-sm">
          ₹{data?.price}
          </span>
          <Link
            href={"/hotels/helo"}
            className="p-2 px-5 text-sm hover:scale-105 transition-all   border border-red-500 rounded-sm text-red-500 font-bold "
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
