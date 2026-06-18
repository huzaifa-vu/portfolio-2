import styles from "./Skills.module.css";

interface Service {
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

const servicesData: Service[] = [
  {
    title: "UI/UX Design",
    description: "Designing intuitive user flows, structured site architectures, and clean interface mockups that put the user first.",
    skills: ["User Research", "Wireframing & Prototyping", "Figma Design Systems", "Usability Testing"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="9" y1="3" x2="9" y2="21"></line>
        <line x1="9" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="15" x2="21" y2="15"></line>
      </svg>
    )
  },
  {
    title: "Web Design",
    description: "Creating bespoke websites tailored to your brand personality. Focus on typography, spacious grid structures, and modern aesthetics.",
    skills: ["Creative Web Design", "Typography Systems", "Responsive Grid Layouts", "Dark Mode Specialists"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    )
  },
  {
    title: "Brand Identity",
    description: "Formulating complete visual languages, cohesive design assets, logos, and digital elements to unify and raise brand presence.",
    skills: ["Logo Systems", "Color Architecture", "Marketing Assets", "Brand Style Guidelines"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    )
  },
  {
    title: "Interaction Design",
    description: "Developing smooth transitions, delightful micro-animations, and engaging hover effects that make websites feel responsive and alive.",
    skills: ["CSS Motion / Keyframes", "Framer Motion Concepts", "SVG Micro-Animations", "Interactive Prototypes"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    )
  }
];

export default function Skills() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>Services</span>
          <h2 className={styles.title}>My Expertise Areas</h2>
          <p>Delivering high-end solutions across creative design and interactive digital platforms.</p>
        </div>

        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <ul className={styles.skillList}>
                {service.skills.map((skill, sIdx) => (
                  <li key={sIdx} className={styles.skillItem}>
                    <span className={styles.bullet}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
