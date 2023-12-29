import React from "react";
import Typed from "react-typed";
function Middle() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Growing WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast,flexible financing for
          </p>

          <Typed
            strings={["bcd", "bxh", "bsjc", "sye"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="pl-2"
          />
        </div>
        <p className="text-gray-500">
          Type something about oragnisation ... Home page Intro , start date and
          goal of the organisation
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Middle;
