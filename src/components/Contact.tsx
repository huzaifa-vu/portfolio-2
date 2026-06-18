"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.grid}>
          {/* Info Side */}
          <div className={styles.infoSide}>
            <span className={styles.subtitle}>Get In Touch</span>
            <h2 className={styles.title}>Let&apos;s start a project together</h2>
            <p className={styles.desc}>
              Have a design challenge or a web design idea? I&apos;d love to hear from you. 
              Drop a message or reach out directly via my channels.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div className={styles.infoLabel}>Email Me</div>
                  <div className={styles.infoValue}>huzaifaramzan3165@gmail.com</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className={styles.infoLabel}>Location</div>
                  <div className={styles.infoValue}>Lahore, Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className={styles.formSide}>
            {isSubmitted ? (
              <div className={styles.successMsg}>
                Message sent successfully! I&apos;ll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    type="text"
                    id="name"
                    className={styles.input}
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className={styles.input}
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    className={styles.textarea}
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your design project..."
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
