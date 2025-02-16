import React from "react";
import Logo from "./../assets/Logo.png";
import LinkedInIcon from "./svg-components/LinkedInIcon";
import InstagramIcon from "./svg-components/InstagramIcon";

const Footer = () => {
  return (
    <footer className="bg-white py-8 w-full mt-12">
      <div className="max-w-screen px-4 mx-auto">
        <img src={Logo} alt="ShariaLabs" className="mx-auto mb-6" />
        <div className="flex justify-center gap-4 mb-12">
          <a href="#" className="text-gray-600 hover:text-yellow-500">
            <LinkedInIcon />
          </a>
          <a href="#" className="text-gray-600 hover:text-yellow-500">
            <InstagramIcon />
          </a>
        </div>
        <p className="text-gray-600 text-center">
          © 2025 ShariaLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
