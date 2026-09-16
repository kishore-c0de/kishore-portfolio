function Dots({ count, className }) {
  return (
    <div className={`about-dots ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
}

const PHILOSOPHY = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M15 9l4-4" />
      </svg>
    ),
    title: "Solve the Problem First:",
    text: "I start by understanding the problem and the user behind it, then choose the technology and approach that actually makes sense.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <path d="M7 7l10 10" />
        <path d="M17 7L7 17" />
      </svg>
    ),
    title: "Build to Understand:",
    text: "I learn best by building real things, experimenting with new ideas, and getting comfortable with the problems that come along the way.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l8 5-8 5-8-5 8-5z" />
        <path d="M4 12l8 5 8-5" />
        <path d="M4 16l8 5 8-5" />
      </svg>
    ),
    title: "Understand the Bigger Picture:",
    text: "I look beyond individual features and think about how the frontend, backend, APIs, database, and user experience work together as one system.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19l6-6 4 4 6-8" />
        <path d="M16 9h4v4" />
      </svg>
    ),
    title: "Learn, Improve, Repeat:",
    text: "Every project teaches me something — whether it's a better technical approach, a mistake I don't want to repeat, or a new idea worth exploring.",
  },
];

export default function About() {
  return (
    <section className="about-page" id="about">
      <div className="about-glow"></div>

      <Dots count={16} className="about-dots-left" />
      <Dots count={12} className="about-dots-right" />

      <div className="about-container">
        <div className="about-heading-area">
          <h2 className="about-title">
            About <span>Me</span>
          </h2>
          <div className="about-title-line"></div>
          <p className="about-subtitle">Get to know the person behind the code.</p>
        </div>

        <div className="about-cards">
          <article className="about-card about-profile-card">
            <div className="about-card-heading">
              <div className="about-icon about-wave-icon">👋</div>
              <h3>
                Hey, I'm <span>Kishore.</span>
              </h3>
            </div>

            <div className="about-identity">
              <div className="identity-item">
                <div className="identity-icon">{"</>"}</div>
                <span>Developer by choice.</span>
              </div>
              <div className="identity-item">
                <div className="identity-icon">🐞</div>
                <span>Debugger by necessity. </span>
              </div>
            </div>

            <div className="about-divider"></div>

            <div className="about-bio">
              <p>
                I enjoy building practical, clean, and user-friendly applications with{" "}
                <strong>React</strong>, <strong>Node.js</strong>, <strong>Java</strong>,{" "}
                <strong>Spring</strong>, and <strong>MySQL</strong>. Lately, I've also been
                exploring <strong>AI, RAG, and LangChain</strong> — because apparently,
                learning one tech stack wasn't enough. 
              </p>
              <p>
                I like turning ideas into working products, figuring out why things break, and
                learning something new from every project.
              </p>
            </div>

            <div className="build-process">
              <div className="build-process-icon">↻</div>
              <div className="build-process-text">
                <span>Build</span>
                <b>→</b>
                <span>Break</span>
                <b>→</b>
                <span>Debug</span>
                <b>→</b>
                <span>Learn</span>
                <b>→</b>
                <span>Repeat.</span>
              </div>
            </div>
          </article>

          <article className="about-card philosophy-card">
            <div className="about-card-heading philosophy-heading">
              <div className="about-icon philosophy-main-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.5 4.5a3.5 3.5 0 0 0-3.45 4.1A3.5 3.5 0 0 0 7 15.5h1" />
                  <path d="M14.5 4.5a3.5 3.5 0 0 1 3.45 4.1A3.5 3.5 0 0 1 17 15.5h-1" />
                  <path d="M9 8h6" />
                  <path d="M8 12h8" />
                  <path d="M9 16h6" />
                  <path d="M10 19h4" />
                </svg>
              </div>
              <h3>
                My Development <span>Philosophy</span>
              </h3>
            </div>

            <div className="philosophy-list">
              {PHILOSOPHY.map((item, i) => (
                <div className="philosophy-item" key={i}>
                  <div className="philosophy-item-icon">{item.icon}</div>
                  <div className="philosophy-text">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
