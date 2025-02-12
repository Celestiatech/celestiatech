import React from "react";
import { Container } from "react-bootstrap";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <Container fluid className="px-5">
        <div className="map-container">
          {/* Replace the image URL with your desired map image */}
          <img
            src="/images/map_testimonail.jpg"
            alt="Map"
            className="map-image"
          />
        </div>
      </Container>
    </section>
  );
};

export default MapSection;
