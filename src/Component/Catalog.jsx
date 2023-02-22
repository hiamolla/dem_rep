import React from "react";
import { Link } from "react-router-dom";

function Catalog({ clickMenu }) {
  return (
    <div onKeyDown={clickMenu}>
      <div className="text-gray-700 mt-10 md:mt-10 sm:mt-5 md:flex md:flex-row md:justify-between md:px-4">
        <h1 className="text-lg font-bold text-gray-700 text-center">
          View Our Catalogs
        </h1>
        <Link to="/designs">
          <h1 className="hidden md:block text-lg font-bold text-gray-700 cursor-pointer hover:text-gray-400 transition duration-500">
            Check Our Designs &#8594;
          </h1>
        </Link>
      </div>

      <div className="mt-6 md:flex md:flex-row md:px-6 md:space-x-16 items-center">
        <div className="sm:mt-5 px-6 flex flex-col items-center text-center">
          <div className=" bg-gradient-to-tr from-green-800 via-slate-700 to-blue-600">
            <img
              className="w-[30rem] h-[15rem] sm:w-[40rem] sm:h-[25rem] md:w-[25rem] md:h-[15rem] mix-blend-overlay "
              src="https://www.homelane.com/blog/wp-content/uploads/2022/11/modern-home-with-glass-front-elevation-450x290.jpg"
              alt=" brown house"
            />
          </div>

          <h1 className="font-semibold mt-4 text-lg md:text-center md:text-xl md:font-bold">
            Ut enim ad minim veniam officia deserunt
          </h1>
          <p className="mt-2 text-center text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum
            <br />
            dolore eu fugiat nulla pariatur
          </p>
        </div>

        <div className="mt-6 px-6 flex flex-col items-center text-center">
          <div className="bg-gradient-to-tr from-orange-600 to-blue-500">
            <img
              className="w-[30rem] h-[15rem] sm:w-[40rem] sm:h-[25rem] md:w-[25rem] md:h-[15rem] mix-blend-overlay"
              src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800"
              alt=" brown house"
            />
          </div>

          <h1 className="font-semibold mt-4 text-lg md:text-center md:text-xl md:font-bold">
            Ut enim ad minim veniam officia deserunt
          </h1>
          <p className="mt-2 text-center text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum
            <br />
            dolore eu fugiat nulla pariatur
          </p>
        </div>

        <div className="mt-6 px-6 flex flex-col items-center text-center">
          <div className="bg-gradient-to-tr from-green-600 via-cyan-700 to-green-600">
            <img
              className="w-[30rem] h-[15rem] sm:w-[40rem] sm:h-[25rem] md:w-[25rem] md:h-[15rem] mix-blend-overlay"
              src="https://www.thespruce.com/thmb/vku7wTT0FRJavD4UbKSvElsM9RE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pixasquare-4ojhpgKpS68-unsplash-ca4afd459306430ab50c2cc32ce2715d.jpg"
              alt=" brown house"
            />
          </div>

          <h1 className="font-semibold mt-4 text-lg md:text-center md:text-xl md:font-bold">
            Ut enim ad minim veniam officia deserunt
          </h1>
          <p className="mt-2 text-center text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum
            <br />
            dolore eu fugiat nulla pariatur
          </p>
        </div>
      </div>

      <div className="mt-10 text-center sm:hidden">
        <Link to="/designs">
          <h1 className="p-3 text-gray-800 font-bold text-lg cursor-pointer hover:text-gray-700 transition duration-500">
            Check Our Designs &#8594;
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Catalog;
