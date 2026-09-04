import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Career<span>Bridge</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/skills">Skill Mapping</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/about">About</Link>
      </div>

      <div>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/register">
          <button className="start-btn">Get Started</button>
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;
