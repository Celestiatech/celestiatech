import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../App.css';

const sections = {
  "Social Networking": {
    title: "Social Networking App Development Services",
    description: "Build engaging social apps that connect users globally. Our team specializes in creating feature-rich social networking applications that foster communication and interaction.",
    image: "/images/mobiledev/Social-Netwotk.png",
    color: "#ff6600", 
  },
  Finance: {
    title: "Finance App Development Services",
    description: "Develop secure and scalable fintech applications. We provide comprehensive solutions for financial institutions, ensuring security and compliance with industry standards.",
    image: "/images/mobiledev/Finance-1.png",
    color: "#007bff", 
  },
  Business: {
    title: "Business App Development Services",
    description: "Empower businesses with cutting-edge applications. Our business apps are designed to streamline operations, enhance productivity, and drive growth.",
    image: "/images/mobiledev/Business-2.png",
    color: "#28a745", 
  },
  "On-Demand": {
    title: "On-Demand App Development Services",
    description: "Deliver fast and efficient on-demand services. We create robust on-demand apps that cater to various industries, ensuring timely and reliable service delivery.",
    image: "/images/mobiledev/Travel.png",
    color: "#ffc107", 
  },
  Utility: {
    title: "Utility App Development Services",
    description: "Create productivity and utility apps with seamless UX. Our utility apps are designed to simplify tasks and improve efficiency, providing users with intuitive and user-friendly interfaces.",
    image: "/images/mobiledev/Utility.png",
    color: "#17a2b8", 
  },
  Education: {
    title: "Education App Development Services",
    description: "Develop engaging learning apps for education. We build educational apps that offer interactive and immersive learning experiences, making education accessible and enjoyable.",
    image: "/images/mobiledev/Education-3.png",
    color: "#6f42c1", 
  },
};

function MobileAppSlides() {
  const [activeSection, setActiveSection] = useState("Education");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container my-5">
      {/* Scrollable Sections */}
      <div className="portfolio-container" style={{ overflowY: "scroll", scrollSnapType: "y mandatory", height: "100vh", scrollBehavior: "smooth" }}>
        {Object.keys(sections).map((key) => (
          <div
            key={key}
            className="portfolio-item d-flex align-items-center"
            style={{
              scrollSnapAlign: "start",
              height: "120vh", // Increase height of each section
              backgroundColor: sections[key].color,
              transition: "transform 1s ease-in-out", // Apply transition to the scroll movement
              transform: `translateY(${(scrollY / window.innerHeight) * 100}%)`, // Control the translation with scroll
              borderRadius: "0 0 50px 50px", // Add curve to the bottom
              color: "#ffffff", // Change text color to white
            }}
          >
            {/* Left Content */}
            <div className="col-md-5 p-5">
              <h1>{sections[key].title}</h1>
              <p>{sections[key].description}</p>
            </div>
            {/* Right Image */}
            <div className="col-md-6 text-center">
              <img
                src={sections[key].image}
                alt={key}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileAppSlides;
