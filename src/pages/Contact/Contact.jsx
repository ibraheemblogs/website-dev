import React, { useEffect, useRef } from "react";
import Navigation from "../../components/layouts/Navigation";
import LinkedInIcon from "../../components/svg-components/LinkedInIcon";
import "./contact.css";
import { InlineWidget } from "react-calendly";
import Footer from "../../components/layouts/Footer";
import ChatIcon from "../../components/svg-components/ChatIcon";
import PhoneIcon from "../../components/svg-components/PhoneIcon";

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
                <ChatIcon />
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
                <PhoneIcon />
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
          <div className="bg-white py-8 inner-right-bg w-full max-w-3xl md:w-lg ">
            <div className="max-w-md mx-auto w-full mb-6">
              <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">
                Book a Consultation
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                You can book any of the available times below
              </p>
            </div>
            <div className="w-full calendly-container h-full">
              <InlineWidget
                url="https://calendly.com/admin-sharialabs"
                styles={{
                  height: "700px",
                  width: "100%",
                }}
                // pageSettings={{
                //   backgroundColor: "ffffff",
                //   hideEventTypeDetails: false,
                //   hideLandingPageDetails: false,
                // }}
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
