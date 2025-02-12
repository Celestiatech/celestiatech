import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      category: "Mobile App Development",
      items: [
        "Clover App",
        "iOS",
        "Android",
        "React Native",
        "Flutter",
        "AR/VR",
        "Internet of Things (IoT)",
      ],
    },
    {
      category: "Web Development",
      items: ["React", "Angular", "Django", "PHP", "RoR", "Net Development"],
    },
    {
      category: "Game Development",
      items: ["2D", "3D", "Mobile", "PC", "Web", "Hyper Casual"],
    },
    {
      category: "AI Development",
      items: ["AI Chatbot", "Generative AI", "Machine Learning"],
    },
    {
      category: "Blockchain Development",
      items: [
        "Web3 DApp Development",
        "NFT App Development",
        "Wallet App Development",
        "Ethereum Blockchain Development",
        "Solana Blockchain Development",
        "Asset Tokenization",
        "Coin/Token Development",
      ],
    },
    {
      category: "Blockchain Game Development",
      items: [
        "Blockchain Game Development",
        "Metaverse Game Development",
        "NFT Game Development",
        "P2E Game Development",
        "Metaverse Development",
      ],
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Database Development", "Python", "Java", "DevOps", "Go"],
    },
    {
      category: "Cross Platform Game Development",
      items: ["Unity", "Unreal", "Cocos", "Three.js", "Roblox", "Quality Assurance"],
    },
    {
      category: "3D Design",
      items: [
        "Character Design",
        "Environment Design",
        "Concept Art",
        "Prop Design",
        "Animations",
      ],
    },
    {
      category: "2D Design",
      items: [
        "Character Design",
        "Concept Art",
        "Environment Design",
        "Animations",
        "UI/UX Design",
      ],
    },
    {
      category: "Industries",
      items: [
        "Dating App",
        "Healthcare",
        "Fitness App",
        "Taxi App",
        "Real-estate",
        "Lidar",
      ],
    },
  ];

  return (
    <section className="services-section py-5">
      <Container>
        <Row style={{gap: '0px'}} className="gy-4">
          {services.map((service, index) => (
            <Col md={3} key={index}>
              <h5 className="service-category">{service.category}</h5>
              <ul className="list-unstyled">
                {service.items.map((item, i) => (
                  <li key={i} className="service-item">
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
