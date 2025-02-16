import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="max-w-screen px-20 mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
              <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                S
              </span>
              ShariahLabs
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-green-600">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Blog
            </a>
          </div>
          <button className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-md hover:bg-green-600 hover:text-white">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
