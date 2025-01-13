import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import './Mainsection.css'; // Make sure to create and import the CSS file

const MainSection = () => {
  return (
    <Container className="py-5 main-section">
      <Row className="align-items-center">
        {/* Left Side Content */}
        <Col xs={12} md={6} className="text-center text-md-start">
          <Badge bg="warning" text="dark" className="mb-3">
            Best Tech Company
          </Badge>
          <h1 className="fw-bold text-orange">Comprehensive Design Services For UI/UX And 2D Art.</h1>
          <p className="text-muted">
            Comprehensive design services, including UI/UX design and 2D art, tailored to your brand and project needs.
          </p>
          <div className="d-flex align-items-center justify-content-center justify-content-md-start my-3">
            <span className="text-warning fs-4 me-2">★★★★★</span>
            <span>Based on 2000+ Reviews on</span>
          </div>
          <div className="d-flex gap-3 align-items-center justify-content-center justify-content-md-start my-4">
            <img src="/images/banner-upwork.png" alt="Upwork" height="40" />
            <img src="/images/banner-google.png" alt="Google" height="40" />
            <img src="/images/global_award_spring.png" alt="Spring" height="40" />
          </div>
          <Button variant="primary" className="mt-3">
            Connect with Us
          </Button>
        </Col>

        {/* Right Side Image */}
        <Col xs={12} md={6} className="text-center">
          <img
            src="/images/main-right-banner.png"
            alt="Design Services"
            className="img-fluid"
          />
        </Col>
      </Row>

      {/* Floating Buttons */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 1000,
        }}
      >
        <Button variant="outline-primary" size="sm">
          Request a Quote
        </Button>
        <Button variant="success" size="sm">
          Business Query
        </Button>
        <Button variant="info" size="sm">
          Tell me more
        </Button>
      </div>
    </Container>
  );
};

export default MainSection;
