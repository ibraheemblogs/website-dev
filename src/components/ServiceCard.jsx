import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {icon}
      <h3 className="text-xl font-bold mb-6 mt-14">{title}</h3>
      <p
        className={`text-gray-600 ${
          title === "Sharia Advisory" ? "mb-12" : "mb-6"
        }`}
      >
        {description}
      </p>
      <Link
        className="text-green-600 hover:text-blue-800"
        to={`/services/${link}`}
      >
        Learn More →
      </Link>
    </div>
  );
};

export default ServiceCard;
