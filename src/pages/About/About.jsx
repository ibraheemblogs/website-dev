import React from "react";
import PageLayout from "../../components/layouts/PageLayout";
import HandShake from "../../assets/Frame-about-handshake.png";
import TermsAndConditionsImg from "../../assets/terms-and-conditions-img.png";
import { Link } from "react-router";
import BusinessLeader from "../../components/svg-components/BusinessLeader";

const About = () => {
  return (
    <PageLayout>
      <div className="px-3 md:px-4 mx-auto  mb-6 mt-8">
        <h2 className="text-2xl font-medium mb-8 text-center">About Us</h2>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 ">
            We are dedicated to fostering excellence in{" "}
            <span style={{ color: "var(--color-yellow-500)" }}>
              Sharia-compliant
            </span>{" "}
            products, services, and processes
          </h1>
          <p className="text-gray-700 mt-8 text-xl max-w-2xl mx-auto">
            We aim to empower individuals and businesses by delivering tailored
            solutions grounded in Islamic principles.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <img src={HandShake} alt="Header-Picture-About-Us" className="w-full" />
      </div>

      <div className="flex flex-col md:flex-row px-3 md:px-20 mb-20">
        <h2 className="md:w-2/5 text-3xl font-bold mb-4 text-center md:text-left md:pt-12">
          Our Mission
        </h2>
        <div className="md:w-3/5 bg-white md:p-6">
          <p className="text-gray-700 text-xl">
            “To provide individuals and businesses with expert guidance in
            Sharia-compliant solutions, empowering them to align their products,
            services, and practices with Islamic principles through tailored
            consultancy, research, and education.”
          </p>
        </div>
      </div>

      <div
        className="px-3 md:px-40 py-20"
        style={{ backgroundColor: "#FFFCF5" }}
      >
        <h2 className="text-xl md:text-3xl font-bold mb-4 text-center">
          Our Vision
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20">
          <div className="md:w-1/2">
            <BusinessLeader />
          </div>
          <p className="text-gray-700 text-xl md:max-w-lg md:w-1/2">
            “To become a global leader in Sharia compliance, inspiring ethical
            excellence and fostering a future where Islamic principles drive
            innovation and integrity in business and finance.”
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-3 md:px-20 w-full"
        style={{ backgroundColor: "#FFFCF5" }}
      >
        <div className="px-2 pr-4 text-center md:max-w-xl md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We help your business align with the Sharia
          </h2>
          <p className="text-gray-700 mb-8 text-xl">
            Our scholarly review services ensure religious compliance in
            business operations, products, and general services.
          </p>
          <Link
            to="/contact-us"
            className="bg-amber-400 hover:bg-amber-500 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Contact Us
          </Link>
        </div>
        <img src={TermsAndConditionsImg} className="w-full rounded-2xl" />
      </div>
    </PageLayout>
  );
};

export default About;
