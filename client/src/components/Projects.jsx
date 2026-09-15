const PROJECTS = [
  {
    id: 1,
    title: "Project One",
    description:
      "Placeholder description for your first project. Swap this out with a short summary of the problem it solves and the impact it had.",
    image: "",
    tags: ["React", "Node.js", "MySQL"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "Placeholder description for your second project. Talk about the core feature, the stack, and anything interesting you solved.",
    image: "",
    tags: ["Java", "Spring Boot", "MySQL"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "Placeholder description for your third project. Mention the AI/RAG angle if this is one of your LangChain-based builds.",
    image: "",
    tags: ["AI", "RAG", "LangChain"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    id: 4,
    title: "Project Four",
    description:
      "Placeholder description for your fourth project. This one's ready to be replaced with real content whenever you have it.",
    image: "",
    tags: ["React", "Express", "MongoDB"],
    liveUrl: "",
    repoUrl: "",
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
