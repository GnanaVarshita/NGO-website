import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
function Middle() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#4fade7] font-bold p-2 hover:scale-105 duration-300">
          An Organisation Formed with helping hands
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          HELP PEOPLE IN NEED
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            WE AIM TO HELP <br />
          </p>
          <br />
          <Typed
            strings={["CHILDREN", "OLD CITIZENS", "ORPHANS", "WOMEN"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="pl-2 md:text-5xl sm:text-4xl text-xl font-bold text-[#4fade7]"
          />
        </div>
        <p className="text-gray-500  hover:scale-105 duration-300 ">
          GIVE HOPE is a non-profit, non-governmental organization The
          Sevashram's mission is to provide care and support to the poor, the
          sick, the elderly, and the orphaned. The Sevashram operates a number
          of different programs and services, including: A free hospital that
          provides medical care to the poor ,An orphanage that provides care for
          orphaned children ,A home for the elderly that provides care for the
          elderly and infirm ,A school that provides free education to children
          from poor families
        </p>
        <button className="bg-[#4fade7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300 ">
          <Link to="/events">Get Started</Link>
        </button>
      </div>
    </div>
  );
}

export default Middle;
