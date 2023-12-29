import React from "react";
import { Link } from "react-router-dom";
function Stories() {
  return (
    <div className=" mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className=" w-full py-16 px-4 flex justify-center ">
        <div class="relative h-[400px] w-[300px] rounded-md shadow-xl hover:scale-105 duration-300">
          <img
            src="https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg"
            alt="AirMax Pro"
            class="z-0 h-full w-full rounded-md object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div class="absolute bottom-4 left-4 text-left">
            <h1 class="text-lg font-semibold text-white">Homage to Orphans</h1>
            <p class="mt-2 text-sm text-gray-300">
              A child has to be nurtured and be given the save environment for
              growing. Check out our story of Homage to Orphans
            </p>
            <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              <Link to="/projects">View Story → </Link>
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full py-16 px-4 flex justify-center">
        <div class="relative h-[400px] w-[300px] rounded-md shadow-xl hover:scale-105 duration-300">
          <img
            src="https://give.do/blog/wp-content/uploads/2021/11/Education-top-10-blog-banner.jpg"
            alt="AirMax Pro"
            class="z-0 h-full w-full rounded-md object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div class="absolute bottom-4 left-4 text-left">
            <h1 class="text-lg font-semibold text-white">Education</h1>
            <p class="mt-2 text-sm text-gray-300">
              We are supporting for more than 500 kids for their education, from
              books to uniforms
            </p>
            <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              <Link to="/projects">View Story → </Link>
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full py-16 px-4 flex justify-center">
        <div class="relative h-[400px] w-[300px] rounded-md shadow-xl hover:scale-105 duration-300">
          <img
            src="https://in.childhelpfoundation.in/assets/img/slide/chf-christmas.jpg"
            alt="AirMax Pro"
            class="z-0 h-full w-full rounded-md object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div class="absolute bottom-4 left-4 text-left">
            <h1 class="text-lg font-semibold text-white">Celebrations</h1>
            <p class="mt-2 text-sm text-gray-300">
              Merry Christmas, Cherry Christmas and Happy New Year
            </p>
            <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              <Link to="/projects">View Story → </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
