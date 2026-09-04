function Features() {

  const features = [
    {
      title: "Internships",
      description:
        "Discover verified internships from top companies and startups.",
      button: "Explore Internships"
    },
    {
      title: "Jobs & Placements",
      description:
        "Find full-time jobs and placement opportunities matching your profile.",
      button: "Browse Jobs"
    },
    {
      title: "Skill Mapping",
      description:
        "Map your skills and discover the right career opportunities.",
      button: "Assess Skills"
    }
  ];

  return (
    <section className="features">

      <h2>
        Opportunities Built For Your <span>Career</span>
      </h2>

      <div className="feature-container">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="icon">💼</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <button>
              {feature.button} →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;
