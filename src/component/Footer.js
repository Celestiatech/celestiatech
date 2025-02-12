import React from "react";
import "./Footer.css"; // Import custom CSS for additional styling

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row" style={{ gap: "0px" }}>
          {/* Get In Touch Section */}
          <div className="col-md-6">
            <h5 className="fw-bold">Get In Touch</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:contact@chicmicstudios.in">contact@chicmicstudios.in</a>
              </li>
              <li>
                <i className="bi bi-telephone me-2"></i> Sales Query | Job Query
              </li>
              <li>
                <i className="bi bi-phone me-2"></i> +91-9501423775
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                F-273, Phase VIII-B, Industrial Focal Point, Mohali, SAS Nagar, Punjab, 160071
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div className="col-md-6">
            <h5 className="fw-bold">About Us</h5>
            <p>
              We are your Technology Partners. We help convert your ideas into
              reality. We help you focus on your business by solving all your
              technology challenges.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-decoration-none text-dark">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-decoration-none text-dark">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-decoration-none text-dark">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-decoration-none text-dark">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="text-decoration-none text-dark">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center mt-3">
          <p className="mb-0">
            © 2024 © Copyright ChicMic Studios | <a href="#">Privacy Policy</a> | <a href="#">Disclaimer</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
