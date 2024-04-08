import Image from "next/image";
import Link from "next/link";

const Hotel = () => {
  return (
    <div className=" border flex items-center border-red-500 rounded-md h-60 w-full mb-5 p-2">
      <div className="flex gap-2 w-[45%] items-center ">
        <Image
          alt="hotel-img"
          src={
            "https://img1.10bestmedia.com/Images/Photos/187651/W-Atlanta-Downtown-WET_55_660x440_201404231251.jpg"
          }
          width={500}
          height={400}
          className="w-80 object-cover rounded-md h-56"
        />
        <div className="flex justify-between flex-col h-56">
          <Image
            alt="hotel-img"
            src={
              "https://img1.10bestmedia.com/Images/Photos/187651/W-Atlanta-Downtown-WET_55_660x440_201404231251.jpg"
            }
            width={500}
            height={400}
            className="w-36 h-[68px] object-cover rounded-md"
          />{" "}
          <Image
            alt="hotel-img"
            src={
              "https://img1.10bestmedia.com/Images/Photos/187651/W-Atlanta-Downtown-WET_55_660x440_201404231251.jpg"
            }
            width={500}
            height={400}
            className="w-36 h-[68px] object-cover rounded-md"
          />{" "}
          <Image
            alt="hotel-img"
            src={
              "https://img1.10bestmedia.com/Images/Photos/187651/W-Atlanta-Downtown-WET_55_660x440_201404231251.jpg"
            }
            width={500}
            height={400}
            className="w-36 h-[68px] object-cover rounded-md"
          />{" "}
        </div>
      </div>
      <div className="flex h-full flex-col justify-between w-[65%] pl-4">
        <h3 className="line-clamp-1 font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing el.</h3>
        <p className="text-gray-500 line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sint magnam soluta iusto corporis laudantium modi, totam consequatur quis libero molestias corrupti atque in voluptatum cum ab earum minus temporibus.</p>
      <div className="flex gap-4 items-center">
        <span className="font-bold">Facilities : </span>
        <div className="flex items-center gap-2">

        <span className="font-semibold rounded-md bg-gray-300 px-2 text-sm p-1">Free wifi</span>
        <span className="font-semibold rounded-md bg-gray-300 px-2 text-sm p-1">Pet care</span>
        <span className="font-semibold rounded-md bg-gray-300 px-2 text-sm p-1">Swimming Pool</span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <span className="p-2 px-5 bg-red-500 text-white rounded-sm font-semibold text-sm">Price :  ₹ 4999</span>
        <Link href={'/hotels/helo'} className="p-2 px-5 text-sm hover:scale-105 transition-all   border border-red-500 rounded-sm text-red-500 font-bold ">See Details</Link>
      </div>
      </div>
    </div>
  );
};

export default Hotel;
