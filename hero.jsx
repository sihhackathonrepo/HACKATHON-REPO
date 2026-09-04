function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="badge">
          🚀 Empowering India's Future Talent
        </span>

        <h1>
          Connect Skills.
          <br />
          <span>Discover Opportunities.</span>
        </h1>

        <p>
          CareerBridge connects students, colleges and companies
          on one platform to build skills, find internships and
          launch successful careers.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Find Opportunities →
          </button>

          <button className="secondary-btn">
            Build Your Profile
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="match-card">
          <h3>Skill Match</h3>
          <div className="percentage">92%</div>
          <p>⭐ Great Match</p>
        </div>

        <div className="profile-card">

          <div className="avatar">
            👨‍💻
          </div>

          <h2>Student Profile</h2>

          <p>B.Tech CSE • 3rd Year</p>

          <div className="skills">
            <span>Java</span>
            <span>Python</span>
            <span>SQL</span>
            <span>React</span>
            <span>ML</span>
          </div>

          <h4>Career Interests</h4>

          <p>Software Developer</p>
          <p>Data Analyst</p>

        </div>

        <div className="company-card">
          <h3>Top Companies</h3>

          <p>🏢 TCS</p>
          <p>🟦 Microsoft</p>
          <p>⚫ Deloitte</p>

          <a>View All Companies →</a>
        </div>

      </div>

    </section>
  );
}

export default Hero;
