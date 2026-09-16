const PROJECTS = [
  {
    id: 1,
    title: "Real-Time Chat Application",
    description:
      "A full-stack chat application that enables users to register, log in, create and join chat rooms, and exchange messages in real time using Socket.IO, with JWT authentication and MySQL for persistent data storage.",
    image: "/assests/chat-app-thumb.png",
    tags: ["React.js", "Socket.IO", "JWT", "MySQL"],
    liveUrl: "https://bruh-17u.vercel.app/",
    repoUrl: "https://github.com/kishore-c0de/real-time-chat-app.git",
  },
  {
    id: 2,
    title: "Queue Management System",
    description:
      "A real-time web application for generating, tracking, and managing customer queue tokens, with separate customer and admin interfaces, live queue updates via Socket.IO, secure admin authentication, and AI-powered daily queue summaries.",
    image: "/assests/queue-app-thumb.png",
    tags: ["React.js", "Express.js", "Socket.IO", "Prisma", "MySQL", "Groq API"],
    liveUrl: "https://queue-system-self.vercel.app/",
    repoUrl: "https://github.com/kishore-c0de/queue-management-system.git",
  },
  {
    id: 3,
    title: "Banking System",
    description:
      "A full-stack banking application that enables users to manage multiple accounts, perform deposits, withdrawals and fund transfers, and view transaction history with secure JWT-based authentication.",
    image: "/assests/banking-app-thumb.png",
    tags: ["React 18", "Express.js", "JWT", "MySQL"],
    liveUrl: "https://banking-system-7pop.onrender.com/login",
    repoUrl: "https://github.com/kishore-c0de/Banking-System.git",
  },
  {
    id: 4,
    title: "Personal Developer Portfolio",
    description:
      "A responsive portfolio website showcasing my skills, projects, experience, and contact information, with a modern UI, interactive sections, and a functional contact form powered by Web3Forms.",
    image: "/assests/portfolio-thumb.png",
    tags: ["React.js", "Vite", "Web3Forms"],
    liveUrl: "https://kishore-portfolio-henna-three.vercel.app/",
    repoUrl: "https://github.com/kishore-c0de/kishore-portfolio.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-preview">
      <div className="projects-inner">
        <div className="section-label">SELECTED WORK</div>
        <h2 className="projects-heading">Things I've actually built.</h2>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-thumb">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  project.title
                )}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {(project.tags || []).map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a className="project-link" href={project.repoUrl} target="_blank" rel="noreferrer">
                    Source
                  </a>
                )}
                {!project.liveUrl && !project.repoUrl && (
                  <span className="project-link" style={{ opacity: 0.5 }}>
                    Links coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
