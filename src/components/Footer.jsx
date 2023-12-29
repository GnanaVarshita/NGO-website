import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="flex  justify-between md:w-[75%] my-6">
        <FaFacebookSquare size={30} />
        <FaTwitterSquare size={30} />
        <FaInstagramSquare size={30} />
      </div>
      <div>Hepl More</div>
    </div>
  );
}

export default Footer;
