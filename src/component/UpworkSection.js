import React from "react";
import "./UpworkSection.css";

const UpworkSection = () => {
  return (
    <section className="upwork-section">
      <div className="upwork-left">
        <div className="upwork-content">
          <h2>Work with Us on <span className="upwork-logo">Upwork</span></h2>
          <p>Connect with us on Upwork for top-tier solutions tailored to your needs.</p>
          <a href="https://www.upwork.com" className="upwork-link" target="_blank" rel="noopener noreferrer">
            Click here to view our Profile →
          </a>
        </div>
      </div>
      <div className="upwork-right">
        <div className="upwork-stats">
          <div className="stat-item">
            <div className="stat-number">1700+</div>
            <div className="stat-label">Jobs Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">$8M</div>
            <div className="stat-label">Total Earned</div>
          </div>
        </div>
        <div className="upwork-highlight">
          <h3>Top 3% Talent Worldwide</h3>
          <p>Flexible engagements from hourly to full-time.</p>
        </div>
      </div>
    </section>
  );
};

export default UpworkSection;
