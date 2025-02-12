import React from "react";
import "./AdditionalServices.css";

const servicesData = [
  {
    title: "Python",
    description: "Accelerate development and enhance system integration.",
    icon: "/images/additionalservices/Python_service.svg",
  },
  {
    title: "Node.Js",
    description: "Build fast, scalable network applications.",
    icon: "/images/additionalservices/node.js_service.svg",
  },
  {
    title: "Angular",
    description: "The framework to create dynamic web applications.",
    icon: "/images/additionalservices/angular_service.svg",
  },
  {
    title: "Flutter",
    description: "Simplify the app development process.",
    icon: "/images/additionalservices/flutter_service.svg",
  },
  {
    title: "React Native",
    description: "Develop high-quality apps for multiple platforms.",
    icon: "/images/additionalservices/react_native_service.svg",
  },
  {
    title: "React.Js",
    description: "Build responsive web and mobile interfaces.",
    icon: "/images/additionalservices/react_native_service.svg",
  },
  {
    title: "PHP",
    description: "Powerful scripting for efficient web development.",
    icon: "/images/additionalservices/php_service.svg",
  },
];

const AdditionalServices = () => {
  return (
    <section className="additional-services">
      <div className="services-header">
        <h2>
          <span className="services-icon">📦</span> Explore Our Additional Services
        </h2>
        <p>
          We offer a wide range of cutting-edge solutions to meet your specific
          needs. Explore our other fine quality services and choose one that
          suits your needs.
        </p>
        <button className="book-demo-btn">📞 Book A Demo</button>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={`${service.title} Icon`} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalServices;
