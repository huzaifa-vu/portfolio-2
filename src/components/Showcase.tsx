"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Showcase.module.css";

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  tags: string[];
  description: string;
  details: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Avexin Skin Whitening",
    category: "UI/UX",
    imageUrl: "/1. Avexin, sensitive skin whitening cream.jpeg",
    tags: ["UI/UX Design", "Landing Page", "Cosmetics Branding"],
    description: "A premium landing page design showcasing a sensitive skin whitening cream.",
    details: "Designed with a clean, medical-grade aesthetic focusing on transparency, trust, and premium product visuals. Features interactive ingredients exploration, user-friendly skincare routine selectors, and high-fidelity product rendering highlights."
  },
  {
    id: 2,
    title: "Hypnotize Digital Agency",
    category: "Agency",
    imageUrl: "/2. hypnotize.design a digital agency.jpeg",
    tags: ["Creative Direction", "Web Design", "Framer/Webflow"],
    description: "An immersive agency site layout emphasizing ultra-modern layout patterns and animations.",
    details: "Hypnotize is a full creative digital agency website design. Featuring custom bold typography, fluid dark aesthetic, interactive glassmorphic cards, and premium section layouts that convey innovation and professional expertise."
  },
  {
    id: 3,
    title: "Cellsnip Tech Store",
    category: "E-Commerce",
    imageUrl: "/3. cellsnip, an online tech store.jpeg",
    tags: ["E-Commerce Design", "UX Architecture", "Tech Store"],
    description: "A high-performance online retail design for cell phones, accessories, and tech products.",
    details: "Cellsnip focuses on dynamic shopping experiences. Includes highly polished grid layouts for search results, interactive quick-add panels, sleek device comparison charts, and clean modern checkouts for maximized conversion rates."
  },
  {
    id: 4,
    title: "Justpixie File Editor",
    category: "SaaS",
    imageUrl: "/4. justpixie, an online file editing tool.jpeg",
    tags: ["Web App", "UI Design", "Product Design"],
    description: "An intuitive web application interface designed for high-speed file editing.",
    details: "Justpixie brings desktop-grade editing features to the web. The UI design delivers complex layout capabilities, toolbars, properties panels, and drag-and-drop mechanics in a beautiful, non-cluttered dark mode configuration."
  },
  {
    id: 5,
    title: "Webstribe Creative Agency",
    category: "Agency",
    imageUrl: "/5. webstribe, a digital agency.jpeg",
    tags: ["Creative Concept", "UX Research", "Agency Site"],
    description: "An aesthetic business website design for custom development and digital marketing teams.",
    details: "A premium corporate agency site featuring asymmetrical grid styles, clean interactive sections, sleek typography and high-impact case study display systems that highlight client success stories."
  },
  {
    id: 6,
    title: "Surfacelab Studio",
    category: "Agency",
    imageUrl: "/6. surfacelab, a digital agency.jpeg",
    tags: ["Studio Design", "Branding", "Creative Web"],
    description: "An avant-garde portfolio and agency website design for a design lab.",
    details: "Designed to reflect an experimental tech-studio atmosphere. Uses neon cyber accents, high-contrast borders, bold technical layouts, and custom grid sections that showcase cutting-edge web design works."
  },
  {
    id: 7,
    title: "DrawTheCircle Game",
    category: "SaaS",
    imageUrl: "/7. drawthecircle, an online circle challenge game.jpeg",
    tags: ["Interactive Design", "Game UI", "SaaS Dashboard"],
    description: "An online interactive challenge game and leaderboard concept UI.",
    details: "A playful yet high-end gaming portal. Focused on high-fidelity visual design, responsive challenge dashboards, player comparison stats, dynamic animations, and interactive lobby menus."
  },
  {
    id: 8,
    title: "The Dog Trainer",
    category: "Branding",
    imageUrl: "/8. thedogtrainer, a pet trainer's website.jpeg",
    tags: ["Local Business", "Web Design", "Identity Design"],
    description: "A premium service branding and booking website design for expert pet trainers.",
    details: "Bringing premium visual design to local businesses. Uses warm, engaging imagery, clear call-to-actions, user-friendly reservation forms, and interactive package selection layouts."
  },
  {
    id: 9,
    title: "DailyDevStudio Agency",
    category: "Agency",
    imageUrl: "/9. dailydevstudio, a digital agency.jpeg",
    tags: ["Agency Landing", "Interaction UX", "Portfolio"],
    description: "A digital agency layout highlighting developer-focused products and services.",
    details: "A professional and modern hub for developer agencies. Blends clean typography, organized developer documentation layouts, dark mode code visualization aesthetics, and interactive team showcases."
  }
];

const categories = ["All", "UI/UX", "Agency", "E-Commerce", "SaaS", "Branding"];

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="work" className={styles.showcase}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>Selected Works</span>
          <h2 className={styles.title}>Design Portfolio Showcase</h2>
          <p>A handpicked collection of digital designs created to build premium web experiences.</p>
        </div>

        {/* Categories Tabs */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={styles.card}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className={styles.cardImg}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id <= 3}
                />
              </div>
              <div className={styles.overlay}>
                <span className={styles.cardCategory}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <span className={styles.exploreBtn}>
                  Explore Case
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Panel */}
      <div className={`${styles.lightbox} ${selectedProject ? styles.lightboxOpen : ""}`} onClick={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
              ✕
            </button>
            <div className={styles.modalMedia}>
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                fill
                className={styles.modalImg}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.modalBody}>
              <span className={styles.modalCategory}>{selectedProject.category}</span>
              <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
              <p className={styles.modalDesc}>{selectedProject.details}</p>
              
              <div className={styles.tagGroup}>
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <button className={styles.modalLink} onClick={() => setSelectedProject(null)}>
                Close Project
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
