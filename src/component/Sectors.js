import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Sectors.css'; // Import the CSS file

const Sectors = () => {
  const sectors = [
    { name: "Education", icon: "📚" },
    { name: "Travel", icon: "✈️" },
    { name: "Social Networking", icon: "👥" },
    { name: "Fitness", icon: "🏋️‍♂️" },
    { name: "Business", icon: "💼" },
    { name: "Logistics", icon: "📦" },
    { name: "Dating", icon: "💌" },
    { name: "Health Care", icon: "❤️" },
    { name: "Real Estate", icon: "🏠" },
    { name: "On-Demand", icon: "☁️" },
    { name: "Utility", icon: "🧠" },
    { name: "Entertainment", icon: "📺" },
  ];

  const firstRowSectors = sectors.slice(0, 6);
  const secondRowSectors = sectors.slice(6);

  return (
    <section className="py-5" style={{ backgroundColor: "#fff5ef" }}>
      <div className="container text-center">
        <h2 className="mb-3">Sectors We Cater To</h2>
        <p className="text-muted mb-4">
          A Leading Digital Agency Driving Growth
        </p>
        <p className="text-muted mb-5">
          As a full-service digital agency, we design, develop, and deploy
          custom solutions that boost revenue, from initial concept to final
          launch.
        </p>
        <div style={{gap: '0px'}} className="row gy-4">
          {firstRowSectors.map((sector, index) => (
            <div className="col-md-4 col-lg-2" key={index}>
              <div
                className="p-3 text-center bg-white rounded shadow"
                style={{
                  border: "1px solid #eee",
                  transition: "transform 0.3s ease",
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    fontSize: "2rem",
                    color: "#FF7043", // You can change this color for icons
                  }}
                >
                  {sector.icon}
                </div>
                <h5 className="mb-0">{sector.name}</h5>
              </div>
            </div>
          ))}
        </div>
        <div style={{gap: '0px'}} className="row gy-4 mt-4">
          {secondRowSectors.map((sector, index) => (
            <div className="col-md-4 col-lg-2" key={index}>
              <div
                className="p-3 text-center bg-white rounded shadow"
                style={{
                  border: "1px solid #eee",
                  transition: "transform 0.3s ease",
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    fontSize: "2rem",
                    color: "#FF7043", // You can change this color for icons
                  }}
                >
                  {sector.icon}
                </div>
                <h5 className="mb-0">{sector.name}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <a
            href="https://example.com" // Provide a valid URL
            className="btn btn-primary"
            style={{ backgroundColor: "#FF7043", borderColor: "#FF7043" }}
          >
            Schedule A Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
