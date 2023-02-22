import React from "react";

function Footer() {
  return (
    <div>
      <div className="px-4 py-4 text-center text-xs flex flex-col gap-2 sm:flex-row sm:justify-between">
        <p>©2019 Your Company. All rights reserved.</p>
        <ul className="flex items-center justify-evenly sm:gap-5">
          <li className="hover:underline hover:decoration-gray-900 transition duration-500">
            <a href="/">Privacy Policy</a>
          </li>
          <li className="hover:underline hover:decoration-gray-900 transition duration-500">
            <a href="/">Terms & Conditions</a>
          </li>
          <li className="hover:underline hover:decoration-gray-900 transition duration-500">
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
