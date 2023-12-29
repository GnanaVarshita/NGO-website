import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex text-white justify-between  items-center h-24 max-w-[1240px] mx-auto px-4 ">
        <h1 className="w-full text-3xl font-bold text-[#4fade7]">Give Hope</h1>
        <ul className="hidden md:flex cursor-pointer ">
          <li className="p-4 hover:scale-105 duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:scale-105 duration-300">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="p-4 hover:scale-105 duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 hover:scale-105 duration-300">
            <Link to="/events">Events</Link>
          </li>
          <li className="p-4 hover:scale-105 duration-300">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="p-4 hover:scale-105 duration-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
