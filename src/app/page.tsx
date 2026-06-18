import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Skills />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer style={{
        padding: "40px 24px",
        borderTop: "1px solid var(--border-light)",
        background: "rgba(5, 5, 8, 0.9)",
        textAlign: "center",
        zIndex: 10,
        position: "relative"
      }}>
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <span style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.2rem",
            color: "var(--text-primary)"
          }}>Huzaifa.</span>

          <p style={{
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            margin: 0
          }}>
            &copy; {new Date().getFullYear()} Muhammad Huzaifa. All rights reserved.
          </p>

          <div style={{
            display: "flex",
            gap: "20px"
          }}>
            <a href="#work" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.85rem" }}>Work</a>
            <a href="#services" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.85rem" }}>Services</a>
            <a href="#about" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.85rem" }}>About</a>
          </div>
        </div>
      </footer>
    </>
  );
}
