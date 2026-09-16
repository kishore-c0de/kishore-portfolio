import Header from "./Header.jsx";

export default function Hero() {
  return (
    <div className="hero-stage">
      <div className="circle-bg"></div>

      <Header />

      <main className="hero">
        <div className="img-wrapper">
          <img src="/assests/hero2.png" alt="Kishore M" className="hero-img" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            KISHORE <span>M</span>
          </h1>

          <div className="role-rotator" aria-label="I'm Developer, I'm AI Enthusiast, I'm Coder">
            <span className="role-fixed">I'm</span>
            <span className="role-window">
              <span className="role-word">Developer</span>
              <span className="role-word">AI Enthusiast</span>
              <span className="role-word">Coder</span>
            </span>
          </div>

          <a href="/assests/Kishore_FullStack.pdf" download className="download-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </a>
        </div>
      </main>
    </div>
  );
}
