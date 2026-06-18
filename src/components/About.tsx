import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          {/* Content Side */}
          <div className={styles.content}>
            <span className={styles.subtitle}>About Me</span>
            <h2 className={styles.title}>Designing with Intention and Purpose</h2>
            
            <p className={styles.desc}>
              <span className={styles.descHighlight}>Hello, I&apos;m Muhammad Huzaifa.</span> I am a digital designer dedicated to creating beautiful, highly functional, and user-centric websites. I balance clean visual structures with elegant typography and fluid interactions.
            </p>
            
            <p className={styles.desc}>
              With a background focused strictly on digital layout and interaction, I help brands and agencies translate complex requirements into simplified, gorgeous visual experiences that command attention.
            </p>

            <div className={styles.statsContainer}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Exp</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>120+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className={styles.visualSide}>
            <h3>Design Philosophy</h3>
            <p>
              I believe web design is more than just styling; it is an active dialog between the user and the system. Every pixel, shadow, and transition should serve a functional purpose.
            </p>
            <div className={styles.quoteBlock}>
              &ldquo;Simplicity is the ultimate sophistication. When you remove the unnecessary, the essential speaks.&rdquo;
            </div>
            <p>
              Let&apos;s build web platforms that do not just exist in the background, but stand out as masterpieces of craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
