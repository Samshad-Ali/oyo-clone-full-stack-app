import Image from "next/image";
const page = () => {
  return (
    <div className="   w-full gap-4 p-4 px-10 flex flex-col">
      <div className="flex gap-2 w-full ">
        <Image
          alt="hotel-img"
          src={
            "https://img1.10bestmedia.com/Images/Photos/187651/W-Atlanta-Downtown-WET_55_660x440_201404231251.jpg"
          }
          width={500}
          height={400}
          className="w-[70%] object-cover rounded-md h-96"
        />
        <div className="flex w-[20%] justify-between flex-col">
          <Image
            alt="hotel-img"
            src={
              "https://img1.10bestmedia.com/Images/Photos/187651/W-Atlanta-Downtown-WET_55_660x440_201404231251.jpg"
            }
            width={500}
            height={400}
            className="w-full h-[120px] object-cover rounded-md"
          />{" "}
          <Image
            alt="hotel-img"
            src={
              "https://img1.10bestmedia.com/Images/Photos/187651/W-Atlanta-Downtown-WET_55_660x440_201404231251.jpg"
            }
            width={500}
            height={400}
            className="w-full h-[120px] object-cover rounded-md"
          />{" "}
          <Image
            alt="hotel-img"
            src={
              "https://img1.10bestmedia.com/Images/Photos/187651/W-Atlanta-Downtown-WET_55_660x440_201404231251.jpg"
            }
            width={500}
            height={400}
            className="w-full h-[120px] object-cover rounded-md"
          />{" "}
        </div>
      </div>
      <div className="flex h-full flex-col gap-2 w-full">
        <h3 className=" font-bold text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing el.
        </h3>
        <p className="text-gray-500 w-[90%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sint
          magnam soluta iusto corporis laudantium modi, totam consequatur quis
          libero molestias corrupti atque in voluptatum cum ab earum minus
          temporibus.
        </p>
          <span className="p-2 w-fit px-5 bg-blue-500 text-white rounded-sm font-semibold text-sm">
            Price : ₹ 4999
          </span>
        <div className="flex gap-8 items-center">
          <span className="font-bold">Facilities : </span>
          <div className="flex items-center gap-4">
            <span className="font-semibold rounded-md bg-gray-300 px-2 text-sm p-1">
              Free wifi
            </span>
            <span className="font-semibold rounded-md bg-gray-300 px-2 text-sm p-1">
              Pet care
            </span>
            <span className="font-semibold rounded-md bg-gray-300 px-2 text-sm p-1">
              Swimming Pool
            </span>
          </div>
        </div>
          <button className="p-3 w-fit px-10 text-sm hover:bg-green-600 transition-all bg-green-500  border border-green-500 rounded-sm text-white font-bold ">
            Book now
          </button>
      </div>
    </div>
  );
};

export default page;
