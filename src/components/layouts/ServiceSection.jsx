import React from "react";
import ServiceCard from "../ServiceCard";
import ProductDevIcon from "../svg-components/ProductDevIcon";
import ShariaCompliantIcon from "../svg-components/ShariaCompliantIcon";
import TrainingIcon from "../svg-components/TrainingIcon";
import AuditIcon from "../svg-components/AuditIcon";
import ResearchIcon from "../svg-components/ResearchIcon";
import ShariaCertificationIcon from "../svg-components/ShariaCertificationIcon";

const ServiceSection = () => {
  const services = [
    {
      icon: <ProductDevIcon />,
      title: "Sharia Product Development",
      description:
        "Our product services help financial institutions create and structure Sharia-compliant financial products.",
    },
    {
      icon: <ShariaCompliantIcon />,
      title: "Sharia Advisory",
      description:
        "We provide regular consultation on Sharia-related matters and guidance on daily operational issues.",
    },
    {
      icon: <TrainingIcon />,
      title: "Islamic Finance Training",
      description:
        "We give customized trainings for different levels and roles with practical workshops on Islamic financial operations.",
    },
    {
      icon: <AuditIcon />,
      title: "Sharia Compliance Audit",
      description:
        "We verify adherence to Islamic principles and review contracts and documentation for Sharia compliance.",
    },
    {
      icon: <ResearchIcon />,
      title: "Academic & Industry Research",
      description:
        "We help institutions conduct cutting-edge research and develop innovative solutions to real-world challenges.",
    },
    {
      icon: <ShariaCertificationIcon />,
      title: "Sharia Certification",
      description:
        "We conduct thorough Sharia forensics to ensure your products and services are compliant with Sharia standards.",
    },
  ];
  return (
    <section
      className="py-16 px-3 md:px-20 bg-gray-50 w-full"
      id="sharialab-services"
    >
      <div className="max-w-screen px-1 md:px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <p className="text-gray-600 text-center mb-12">
          We offer support to companies in the following service areas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grey-background">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
