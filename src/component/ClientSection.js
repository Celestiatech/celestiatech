import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ClientSection.css'; // Make sure to create and import the CSS file

const ClientSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Slider {...settings} className="client-logos-container text-center">
        <div>
          <img className="client-logo img-fluid" src="/images/clients/athleta-logo.png" alt="Frugbi" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/cardano-logo.png" alt="Athleta Media" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/cashback-logo.png" alt="Funko International" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/frubi-logo.png" alt="Upwork" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/funko-logo.png" alt="Owlcy" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/hsc_logo.png" alt="New Client" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/hzm-logo.png" alt="New Client" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/luxel-logo.png" alt="New Client" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/microsoft-logo.png" alt="New Client" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/pg-logo.png" alt="New Client" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/samsung-logo.png" alt="New Client" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/stanford-logo.png" alt="New Client" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/swiggy-logo.png" alt="New Client" />
        </div>
        <div>
          <img className="client-logo img-fluid" src="/images/clients/upwork-logo.png" alt="New Client" />
        </div>
      
      </Slider>
    </div>
  );
};

export default ClientSection;
