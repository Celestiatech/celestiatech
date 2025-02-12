import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'; // Make sure to create and import the CSS file

const Services = () => {
  return (
    <Container className="py-5 services-section text-center">
      <Row className="text-center mb-4">
        <Col>
          <h2>Our Services</h2>
        </Col>
      </Row>
      <Row style={{gap: '0px'}} className="justify-content-center">
        {[
          { icon: 'bi-phone', title: 'Mobile App Development', description: 'We build high-quality mobile apps.' },
          { icon: 'bi-globe', title: 'Web Development', description: 'We create responsive and modern websites.' },
          { icon: 'bi-controller', title: 'Game Development', description: 'We develop engaging and fun games.' },
          { icon: 'bi-robot', title: 'AI Solutions', description: 'We provide AI-based solutions for your business.' },
          { icon: 'bi bi-grid', title: 'Blockchain', description: 'We offer blockchain development services.' },
          { icon: 'bi-palette', title: 'UI/UX Design', description: 'We design user-friendly interfaces.' },
        ].map((service, idx) => (
          <Col key={idx} xs={12} md={4} lg={2} className="mb-4">
            <div className="service-card p-4 h-100 text-center">
              <i className={`bi ${service.icon} service-icon`}></i>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
