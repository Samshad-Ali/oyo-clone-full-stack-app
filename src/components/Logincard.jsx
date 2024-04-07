import { useState } from "react";
import { LuBadgePercent } from "react-icons/lu";
const Logincard = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-gradient-to-r from-red-500 to-red-700 p-2 w-full text-white ">
        <div className="flex items-center ml-5 gap-2">
          <LuBadgePercent size={18} />
          <p className="font-semibold text-sm">Sign up & Get ₹500 OYO Money</p>
        </div>
      </div>
      <div className="w-full p-4">
        <h3 className="text-2xl font-bold ml-4 mb-4">Login / Signup</h3>
        <p> Please enter your credentials to continue</p>
        {login ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Enter your name..."
            className=" outline-none border my-3 rounded-md px-3 py-1 w-96 h-10"
            // onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Enter your email..."
          className=" outline-none border my-3 rounded-md px-3 py-1 w-96 h-10"
        //   onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter yourt password..."
          className=" outline-none border my-3 rounded-md px-3 py-1 w-96 h-10"
        //   onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full p-2 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-md"
          //   onClick={login ? handleLogin : handleSignup}
        >
          {login ? "Login " : " Sign Up"}
        </button>

        <span>
          {login ? "Don`t have an account ?" : "Already have an account ?"}
        </span>
        <span
          className="text-red-500 underline hover:cursor-pointer"
          // onClick={handleToggle}
        >
          {" "}
          {login ? "Sign Up" : "Login"}
        </span>
      </div>
    </div>
  );
};

export default Logincard;
