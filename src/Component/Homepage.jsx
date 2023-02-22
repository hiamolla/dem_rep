import React from "react";
import { Link } from "react-router-dom";

function Homepage({ clickMenu }) {
  return (
    <>
      <div
        onKeyDown={clickMenu}
        className="bg-gradient-to-tr from-red-400 via-blue-900 to-green-700 relative mt-10"
      >
        <img
          className="w-full h-full object-cover mix-blend-overlay absolute"
          src="https://stonespecialists.net/wp-content/uploads/2019/04/home-768x362.png"
          alt="houseimg"
        />
        <div className="p-24 text-center">
          <h1 className="text-white text-lg font-bold sm:text-3xl md:text-4xl">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-white text-lg font-light">
            Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <Link to="/catalogs">
            <button className="bg-white p-3 mt-5 text-sm font-bold cursor-pointer hover:text-gray-400 transition duration-500">
              Browse our Catalogs Below
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center p-10">
        <h1 className="text-2xl text-gray-800">
          Lorem ipsum dolor sit amet, <br></br> consectetur adipisicing elit.
        </h1>
        <Link to="/catalogs">
          <button className="bg-black p-3 mt-8 text-sm text-white font-bold cursor-pointer hover:text-gray-400 transition duration-500">
            Browse our Catalogs
          </button>
        </Link>
      </div>
    </>
  );
}

export default Homepage;
