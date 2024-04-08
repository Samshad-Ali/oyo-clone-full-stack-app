import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import React from "react";

const page = () => {
  return (
    <>
    <Header1/>
    <div className="px-10 p-4">
      <Hotel />
      <Hotel />
    </div>
    </>
  );
};

export default page;
