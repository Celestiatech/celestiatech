import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const portfolioData = [
    {
      title: "AI Development",
      description: "Innovative AI solutions for various industries.",
      image: "/images/portfolio/ai-development-port.png",
    },
    {
      title: "Blockchain Development",
      description: "Secure and scalable blockchain applications.",
      image: "/images/portfolio/blockchain-development-port.png",
    },
    {
      title: "Design Services",
      description: "Creative and user-centric design services.",
      image: "/images/portfolio/design-services-port.png",
    },
    {
      title: "Game Development",
      description: "Engaging and immersive game development.",
      image: "/images/portfolio/game-dev-port.png",
    },
    {
      title: "Mobile App Development",
      description: "High-performance mobile applications.",
      image: "/images/portfolio/mobile-app-port.png",
    },
    {
      title: "Web Development",
      description: "Responsive and dynamic web solutions.",
      image: "/images/portfolio/web-dev-mobile-port.png",
    }
  ];

  return (
    <section id="portfolio">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <h3 className="portfolio-subtitle">Showcasing Our Expertise</h3>
      <div className="portfolio-container">
        {portfolioData.map((item, index) => (
          <div
            className="portfolio-item"
            key={index}
            style={{
              opacity: 1, // Set opacity to 1 for initial visibility
              transition: `opacity 1s ease-in-out ${index * 0.2}s` // Add transition effect
            }}
          >
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div
              className="portfolio-overlay"
              style={{
                opacity: 0, // Set initial opacity to 0
                transition: 'opacity 0.3s ease-in-out'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = 1; // On hover, set opacity to 1
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = 0; // On hover out, set opacity to 0
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
