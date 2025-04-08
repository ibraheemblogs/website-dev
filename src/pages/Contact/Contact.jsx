import React, { useEffect, useRef } from "react";
import Navigation from "../../components/layouts/Navigation";
import LinkedInIcon from "../../components/svg-components/LinkedInIcon";
import "./contact.css";
import { InlineWidget } from "react-calendly";
import Footer from "../../components/layouts/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-2/5 p-8 md:p-16 flex flex-col left-content-bg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Level up your brand
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to hear from you. Our friendly team is always here to
            chat.
          </p>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="font-semibold text-xl text-gray-800">
                  Chat to us
                </h3>
              </div>
              <p className="text-gray-600 ml-8">
                Our friendly team is here to help.
              </p>
              <p className="text-gray-800 font-medium ml-8 mt-1">
                info@sharialabs.com
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <h3 className="font-semibold text-xl text-gray-800">Phone</h3>
              </div>
              <p className="text-gray-600 ml-8">Mon-Fri from 8am to 5pm.</p>
              <p className="text-gray-800 font-medium ml-8 mt-1">
                +44-734 118-5053
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 py-8 px-3 md:p-30 flex flex-col right-content-bg items-center">
          <div className="bg-white py-8 px-4 inner-right-bg w-full max-w-3xl md:w-lg ">
            <div className="max-w-md mx-auto w-full mb-6">
              <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">
                Book a Consultation
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                You can book any of the available times below
              </p>
            </div>
            <div className="w-full calendly-container">
              <InlineWidget
                url="https://calendly.com/admin-sharialabs"
                styles={{
                  height: "700px",
                  width: "100%",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
