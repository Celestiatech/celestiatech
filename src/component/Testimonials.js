import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      review:
        "We built a React Native app for both iOS and Android. I enjoyed working on this project together. The team provided reliable and fast work as well as helpful advice on how to structure the app and adjust libraries. Communication and availability were generally good and prompt.",
      name: "Mark Koester",
      location: "USA",
    },
    {
      review:
        "Fantastic work from ChicMic. They did the work to exact specifications and gave me great suggestions as well. They are highly skilled developers, and I highly recommend them.",
      name: "Nick Rao",
      location: "Brisbane",
    },
    {
      review:
        "The team helped us create a robust e-commerce platform. Their attention to detail and proactive approach were outstanding. Highly recommended for any web development needs.",
      name: "Sarah Lee",
      location: "Canada",
    },
    {
        review:
          "We built a React Native app for both iOS and Android. I enjoyed working on this project together. The team provided reliable and fast work as well as helpful advice on how to structure the app and adjust libraries. Communication and availability were generally good and prompt.",
        name: "Mark Koester",
        location: "USA",
      },
      {
        review:
          "Fantastic work from ChicMic. They did the work to exact specifications and gave me great suggestions as well. They are highly skilled developers, and I highly recommend them.",
        name: "Nick Rao",
        location: "Brisbane",
      },
      {
        review:
          "The team helped us create a robust e-commerce platform. Their attention to detail and proactive approach were outstanding. Highly recommended for any web development needs.",
        name: "Sarah Lee",
        location: "Canada",
      }
  ];

  return (
    <section className="testimonials-section">
      <Container>
        <div className="text-center mb-4">
          <h2>Testimonials</h2>
          <p>Discover the impact we've made through the words of those we've worked with.</p>
        </div>
        <Row style={{gap: '0px'}} className="gy-4">
          {testimonials.map((testimonial, index) => (
            <Col md={6} lg={4} key={index} className="card-container">
              <Card className="h-100 shadow-sm border-0 m-2">
                <Card.Body>
                  <Card.Text>{testimonial.review}</Card.Text>
                  <Card.Title className="mt-3">{testimonial.name}</Card.Title>
                  <Card.Subtitle className="text-muted">{testimonial.location}</Card.Subtitle>
                </Card.Body>
              </Card>
              {/* Simple popup for full text */}
              <div className="popup">
                <p>{testimonial.review}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
