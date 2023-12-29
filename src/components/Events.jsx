import React from "react";

function Events() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="relative h-[400px] w-[300px] rounded-md hover:scale-105 duration-300 ">
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201906/child_labour.jpeg?VersionId=uephnaH7xTllu_lF6zqFtjmTO.dCNoRQ"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Child Labour</h1>
          <p className="mt-2 text-sm text-gray-300">
            From the Ground Up: Collective Action to End Child Labour in Supply
            Chains
          </p>
        </div>
      </div>

      <div className="relative h-[400px] w-[300px] rounded-md hover:scale-105 duration-300">
        <img
          src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-100790,resizemode-75,msid-93688578/magazines/panache/buzz/world-senior-citizen-day-2022-significance-history-and-value.jpg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">
            World Senior Citizen's Day
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            Observed each year on 21st August, World Senior Citizen Day is
            celebrated to recognise and acknowledge all the contributions senior
            citizens have made to society and our lives.
          </p>
        </div>
      </div>

      <div className="relative h-[400px] w-[300px] rounded-md hover:scale-105 duration-300">
        <img
          src="https://www.unicef.org/sites/default/files/styles/hero_extended/public/UN0284179.jpg.webp?itok=dig3Gw2w"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Girl's Education</h1>
          <p className="mt-2 text-sm text-gray-300">
            Gender equality in education benefits every child.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Events;
