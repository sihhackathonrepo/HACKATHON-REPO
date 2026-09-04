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









// NEW CODE UPLOADED BELOW: 






-import React from 'react';
-import { useState } from 'react'
+import { useState } from "react";
 
 function App() {
-  const [count, setCount] = useState(0)
-  
-  const styles = {
-    main: {
-      padding: '20px',
+  const [menuOpen, setMenuOpen] = useState(false);
+
+  const features = [
+    {
+      title: "Discover Opportunities",
+      description:
+        "Find internships and career opportunities that match your goals.",
     },
-    title: {
-      color: '#5C6AC4'
+    {
+      title: "Build Industry Skills",
+      description:
+        "Learn practical skills through guided projects and expert resources.",
     },
-  };
+    {
+      title: "Connect with Companies",
+      description:
+        "Meet employers and build meaningful professional connections.",
+    },
+  ];
 
   return (
-    <div style={styles.main}>
-      <h1 style={styles.title}>Hello, World!</h1>
-      <div>
-        <button onClick={() => setCount((count) => count + 1)}>
-          count {count}
+    <div className="app">
+      <header className="navbar">
+        <a className="logo" href="#home">
+          CareerBridge
+        </a>
+
+        <button
+          className="menu-button"
+          onClick={() => setMenuOpen(!menuOpen)}
+          aria-label="Toggle navigation menu"
+          aria-expanded={menuOpen}
+        >
+          ☰
         </button>
-      </div>
+
+        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
+          <a href="#home">Home</a>
+          <a href="#features">Features</a>
+          <a href="#about">About</a>
+          <a href="#contact">Contact</a>
+        </nav>
+      </header>
+
+      <main>
+        <section className="hero" id="home">
+          <div>
+            <p className="eyebrow">Bridging Academia and Industry</p>
+            <h1>Build the career you deserve.</h1>
+            <p className="hero-text">
+              Connect with companies, discover internships, and build
+              industry-ready skills with CareerBridge.
+            </p>
+            <a className="primary-button" href="#features">
+              Get Started
+            </a>
+          </div>
+
+          <div className="hero-card">
+            <span>Career growth</span>
+            <strong>Starts here.</strong>
+            <p>Learn, connect, and grow with the right opportunities.</p>
+          </div>
+        </section>
+
+        <section className="stats" id="about">
+          <div>
+            <strong>500+</strong>
+            <span>Companies</span>
+          </div>
+          <div>
+            <strong>1,200+</strong>
+            <span>Opportunities</span>
+          </div>
+          <div>
+            <strong>10,000+</strong>
+            <span>Students</span>
+          </div>
+        </section>
+
+        <section className="features" id="features">
+          <p className="eyebrow">Why CareerBridge?</p>
+          <h2>Everything you need to move forward.</h2>
+
+          <div className="feature-grid">
+            {features.map((feature) => (
+              <article className="feature-card" key={feature.title}>
+                <h3>{feature.title}</h3>
+                <p>{feature.description}</p>
+              </article>
+            ))}
+          </div>
+        </section>
+
+        <section className="cta" id="contact">
+          <h2>Start Building Your Career Today</h2>
+          <p>
+            Take the next step toward your professional future with
+            CareerBridge.
+          </p>
+          <a className="primary-button" href="mailto:hello@careerbridge.com">
+            Contact Us
+          </a>
+        </section>
+      </main>
+
+      <footer>
+        <h2>CareerBridge</h2>
+        <p>Bridging Academia and Industry</p>
+        <p>© 2026 CareerBridge. All rights reserved.</p>
+      </footer>
+
+      <style>{`
+        * {
+          box-sizing: border-box;
+        }
+
+        html {
+          scroll-behavior: smooth;
+        }
+
+        body {
+          margin: 0;
+          font-family: Arial, sans-serif;
+          color: #172554;
+          background: #f8fafc;
+        }
+
+        a {
+          color: inherit;
+          text-decoration: none;
+        }
+
+        .app {
+          min-height: 100vh;
+        }
+
+        .navbar {
+          display: flex;
+          align-items: center;
+          justify-content: space-between;
+          padding: 20px 8%;
+          background: white;
+        }
+
+        .logo {
+          color: #2563eb;
+          font-size: 1.4rem;
+          font-weight: 700;
+        }
+
+        .nav-links {
+          display: flex;
+          gap: 28px;
+          color: #475569;
+        }
+
+        .nav-links a:hover {
+          color: #2563eb;
+        }
+
+        .menu-button {
+          display: none;
+          border: 0;
+          background: transparent;
+          font-size: 1.5rem;
+          cursor: pointer;
+        }
+
+        .hero {
+          display: grid;
+          grid-template-columns: 1.2fr 0.8fr;
+          gap: 50px;
+          align-items: center;
+          padding: 100px 8%;
+          background: linear-gradient(135deg, #eff6ff, #dbeafe);
+        }
+
+        .eyebrow {
+          color: #2563eb;
+          font-size: 0.85rem;
+          font-weight: 700;
+          letter-spacing: 1px;
+          text-transform: uppercase;
+        }
+
+        h1 {
+          max-width: 650px;
+          margin: 16px 0;
+          font-size: clamp(2.5rem, 6vw, 5rem);
+          line-height: 1.05;
+        }
+
+        .hero-text {
+          max-width: 560px;
+          color: #475569;
+          font-size: 1.15rem;
+          line-height: 1.7;
+        }
+
+        .primary-button {
+          display: inline-block;
+          margin-top: 18px;
+          padding: 13px 22px;
+          border-radius: 8px;
+          color: white;
+          background: #2563eb;
+          font-weight: 700;
+        }
+
+        .primary-button:hover {
+          background: #1d4ed8;
+        }
+
+        .hero-card {
+          padding: 40px;
+          border-radius: 20px;
+          color: white;
+          background: #1e3a8a;
+          box-shadow: 0 20px 40px rgba(30, 58, 138, 0.2);
+        }
+
+        .hero-card span,
+        .hero-card p {
+          color: #bfdbfe;
+        }
+
+        .hero-card strong {
+          display: block;
+          margin: 12px 0;
+          font-size: 2.5rem;
+        }
+
+        .stats {
+          display: grid;
+          grid-template-columns: repeat(3, 1fr);
+          gap: 20px;
+          padding: 55px 8%;
+          text-align: center;
+          background: white;
+        }
+
+        .stats strong,
+        .stats span {
+          display: block;
+        }
+
+        .stats strong {
+          color: #2563eb;
+          font-size: 2rem;
+        }
+
+        .stats span {
+          margin-top: 8px;
+          color: #64748b;
+        }
+
+        .features {
+          padding: 90px 8%;
+          text-align: center;
+        }
+
+        .features h2 {
+          margin-top: 10px;
+          font-size: 2.3rem;
+        }
+
+        .feature-grid {
+          display: grid;
+          grid-template-columns: repeat(3, 1fr);
+          gap: 24px;
+          margin-top: 40px;
+          text-align: left;
+        }
+
+        .feature-card {
+          padding: 28px;
+          border: 1px solid #e2e8f0;
+          border-radius: 14px;
+          background: white;
+        }
+
+        .feature-card p {
+          color: #64748b;
+          line-height: 1.6;
+        }
+
+        .cta {
+          padding: 80px 8%;
+          text-align: center;
+          color: white;
+          background: #172554;
+        }
+
+        .cta p {
+          color: #bfdbfe;
+        }
+
+        footer {
+          padding: 35px 8%;
+          color: #cbd5e1;
+          background: #0f172a;
+          text-align: center;
+        }
+
+        footer h2 {
+          color: white;
+        }
+
+        @media (max-width: 700px) {
+          .menu-button {
+            display: block;
+          }
+
+          .nav-links {
+            display: none;
+            position: absolute;
+            top: 70px;
+            right: 8%;
+            flex-direction: column;
+            gap: 16px;
+            padding: 20px;
+            border-radius: 8px;
+            background: white;
+            box-shadow: 0 8px 25px rgba(15, 23, 42, 0.15);
+          }
+
+          .nav-links.open {
+            display: flex;
+          }
+
+          .hero,
+          .feature-grid {
+            grid-template-columns: 1fr;
+          }
+
+          .hero {
+            padding-top: 70px;
+          }
+
+          .stats {
+            grid-template-columns: 1fr;
+            gap: 35px;
+          }
+        }
+      `}</style>
     </div>
-  )
+  );
 }
