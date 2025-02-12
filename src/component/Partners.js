import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Partners.css'; // Import the CSS file


const Partners = () => {
  const partners = [
    { name: "P&G", logo: "/images/partners/pg-logo (1).png" },
    { name: "Samsung", logo: "/images/partners/samsung-logo (1).png" },
    { name: "Stanford University", logo: "/images/partners/stanford-logo (1).png" },
    { name: "Hughes Systique", logo: "/images/partners/hsc_logo (1).png" },
    { name: "Swiggy", logo: "/images/partners/swiggy-logo (1).png" },
    { name: "Cardano", logo: "/images/partners/cardano-logo (1).png" },
    { name: "Microsoft", logo: "/images/partners/microsoft-logo (1).png" },

  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#fff5ef" }}>
      <div className="container text-center">
        <h2 className="mb-3">Our Valued Partners</h2>
        <p className="text-muted mb-5">
          Together, we achieve success, spark innovation, and reach new milestones.
        </p>
        <div className="row gy-4">
          {partners.map((partner, index) => (
            <div className="col-md-4 col-lg-3 mx-auto" key={index}>
              <div className="partner-logo">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="img-fluid"
                  style={{
                    maxHeight: "80px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
