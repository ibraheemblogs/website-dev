import React, { useState } from "react";
import { NavLink } from "react-router";
import MenuIcon from "../svg-components/MenuIcon";
import ShariaLabsLogo from "../ShariaLabsLogo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-[#F0F1F3] w-full">
      <div className="max-w-screen px-3 md:px-20 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <ShariaLabsLogo />
            </a>
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-green-600"
                    : "text-gray-600 hover:text-gray-900"
                } w-full md:w-auto`
              }
            >
              Home
            </NavLink>
            {/* <a
              href="#"
              className="text-gray-600 hover:text-gray-900 w-full md:w-auto"
            >
              About Us
            </a> */}
            <a
              href="#sharialab-services"
              className="text-gray-600 hover:text-gray-900 w-full md:w-auto"
            >
              Services
            </a>
            <a
              href="https://www.linkedin.com/company/sharia-labs/posts"
              className="text-gray-600 hover:text-gray-900 w-full md:w-auto"
            >
              Blog
            </a>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-green-600"
                    : "text-gray-600 hover:text-gray-900"
                } w-full md:w-auto md:hidden`
              }
            >
              Contact Us
            </NavLink>
          </div>
          <div className="hidden md:block">
            <NavLink
              to="/contact-us"
              className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-md hover:bg-green-600 hover:text-white"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
