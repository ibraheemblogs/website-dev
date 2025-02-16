import React from "react";
import WhyShariaLabs from "./assets/Frame-239419.png";
import HeaderPicture from "./assets/Frame-239412.png";
import Navigation from "./components/Navigation";
import ServiceSection from "./components/ServiceSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navigation />

      {/* Header Section */}
      <header className="bg-white pt-6 w-full mb-20">
        <div className="max-w-screen px-4 mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-center">
            Your Desired <span className="text-yellow-500">Excellence</span> in
            <br />
            <span className="text-yellow-500">Shariah-Compliant</span> Solutions
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-center">
            Expert guidance, tailored solutions, and impactful research driving
            growth for businesses and individuals.
          </p>
          <div className="text-center">
            <button className="bg-yellow-500 px-8 py-3 rounded-md hover:bg-yellow-600">
              Get Started
            </button>
          </div>
        </div>
        <div className="pr-20 pl-20 pt-8">
          <img src={HeaderPicture} alt="Header-Picture" className="w-full" />
        </div>
      </header>

      {/* Why ShariaLabs Section */}
      <section className="py-16 w-full px-20 bg-yellow-50 pb-40">
        <div className="max-w-screen px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2">
              <img
                src={WhyShariaLabs}
                alt="Signing documents"
                className="rounded-lg w-full h-150"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-4">Why ShariaLabs?</h2>
              <p className="text-gray-600 text-2xl mb-6">
                We are dedicated to fostering excellence in Sharia-compliant
                products, services, and processes. We aim to empower individuals
                and businesses by delivering tailored solutions grounded in
                Islamic principles.{" "}
                <span className="text-green-500">
                  <a href="">Read more</a>
                </span>
              </p>

              <button className="bg-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-600">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <ServiceSection />

      {/* CTA Section */}
      <section className="bg-yellow-500 py-16 px-20 w-full">
        <div className="max-w-screen px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-6xl font-bold mb-4">
                Review your contracts and business operations with our trusted
                Sharia experts today.
              </h2>
              <p className="mb-6">
                Partner with us to review your contracts and operations for
                complete peace of mind.
              </p>
              <button className="bg-white text-yellow-500 px-8 py-3 rounded-md hover:bg-gray-100">
                Contact Us Now
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={WhyShariaLabs}
                alt="Contract review"
                className="h-150 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
