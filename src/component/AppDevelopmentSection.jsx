import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../App.css'; 

const sections = {
  "Social Networking": {
    title: "Social Networking App Development Services",
    description: "Build engaging social apps that connect users globally. Our team specializes in creating feature-rich social networking applications that foster communication and interaction.",
    image: "/images/mobiledev/Social-Netwotk.png",
    color: "#ff6600", // Add color property
  },
  Finance: {
    title: "Finance App Development Services",
    description: "Develop secure and scalable fintech applications. We provide comprehensive solutions for financial institutions, ensuring security and compliance with industry standards.",
    image: "/images/mobiledev/Finance-1.png",
    color: "#007bff", // Add color property
  },
  Business: {
    title: "Business App Development Services",
    description: "Empower businesses with cutting-edge applications. Our business apps are designed to streamline operations, enhance productivity, and drive growth.",
    image: "/images/mobiledev/Business-2.png",
    color: "#28a745", // Add color property
  },
  "On-Demand": {
    title: "On-Demand App Development Services",
    description: "Deliver fast and efficient on-demand services. We create robust on-demand apps that cater to various industries, ensuring timely and reliable service delivery.",
    image: "/images/mobiledev/Travel.png",
    color: "#ffc107", // Add color property
  },
  Utility: {
    title: "Utility App Development Services",
    description: "Create productivity and utility apps with seamless UX. Our utility apps are designed to simplify tasks and improve efficiency, providing users with intuitive and user-friendly interfaces.",
    image: "/images/mobiledev/Utility.png",
    color: "#17a2b8", // Add color property
  },
  Education: {
    title: "Education App Development Services",
    description: "Develop engaging learning apps for education. We build educational apps that offer interactive and immersive learning experiences, making education accessible and enjoyable.",
    image: "/images/mobiledev/Education-3.png",
    color: "#6f42c1", // Add color property
  },
};

function AppDevelopmentSection() {
  const [activeSection, setActiveSection] = useState("Education");

  return (
    <div className="container my-5">
      <div style={{gap: '0px'}} className="row">
        {/* Left Content */}
        <div className="col-md-6">
          <h1 style={{ color: sections[activeSection].color }}>
            <span className="fs-1 fw-bold">{activeSection}</span> 
          </h1>
          <h1 className="">App Development Services</h1>    
          <p>{sections[activeSection].description}</p>

          {/* Reviews & Ratings */}
          <div className="d-flex align-items-center my-3 gap-3">
            <div className="badge bg-success text-white p-3">
              <img src="/images/mobiledev/upwork.png" alt="Upwork" style={{ height: '20px', marginRight: '10px' }} />
              Top Rated+ Agency
              <span className="mx-2"></span>
              <img src="/images/mobiledev/upwork_icon.png" alt="Star" style={{ height: '20px', marginRight: '10px' }} />
              1000+ Happy Clients
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="badge bg-dark text-white p-3">
              <img src="/images/mobiledev/clutch.png" alt="Clutch" style={{ height: '20px', marginRight: '10px' }} />
              B2B Award-Winning
              <span className="mx-2"></span>
              <img src="/images/mobiledev/star.png" alt="Star" style={{ height: '20px', marginRight: '10px' }} />
              5.0 Feedback Exclusively
            </div>
        
          </div>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src={sections[activeSection].image}
            alt={activeSection}
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>

      {/* Menu */}
      <div className="d-flex justify-content-center mt-4">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            className={`btn mx-2 ${activeSection === key ? "btn-primary" : "btn-light"}`}
            style={{ backgroundColor: activeSection === key ? sections[key].color : "" }} // Change background color
            onClick={() => setActiveSection(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AppDevelopmentSection;
