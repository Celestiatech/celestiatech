import React from "react";
import "./GetStartedSection.css";

const GetStartedSection = () => {
  return (
    <div className="get-started-wrapper">
      <div className="container text-white d-flex justify-content-between align-items-center get-started-content">
        <div>
          <h4 className="text-uppercase">Get Started Now</h4>
          <h2>Packing the latest techs, we code your <span className="highlight">IDEAS</span> to <span className="highlight">LIFE</span>. Let's start a convo!</h2>
          <button className="btn btn-light mt-3">Schedule A Call</button>
        </div>
        <div className="illustration">
          <img src='/images/get-started-image.png' alt="Illustration" className="img-fluid" /> {/* Replace tags with an image */}
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
