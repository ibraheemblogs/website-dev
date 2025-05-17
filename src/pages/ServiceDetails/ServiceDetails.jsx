import React, { useState, useEffect } from "react";
import PageLayout from "../../components/layouts/PageLayout";
import { servicesData } from "./servicesData";
import { useLocation, useNavigate } from "react-router";
import ArrowLeft from "../../components/svg-components/ArrowLeft";
import ArrowRight from "../../components/svg-components/ArrowRight";
import ArrowBlock from "../../components/svg-components/ArrowBlock";
import DropdownArrow from "../../components/svg-components/DropdownArrow";

const ServiceDetails = () => {
  // Use current route to get the service
  const location = useLocation();
  const navigate = useNavigate();
  const currentService = location.pathname.split("/")[2];

  const [selectedService, setSelectedService] = useState(
    servicesData.find((service) => service.id === currentService)
  );

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setSelectedService(
      servicesData.find((service) => service.id === currentService)
    );
  }, [currentService]);

  const handleServiceSelect = (service) => {
    navigate(`/services/${service.id}`, { replace: true });
  };
  const handleGoBack = () => {
    navigate("/services");
  };

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button className="hidden md:block mb-6 mt-2" onClick={handleGoBack}>
          <ArrowLeft />
        </button>
        <div className="flex flex-col md:flex-row">
          <div
            className={`w-full md:w-1/3 md:pr-8 ${selectedService && "block"}`}
          >
            <h2 className="hidden md:block text-2xl font-bold mb-6">
              Services
            </h2>
            {/* Mobile dropdown */}
            <div className="md:hidden mb-4 relative">
              <button
                onClick={() => setDropdownOpen((open) => !open)}
                className="flex items-center justify-between w-full py-2 rounded-md bg-white"
              >
                <span>{selectedService?.title}</span>
                <DropdownArrow open={dropdownOpen} />
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 right-0 top-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {servicesData
                    .filter((service) => service.id !== selectedService?.id)
                    .map((service) => (
                      <li key={service.id}>
                        <button
                          onClick={() => {
                            handleServiceSelect(service);
                            setDropdownOpen(false);
                          }}
                          className="w-full text-left py-2 px-2 hover:bg-gray-100"
                        >
                          {service.title}
                        </button>
                      </li>
                    ))}
                </ul>
              )}
            </div>
            {/* Desktop list */}
            <ul className="hidden md:block">
              {servicesData.map((service) => (
                <li key={service.id} className="mb-4">
                  <button
                    onClick={() => handleServiceSelect(service)}
                    className={`flex items-center justify-between w-full text-left py-2 px-4 rounded-md transition ${
                      selectedService?.id === service.id
                        ? "bg-amber-100 text-amber-800 font-medium"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span>{service.title}</span>
                    <ArrowRight />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Details */}
          {selectedService && (
            <div
              className={`w-full md:w-2/3 ${
                !selectedService && "hidden md:block"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6">
                {selectedService.title}
              </h2>

              <div className="bg-gray-800 rounded-lg overflow-hidden mb-6 h-64">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-gray-700 mb-6">
                {selectedService.description}
              </p>

              <h3 className="font-medium mb-4">
                Areas we focus on regarding product development include:
              </h3>

              {/* Service Content List */}
              <ul className="space-y-6">
                {selectedService.content.map((item, index) => (
                  <li key={index} className="flex">
                    <div className="mr-3 mt-1">
                      <ArrowBlock />
                    </div>
                    <div>
                      <p className="font-medium">
                        {item.title}
                        <span className="font-light">{item?.sideDetails}</span>
                      </p>
                      {item.details && item.details.length > 0 && (
                        <div className="mt-2 text-gray-600 space-y-2">
                          {item.details.map((detail, i) => (
                            <p key={i}>{detail}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-md transition">
                Get This Service
              </button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ServiceDetails;
