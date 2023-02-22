import React from "react";
import { Link } from "react-router-dom";

function NavBar({ clickMenu, showSideBar }) {
  return (
    <header onKeyDown={clickMenu}>
      <nav className="relative">
        <div className="z-[100] border-b border-gray-400 flex justify-between p-3 md:px-4">
          <div className="flex sm:flex-col sm:items-center sm:flex-1 sm:space-y-3 md:flex-row md:justify-between md:space-y-0 md:py-1">
            <h1 className="text-gray-800 font-bold">Vertigo</h1>
            <button className="bg-black p-2.5 text-white text-sm hidden sm:block">
              Sign Up
            </button>
          </div>

          {/* hamburger menu */}
          <button
            className="text-gray-800 text-2xl cursor-pointer border-0 focus:outline-none sm:hidden"
            onClick={clickMenu}
          >
            {showSideBar ? (
              <ion-icon name="close-outline"></ion-icon>
            ) : (
              <ion-icon name="menu-outline"></ion-icon>
            )}
          </button>
        </div>

        {/* side bar */}
        <div
          onClick={clickMenu}
          className={`z-10 text-white bg-blue-600 h-screen w-[40%] absolute inset-y-0 left-0 sm:bg-white sm:text-black ${
            showSideBar
              ? "translate-x-0 transform transsition duration-500 ease-in-out"
              : "-translate-x-full transform transsition duration-500 ease-in-out"
          }`}
        >
          <p className="p-3 font-bold text-white">Vertigo</p>
          <ul className="flex flex-col space-y-4 py-10 px-2 text-sm">
            <li className="cursor-pointer p-2 hover:bg-blue-500 transition duration-500">
              <Link to="/">Home</Link> 
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-500 transition duration-500">
              <Link to="/catalogs">Catalogs</Link>
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-500 transition duration-500">
              <Link to="/designs">Designs</Link>
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-500 transition duration-500">
              <Link to="/">About Us</Link>
            </li>
            <li className="cursor-pointer p-2 hover:bg-blue-500 transition duration-500">
              <Link to="/">Contact Us</Link>
            </li>
            <li className="cursor-pointer p-2 bg-white rounded inline  text-blue-600 font-bold hover:text-blue-800 sm:hidden">
              <Link to="/">Sign Up</Link>
            </li>
          </ul>
        </div>

        {/* bar-wider screen widths for wider screen */}

        <div className="hidden mt-2 sm:flex sm:flex-col sm:text-sm sm:items-center sm:space-y-5 md:flex md:text-center md:flex-row md:justify-between md:px-4 md:space-y-2">
          <div className="cursor-pointer sm:space-x-3 md:space-x-0 text-gray-800">
            <span className="md:border-r-[1px] md:border-r-gray-400 md:px-2 hover:text-gray-500 hover:font-bold transition duration-500">
              <Link to="/">Home</Link>
            </span>
            <span className="md:border-r-[1px] md:border-r-gray-400 md:px-2 hover:text-gray-500 hover:font-bold transition duration-500">
              <Link to="/catalogs">Catalogs</Link>
            </span>
            <span className="md:border-r-[1px] md:border-r-gray-400 md:px-2 hover:text-gray-500 hover:font-bold transition duration-500">
              <Link to="/designs">Designs</Link>
            </span>
            <span className="md:border-r-[1px] md:border-r-gray-400 md:px-2 hover:text-gray-500 hover:font-bold transition duration-500">
              <Link to="/">About Us</Link>
            </span>
            <span className="md:px-2 hover:text-gray-500 hover:font-bold transition duration-500">
              <Link to="/">Contact Us</Link>
            </span>
          </div>

          <div>
            <input
              className="bg-slate-300 p-1 text-sm"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </nav>
    </header>

   
  );
}

export default NavBar;
