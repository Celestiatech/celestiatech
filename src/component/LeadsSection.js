import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LeadsSection = () => {
  return (
    <Container className="mt-5 py-5 text-center border border-orange rounded shadow">
      <Row className="mb-4">
        <Col>
          <h2>
            Discover how to turn your concepts into reality with a free consultation. Schedule now!
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <Button variant="warning" className="px-4">
            <i className="bi bi-telephone"></i> Schedule A Call
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {[
          { number: '2500+', label: 'Happy Clients' },
          { number: '2000+', label: 'Apps Developed' },
          { number: '1000+', label: 'Games Developed' },
          { number: '150+', label: 'Teams of Experts' },
          { number: '100+', label: 'Million App Installs' },
          { number: '12+', label: 'Years of Experience' },
          { number: '5+', label: 'Fortune 500 Clients' },
          { number: '5+', label: 'Apps Ranked #1' },
        ].map((item, idx) => (
          <Col
            key={idx}
            xs={6}
            md={3}
            className="py-3"
            style={{
              background: 'linear-gradient(180deg, #FFEFD5, #FFF7F0)',
              borderRadius: '10px',
              margin: '10px',
            }}
          >
            <h4 style={{ fontWeight: 'bold', color: '#FF7F50' }}>{item.number}</h4>
            <p>{item.label}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LeadsSection;
