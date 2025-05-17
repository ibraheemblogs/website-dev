import React, { useState } from "react";
import PageLayout from "../../components/layouts/PageLayout";
import { servicesData } from "./servicesData";

const ServiceDetails = () => {
  // Define all services data
  //   const services = [
  //     {
  //       id: "product-development",
  //       title: "Sharia Product Development",
  //       description:
  //         "Our product development services help financial institutions create and structure Sharia-compliant financial products:",
  //       image: "/path/to/product-dev-image.jpg",
  //       content: [
  //         {
  //           title:
  //             "Comprehensive product structuring from concept to launch, including documentation and Sharia certification process.",
  //           details: [
  //             "How we do this is to outline the roadmap for product development while embedding Sharia compliance at every stage.",
  //             "This ranges from the very conceptualisation stage, to user interface design, the financial systems and actual development.",
  //             "We also create detailed records of how the product or service complies with Sharia principles at every stage. While making available clear documentation for stakeholders and end-users to understand and utilize the product ethically.",
  //           ],
  //         },
  //         {
  //           title:
  //             "Development of innovative Islamic banking products including Murabaha, Ijara, Musharaka, and Mudaraba arrangements.",
  //         },
  //         {
  //           title:
  //             "Design and structuring of Sukuk (Islamic bonds) and other Islamic capital market instruments.",
  //         },
  //         {
  //           title:
  //             "Creation of Takaful (Islamic insurance) products and structures",
  //         },
  //         {
  //           title:
  //             "Product review and enhancement services to ensure continued Sharia compliance",
  //         },
  //         {
  //           title:
  //             "Technical documentation and product manuals aligned with Sharia principles",
  //         },
  //       ],
  //     },
  //     {
  //       id: "advisory",
  //       title: "Sharia Advisory",
  //       description:
  //         "Our advisory services provide guidance on Sharia compliance for financial institutions:",
  //       image: "/path/to/advisory-image.jpg",
  //       content: [
  //         {
  //           title: "Sharia advisory board services",
  //           details: [],
  //         },
  //         {
  //           title: "Compliance guidance and ongoing support",
  //           details: [],
  //         },
  //       ],
  //     },
  //     {
  //       id: "finance-training",
  //       title: "Islamic Finance Training",
  //       description:
  //         "Comprehensive training programs for institutions and professionals:",
  //       image: "/path/to/training-image.jpg",
  //       content: [
  //         {
  //           title: "Islamic finance fundamentals",
  //           details: [],
  //         },
  //         {
  //           title: "Advanced courses for professionals",
  //           details: [],
  //         },
  //       ],
  //     },
  //     {
  //       id: "audit",
  //       title: "Sharia Compliance Audit",
  //       description: "Thorough audit services to ensure Sharia compliance:",
  //       image: "/path/to/audit-image.jpg",
  //       content: [
  //         {
  //           title: "Comprehensive Sharia audit processes",
  //           details: [],
  //         },
  //         {
  //           title: "Compliance verification and reporting",
  //           details: [],
  //         },
  //       ],
  //     },
  //     {
  //       id: "research",
  //       title: "Academic and Industry Research",
  //       description: "Cutting-edge research on Islamic finance:",
  //       image: "/path/to/research-image.jpg",
  //       content: [
  //         {
  //           title: "Academic research partnerships",
  //           details: [],
  //         },
  //         {
  //           title: "Industry trend analysis",
  //           details: [],
  //         },
  //       ],
  //     },
  //     {
  //       id: "certification",
  //       title: "Sharia Certification",
  //       description:
  //         "Official certification for financial products and services:",
  //       image: "/path/to/certification-image.jpg",
  //       content: [
  //         {
  //           title: "Certification process and standards",
  //           details: [],
  //         },
  //         {
  //           title: "Ongoing compliance monitoring",
  //           details: [],
  //         },
  //       ],
  //     },
  //   ];

  // State for currently selected service
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  // Handle service selection
  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header with Back Navigation for Mobile */}
        <div className="md:hidden flex items-center mb-4">
          <button
            onClick={() => setSelectedService(null)}
            className="flex items-center text-gray-600"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Services</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Services List - Hidden on mobile when a service is selected */}
          <div
            className={`w-full md:w-1/3 md:pr-8 ${
              selectedService && "hidden md:block"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <ul>
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
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
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

              {/* Service Image */}
              <div className="bg-gray-800 rounded-lg overflow-hidden mb-6 h-64">
                <img
                  src={
                    selectedService.image ||
                    "https://via.placeholder.com/800x400"
                  }
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Description */}
              <p className="text-gray-700 mb-6">
                {selectedService.description}
              </p>

              {/* Areas of Focus */}
              <h3 className="font-medium mb-4">
                Areas we focus on regarding product development include:
              </h3>

              {/* Service Content List */}
              <ul className="space-y-6">
                {selectedService.content.map((item, index) => (
                  <li key={index} className="flex">
                    <div className="mr-3 mt-1">
                      <svg
                        className="w-5 h-5 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
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

              {/* Call to Action Button */}
              <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-md transition">
                Get This Service
              </button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );

  //   return <div>Hello world</div>;
};

export default ServiceDetails;
