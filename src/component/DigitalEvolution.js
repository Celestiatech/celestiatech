import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DigitalEvolution = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#fff5ef" }}>
      <div className="container d-flex flex-column flex-lg-row align-items-center">
        {/* Text Content */}
        <div className="text-content me-lg-5">
          <div className="d-flex align-items-center mb-3">
            <div
              className="icon-box me-2"
              style={{
                backgroundColor: "#FF7043",
                color: "#fff",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span role="img" aria-label="icon">
                ⚙️
              </span>
            </div>
            <h4 className="mb-0">Leading The Digital Evolution</h4>
          </div>
          <h2 className="mb-4">
            Redefining Boundaries And Shaping The Future With Innovative
            Solutions.
          </h2>
          <p className="text-muted">
            For over a decade, we've perfected the art of digital development,
            launching over 2000 apps and games. Our global client base reflects
            our consistent ability to deliver top-tier mobile, web, and game
            development services. With expertise in every aspect of digital
            creation, we're trusted by over 500 clients worldwide to push the
            limits of what's possible.
          </p>
        </div>

        {/* Hexagonal Illustration */}
        <div className="hexagon-image mt-4 mt-lg-0">
          <img
            src="/images/who_we_are.png"
            alt="Hexagonal Illustration"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalEvolution;
