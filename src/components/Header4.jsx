import Image from "next/image";

const Header4 = () => {
  return (
    <div className=" px-10 my-5">
      <div className="border flex justify-between items-center rounded-md p-4 px-20">
        <div className="flex gap-4 items-center">
          <div className="p-2 bg-red-200 rounded-full">
            <Image
            alt="fire"
              src={"/fire.png"}
              width={500}
              height={500}
              className="w-10 h-10"
            />
          </div>
          <div className="">
            <p className="text-black text-lg font-bold">
              Get access to exclusive deals
            </p>
            <p className="text-gray-500">
              Only the best deals reach your inbox
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <label
              className="absolute bg-white -top-2 font-semibold left-3 rounded-md text-gray-500  text-xs"
              htmlFor="email"
            >
              Your email
            </label>
            <input
              className="border rounded-md outline-none p-2 pl-1 placeholder:pl-1"
              type="email"
              id="email"
              placeholder="e.g., john@gmail.com"
            />
          </div>
          <button className="text-white bg-red-600 rounded-md px-4 p-2">
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header4;
