const CATEGORIES = [
  {
    title: "Programming Languages",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 9 5 12l3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 5-4 14" />
      </svg>
    ),
    items: [
      ["J", "Java"],
      ["JS", "JavaScript"],
      ["TS", "TypeScript"],
    ],
  },
  {
    title: "Front-End Development",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 6.5h.01" />
        <path d="M10 6.5h.01" />
      </svg>
    ),
    items: [
      ["R", "React"],
      ["H", "HTML"],
      ["C", "CSS"],
      ["B", "Bootstrap"],
    ],
  },
  {
    title: "Back-End Development",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="7" rx="2" />
        <rect x="4" y="14" width="16" height="7" rx="2" />
        <path d="M8 6.5h.01M8 17.5h.01" />
      </svg>
    ),
    items: [
      ["N", "Node.js"],
      ["E", "Express.js"],
      ["S", "Spring Boot"],
      ["JWT", "JWT"],
    ],
  },
  {
    title: "Databases & Cloud",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </svg>
    ),
    items: [
      ["M", "MongoDB"],
      ["SQL", "MySQL"],
      ["AWS", "AWS"],
    ],
  },
  {
    title: "Version Control & DevOps",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M8 6h8" />
        <path d="M7.5 7.5 11 16" />
        <path d="M16.5 7.5 13 16" />
      </svg>
    ),
    items: [
      ["G", "Git"],
      ["GH", "GitHub"],
      ["V", "Vercel"],
    ],
  },
  {
    title: "Tools & Platforms",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m14.7 6.3 3-3 3 3-3 3" />
        <path d="m17.7 6.3-7.8 7.8" />
        <path d="M9 14 4 19l1 1 5-5" />
        <path d="M14 17h6" />
      </svg>
    ),
    items: [
      ["VS", "VS Code"],
      ["PM", "Postman"],
      ["G", "Google"],
    ],
  },
  {
    title: "AI & Emerging Tech",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M8.5 12h7" />
        <path d="M12 8.5v7" />
        <circle cx="12" cy="12" r="2.2" />
      </svg>
    ),
    items: [
      ["AI", "AI"],
      ["RAG", "RAG"],
      ["LC", "LangChain"],
    ],
  },
  {
    title: "Core Engineering",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v4" />
        <path d="M12 17v4" />
        <path d="M3 12h4" />
        <path d="M17 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    items: [
      ["DS", "DSA"],
      ["OOP", "OOP"],
      ["API", "REST APIs"],
      ["DB", "DB Design"],
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-page" id="skills">
      <div className="skills-page-inner">
        <div className="skills-heading">
          <p className="skills-eyebrow">Technical Skills</p>
          <h2 className="skills-title">
            My <span>Tech Stack</span>
          </h2>
          <div className="skills-title-line"></div>
          <p className="skills-subtitle">
            The technologies I use to build practical, clean, and production-ready web
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {CATEGORIES.map((cat, i) => (
            <article className="skill-card" key={i}>
              <div className="skill-card-header">
                <div className="skill-card-icon" aria-hidden="true">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-items">
                {cat.items.map(([mark, label], j) => (
                  <div className="skill-pill" key={j}>
                    <span className="skill-mark">{mark}</span>
                    {label}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-footer">
          <strong>Java · React · Node.js · Spring Boot</strong>
          <span> — building across the stack, one project at a time.</span>
        </div>
      </div>
    </section>
  );
}
