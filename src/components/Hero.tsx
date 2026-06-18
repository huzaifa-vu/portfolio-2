import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.gridOverlay}></div>
      
      <div className={styles.badge}>
        <span className={styles.badgeDot}></span>
        Available for Freelance & Contracts
      </div>

      <h1 className={styles.title}>
        Design that commands <br />
        <span className={styles.titleHighlight}>attention & drives growth</span>
      </h1>

      <p className={styles.description}>
        I&apos;m Muhammad Huzaifa, a high-end digital designer crafting premium interfaces, 
        aesthetic websites, and engaging brand identity systems for forward-thinking clients worldwide.
      </p>

      <div className={styles.btnGroup}>
        <a href="#work" className={styles.primaryBtn}>
          View My Work
        </a>
        <a href="#contact" className={styles.secondaryBtn}>
          Get in Touch
        </a>
      </div>
    </section>
  );
}
