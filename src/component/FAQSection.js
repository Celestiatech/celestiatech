import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How safe is my idea?",
      answer:
        "Your idea is completely safe with us. We normally sign an NDA before we discuss your app idea to ensure its safety. We can also sign an NCA (Non-Compete Agreement) if required.",
    },
    {
      question: "Do you re-use code?",
      answer:
        "We build all our projects from scratch unless we’re using pre-approved open-source libraries. No proprietary code is ever reused.",
    },
    {
      question: "What is your project development methodology?",
      answer:
        "We follow an agile development methodology, ensuring quick delivery of high-quality work through iterative progress and constant feedback.",
    },
    {
      question: "Who owns the app and the source code?",
      answer:
        "Once the project is complete and payments are settled, you own the entire source code and intellectual property of the app.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-5">
      <Container>
        <div className="text-center mb-4">
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to your business inquiries in our comprehensive FAQ
            section.
          </p>
        </div>
        <Row style={{justifyContent: 'center'}} className="gy-4">
          {faqs.map((faq, index) => (
            <Col md={5} key={index}>
              <Card
                className={`faq-card shadow-sm border-0 ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">{faq.question}</Card.Title>
                    <span className="toggle-icon">
                      {activeIndex === index ? "▼" : "▶"}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <Card.Text className="mt-3">{faq.answer}</Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FAQSection;
