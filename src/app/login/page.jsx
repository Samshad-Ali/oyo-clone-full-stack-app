"use client";

import Logincard from "@/components/Logincard";
import Head from "next/head";
import { useState } from "react";
const page = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [login, setLogin] = useState(false);

  return (
    <main>
      <Head>
        <title>OYO - Login !</title>
      </Head>
      <div>
        <div className="flex h-screen px-10 gap-3 justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-95">
          <div className=" absolute top-10 left-10 gap-2 flex items-center text-white">
            <h2 className="text-4xl text-black font-extrabold">OYO</h2>
            <p className=" font-bold text-lg  ">
              Hotels and homes across 800 cities, 24+ countries
            </p>
          </div>
          <div className=" p-20 flex text-white flex-col gap-2 justify-center items-center ">
            <p className=" font-bold text-4xl text-justify">
              There’s a smarter way to OYO around
            </p>
            <p className=" text-xl text-justify">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className="bg-white  w-2/3">
            <Logincard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
