import { useState } from "react";

function Dots({ count, className }) {
  return (
    <div className={`journey-dots ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
}

const GRAD_ICON = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z" />
    <path d="M6 12v4.2c3.5 2.3 8.5 2.3 12 0V12" />
    <path d="M21.5 10v5" />
  </svg>
);

const BRIEFCASE_ICON = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
    <path d="M3 12h18" />
    <path d="M10 12v2h4v-2" />
  </svg>
);

const EDUCATION = [
  {
    title: "B.E in Electronics and Communication Engineering",
    org: "Saveetha Engineering College – Chennai",
    text: "Completed my Bachelor's degree with a strong foundation in electronics, communication systems, and problem-solving.",
    date: "Nov 2020 – Jun 2024",
  },
  {
    title: "Java DSA Training – Vision Tranz IT Solutions",
    org: "Hands-on Java Development & Data Structures",
    text: "Completed hands-on training in Data Structures, Algorithms, and Java development.",
    date: "Aug 2024 – Jan 2025",
  },
];

const EXPERIENCE = [
  {
    title: "Node.js Developer Trainee",
    org: "Claysys Technologies",
    text: "Working on backend development using Node.js and Express, building and consuming REST APIs, and integrating databases to support real-world applications. Gaining hands-on experience with debugging, version control, and collaborative development practices in a professional team environment.",
  },
];

export default function Journey() {
  const [tab, setTab] = useState("education");

  return (
    <section className="journey-page" id="journey">
      <div className="journey-glow"></div>
      <Dots count={12} className="journey-dots-left" />
      <Dots count={12} className="journey-dots-right" />

      <div className="journey-container">
        <div className="journey-heading">
          <h2 className="journey-title">
            My <span>Journey</span>
          </h2>
          <div className="journey-title-line"></div>
          <p className="journey-subtitle">A quick look at my education and experience.</p>
        </div>

        <div className="journey-tabs" role="tablist" aria-label="Education and experience">
          <button
            className="journey-tab"
            id="education-tab"
            type="button"
            role="tab"
            aria-selected={tab === "education"}
            aria-controls="education-panel"
            tabIndex={tab === "education" ? 0 : -1}
            onClick={() => setTab("education")}
          >
            <span className="journey-tab-icon" aria-hidden="true">{GRAD_ICON}</span>
            Education
          </button>

          <button
            className="journey-tab"
            id="experience-tab"
            type="button"
            role="tab"
            aria-selected={tab === "experience"}
            aria-controls="experience-panel"
            tabIndex={tab === "experience" ? 0 : -1}
            onClick={() => setTab("experience")}
          >
            <span className="journey-tab-icon" aria-hidden="true">{BRIEFCASE_ICON}</span>
            Experience
          </button>
        </div>

        <div
          className="journey-panel"
          id="education-panel"
          role="tabpanel"
          aria-labelledby="education-tab"
          hidden={tab !== "education"}
        >
          <div className="journey-timeline">
            {EDUCATION.map((entry, i) => (
              <article className="journey-entry" key={i}>
                <div className="journey-entry-icon" aria-hidden="true">{GRAD_ICON}</div>
                <div className="journey-entry-content">
                  <h3>{entry.title}</h3>
                  <h4>{entry.org}</h4>
                  <p>{entry.text}</p>
                </div>
                <div className="journey-date">{entry.date}</div>
              </article>
            ))}
          </div>

          <div className="journey-quote">
            <div className="journey-quote-icon" aria-hidden="true">{GRAD_ICON}</div>
            <p>
              Education is not the <strong>learning</strong> of facts, but the training of the
              mind to <strong>think.</strong>
            </p>
          </div>
        </div>

        <div
          className="journey-panel"
          id="experience-panel"
          role="tabpanel"
          aria-labelledby="experience-tab"
          hidden={tab !== "experience"}
        >
          <div className="journey-timeline">
            {EXPERIENCE.map((entry, i) => (
              <article className="journey-entry" key={i}>
                <div className="journey-entry-icon" aria-hidden="true">{BRIEFCASE_ICON}</div>
                <div className="journey-entry-content">
                  <h3>{entry.title}</h3>
                  <h4>{entry.org}</h4>
                  <p>{entry.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="journey-quote">
            <div className="journey-quote-icon" aria-hidden="true">{BRIEFCASE_ICON}</div>
            <p>
              Every project is a chance to <strong>learn</strong> something new and become a
              <strong> better developer.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
