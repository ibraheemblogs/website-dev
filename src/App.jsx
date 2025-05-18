import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import WhyShariaLabs from "./assets/Frame-239419.png";
import WhyShariaLabsSmall from "./assets/Frame-8470831.png";
import HeaderPicture from "./assets/Frame-239412.png";
import ServiceSection from "./components/layouts/ServiceSection";
import "./App.css";
import TextFadeSwitcher from "./components/text-fade-switcher/TextFadeSwitcher";
import { Link } from "react-router";
import PageLayout from "./components/layouts/PageLayout";

const App = () => {
  const [activeText, setActiveText] = useState(0);
  const textOptions = ["Excellence", "Partner"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((current) => (current === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      {/* Header Section */}
      <header className="bg-white pt-6 w-full mb-20">
        <div className="max-w-screen px-3 md:px-4 mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center">
            Your Desired {/* <TextFadeSwitcher /> */}
            <AnimatePresence mode="wait">
              <motion.span
                key={activeText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ width: "250px", color: "var(--color-yellow-500) " }}
              >
                {textOptions[activeText]}
              </motion.span>
            </AnimatePresence>{" "}
            <span>in</span>
            <br />
            <span style={{ color: "var(--color-yellow-500)" }}>
              Shariah-Compliant
            </span>{" "}
            Solutions
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-center text-2xl">
            Expert guidance, tailored solutions, and impactful research driving
            growth for businesses and individuals.
          </p>
          <div className="text-center">
            <Link
              to={"/contact-us"}
              className="bg-yellow-500 px-8 py-3 rounded-md hover:bg-yellow-600"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="md:pr-20 md:pl-20 pt-8 px-3">
          <img src={HeaderPicture} alt="Header-Picture" className="w-full" />
        </div>
      </header>

      {/* Why ShariaLabs Section */}
      <section className="py-16 w-full px-3 md:px-20 bg-[#FDF9F1] pb-40">
        <div className="max-w-screen px-1 md:px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20">
            <div className="hidden md:block md:w-1/2">
              <img
                src={WhyShariaLabs}
                alt="Signing documents"
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
                Why ShariaLabs?
              </h2>
              <p className="text-gray-600 text-2xl md:mb-6 text-center md:text-left">
                We are dedicated to fostering excellence in Sharia-compliant
                products, services, and processes. We aim to empower individuals
                and businesses by delivering tailored solutions grounded in
                Islamic principles.{" "}
                <span className="text-green-500">
                  <a href="">Read more</a>
                </span>
              </p>

              <Link
                to="contact-us"
                className="hidden md:inline-block bg-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-600 mx-auto md:mx-0"
              >
                Contact Us
              </Link>
            </div>
            <div className="md:hidden mt-0">
              <img
                src={WhyShariaLabsSmall}
                alt="Signing documents"
                className="rounded-lg w-full h-105"
              />
              <Link
                to="contact-us"
                className="mt-6 bg-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-600 block mx-auto text-center w-fit"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceSection headerText="We offer support to companies in the following service areas" />

      {/* CTA Section */}
      <section className="py-16 px-3 md:px-20 w-full call-to-action-section">
        <div className="max-w-screen px-1 md:px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center md:text-left">
                Review your contracts and business operations with our trusted
                Sharia experts today.
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
              <img
                src={
                  window.innerWidth < 768 ? WhyShariaLabsSmall : WhyShariaLabs
                }
                alt="Contract review"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default App;
