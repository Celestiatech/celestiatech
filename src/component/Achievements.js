import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Achievements = () => {
  const awards = [
    {
      image: "/images/achivements/enterprise.svg", // Replace with your image path
      title: "Top Rated Plus",
      subtitle: "Upwork",
      description: "100% Job Success",
      year: "2020-24",
    },
    {
      image: "/images/achivements/global_award_spring (1).png", // Replace with your image path
      title: "The Most Creative Web & Mobile App Development Companies",
      subtitle: "EnterpriseWorld",
      year: "2020",
    },
    {
      image: "/images/achivements/siliconindia.svg", // Replace with your image path
      title: "Clutch Global",
      subtitle: "Clutch 2024 Global Awards Winner",
      year: "Spring 2024",
    },
    {
      image: "/images/achivements/techreviewer.svg", // Replace with your image path
      title: "SiliconIndia Company of the Year",
      subtitle: "Game Development",
      year: "2017",
    },
    {
      image: "/images/achivements/upwork_new.jpg", // Replace with your image path
      title: "Top Game Development Companies",
      subtitle: "TechReviewer",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#fffff" }}>
      <div className="container text-center">
        <h2 className="mb-3">Leading the Way in App Innovation</h2>
        <p className="text-muted mb-5">
          Our journey is marked by a commitment to excellence and forward-thinking solutions, demonstrated through standout products and inventive concepts in app development.
        </p>
        <div className="row gy-4">
          {awards.map((award, index) => (
            <div className="col-md-4 col-lg-2 mx-auto text-center" key={index}>
              <div className="award-item">
                <img
                  src={award.image}
                  alt={award.title}
                  className="img-fluid mb-3"
                  style={{ height: "80px" }}
                />
                <h5 className="fw-bold">{award.title}</h5>
                <p className="small">{award.subtitle}</p>
                <p className="text-muted">{award.year}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <button className="btn btn-primary">Let’s Work Together</button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
