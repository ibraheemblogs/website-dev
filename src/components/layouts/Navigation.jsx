import React, { useState } from "react";
import MenuIcon from "../svg-components/MenuIcon";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="max-w-screen px-3 md:px-20 mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
              <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                S
              </span>
              ShariahLabs
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon />
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent py-4 md:py-0 px-4 md:px-0 shadow-lg md:shadow-none items-start md:items-center gap-4 md:gap-8 z-50`}
          >
            <a href="#" className="text-green-600 w-full md:w-auto">
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 w-full md:w-auto"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 w-full md:w-auto"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 w-full md:w-auto"
            >
              Blog
            </a>
          </div>
          <div className="hidden md:block">
            <button className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-md hover:bg-green-600 hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
