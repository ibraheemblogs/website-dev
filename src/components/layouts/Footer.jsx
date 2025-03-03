import React from "react";
import Logo from "./../../assets/Logo.png";
import LinkedInIcon from "../svg-components/LinkedInIcon";
import InstagramIcon from "../svg-components/InstagramIcon";
import ShariaLabsLogo from "../ShariaLabsLogo";

const Footer = () => {
  return (
    <footer className="bg-white py-8 w-full mt-12">
      <div className="max-w-screen px-4 mx-auto">
        <div className="flex justify-center mb-8">
          <ShariaLabsLogo />
        </div>
        <div className="flex justify-center gap-4 mb-16">
          <a
            href="http://linkedin.com/company/sharia-labs"
            className="text-gray-600 hover:text-yellow-500"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/sharialabs"
            className="text-gray-600 hover:text-yellow-500"
          >
            <InstagramIcon />
          </a>
        </div>
        <p className="text-gray-600 text-center">
          © {new Date().getFullYear()} ShariaLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
