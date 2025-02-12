import React from "react";

const HowItWorks = () => {
  const steps = [
    { number: 1, title: "Idea", icon: "💡", description: "Everything starts with an idea. Share your vision with us." },
    { number: 2, title: "Conceptualization", icon: "📜", description: "We help you conceptualize your idea into a feasible project." },
    { number: 3, title: "Plan & Strategize", icon: "🗂️", description: "Project managers collaborate with you to create a detailed roadmap, breaking down the project into manageable tasks for smooth execution." },
    { number: 4, title: "Development Cycle", icon: "⚙️", description: "Our development team brings your project to life through iterative cycles." },
    { number: 5, title: "Launch", icon: "🚀", description: "We launch your project to the world, ensuring everything runs smoothly." },
    { number: 6, title: "Iterations", icon: "🔄", description: "Post-launch, we iterate based on feedback to continuously improve your project." },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center">How It Works</h2>
      <p className="text-center">We bring your ideas to life through a seamless process:</p>
      <div className="row">
        {steps.map((step, index) => (
          <div key={index} className="col-md-4 col-lg-2 text-center mb-4">
            <div className="card border-0 bg-light p-3 h-100 shadow-sm">
              <div className="display-4 mb-2">{step.icon}</div>
              <h5>{step.title}</h5>
              {step.description && <p className="small text-muted">{step.description}</p>}
              <span className="badge bg-primary rounded-circle position-absolute top-0 start-0 translate-middle">
                {step.number}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
