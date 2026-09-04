import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />

      <section className="cta">
        <h2>Start Building Your Career Today</h2>
        <p>
          Connect with companies, discover internships and build
          industry-ready skills.
        </p>

        <button>Get Started</button>
      </section>

      <footer>
        <h2>CareerBridge</h2>
        <p>Bridging Academia and Industry</p>
        <p>© 2026 CareerBridge. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
