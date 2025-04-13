import React from "react";
import { Link } from "react-router";
import PageLayout from "../../components/layouts/PageLayout";
import ServiceSection from "../../components/layouts/ServiceSection";
import ComputerImg from "../../assets/n8Qb1ZAkK88-unsplash.png";

const ServicesPage = () => {
  return (
    <PageLayout>
      <ServiceSection headerText="Our services include the following main areas:" />

      {/* call-to-action-section */}
      <div className="py-16 px-3 md:px-20 w-full call-to-action-section">
        <div className="max-w-screen px-1 md:px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center md:text-left">
                Sharialabs provides professional Islamic finance content writing
                services
              </h2>
              <p className="mb-8 text-2xl text-center md:text-left">
                Partner with us to review your contracts and operations for
                complete peace of mind.
              </p>
              <Link
                to="/contact-us"
                className="bg-white text-yellow-500 px-8 py-3 rounded-md hover:bg-gray-100 w-fit mx-auto md:mx-0 block md:inline-block"
              >
                Contact Us Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src={ComputerImg} alt="Contract review" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
