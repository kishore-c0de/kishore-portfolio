export default function Header() {
  return (
    <header>
      <div className="logo">
        K <span>M</span>
      </div>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#faqs">FAQs</a>
        <a href="#journey">Journey</a>
        <a href="#contact" className="connect-btn">
          Connect
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </nav>
    </header>
  );
}
