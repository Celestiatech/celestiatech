import React from 'react';
import './WhyChooseUs.css'; // Import your custom CSS file

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section container py-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 mb-4">
          <h5 className="section-title">Why Choose ChicMic Studios?</h5>
          <h2 className="section-subtitle">
            Delivering top-tier solutions with a commitment to your success, we focus on creating value.
          </h2>
          <p className="section-description">
            We align your vision with our commitment to excellence, offering unmatched digital solutions tailored to your needs.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="icon-box">
            <i className="icon bi bi-lightbulb"></i> {/* Use appropriate Bootstrap or custom icon */}
            <h5>Tailored Solutions</h5>
            <p>We create customized approaches to meet the unique demands of each project.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="icon-box">
            <i className="icon bi bi-gear"></i>
            <h5>Project Management</h5>
            <p>Effective communication and strategic management drive the success of our developments.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="icon-box">
            <i className="icon bi bi-check-circle"></i>
            <h5>Quality Assurance</h5>
            <p>We focus on perfection from start to finish, ensuring flawless results.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="icon-box">
            <i className="icon bi bi-star"></i>
            <h5>Expertise And Experience</h5>
            <p>Our skilled team brings years of industry know-how to every project.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
