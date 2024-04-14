import Image from "next/image";

const Poster = () => {
  return (
    <div className="px-2 lg:px-10 my-5">
      <Image alt="banner" src={'/banner1.jpg'} width={500} height={500} className=" h-full w-full mb-5" />
      <Image alt="banner" src={'/banner2.jpg'} width={500} height={500} className="w-full h-full" />
    </div>
  );
};

export default Poster;
