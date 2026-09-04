function Stats() {

  const stats = [
    ["10K+", "Students"],
    ["500+", "Companies"],
    ["1,200+", "Internships"],
    ["150+", "Colleges"]
  ];

  return (
    <section className="stats">

      {stats.map((item, index) => (

        <div className="stat-card" key={index}>

          <h2>{item[0]}</h2>
          <p>{item[1]}</p>

        </div>

      ))}

    </section>
  );
}

export default Stats;
