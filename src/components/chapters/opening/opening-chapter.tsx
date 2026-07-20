import "@fontsource/bebas-neue/400.css";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import "./opening-chapter.css";

const technologies = [
  "Node.js",
  "Express",
  "PostgreSQL",
  "React",
  "Prisma",
  "Docker",
];

function GitHubMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="opening-social-icon"
    >
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.92a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="opening-social-icon"
    >
      <path
        fill="currentColor"
        d="M5.3 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.5 9h3.6v11.5H3.5V9Zm5.8 0h3.45v1.57h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.45 4.3 5.64v6.16h-3.6v-5.46c0-1.3-.03-2.98-1.78-2.98-1.79 0-2.06 1.43-2.06 2.89v5.55H9.3V9Z"
      />
    </svg>
  );
}

function MailMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="opening-social-icon"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        d="M3 5.5h18v13H3v-13Zm1.2 1.2L12 13l7.8-6.3"
      />
    </svg>
  );
}

export function OpeningChapter() {
  return (
    <section id="opening" className="opening">
      <div aria-hidden="true" className="opening-grid">
        <span className="opening-grid-left" />
        <span className="opening-grid-right" />
        <span className="opening-grid-horizontal" />
        <span className="opening-grid-node" />
      </div>

      <div aria-hidden="true" className="opening-lighting">
        <span className="opening-glow opening-glow-primary" />
        <span className="opening-glow opening-glow-secondary" />
        <span className="opening-glow opening-glow-bottom" />
      </div>

      <aside aria-hidden="true" className="opening-index">
        <span>01</span>
        <span className="opening-index-line" />
        <span>Intro</span>
        <span className="opening-index-active" />
      </aside>

      <aside className="opening-socials" aria-label="Social links">
        <a
          href="https://github.com/harshdeepsingh888-ps"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubMark />
        </a>

        <a
          href="https://www.linkedin.com/in/harshdeep-singh-073b02320/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInMark />
        </a>

        <a
          href="mailto:harshdeepsingh87179@gmail.com"
          aria-label="Email Harshdeep"
        >
          <MailMark />
        </a>
      </aside>

      <div className="opening-container">
        <header className="opening-header">
          <a href="#opening" className="opening-logo">
            HS
          </a>

          <nav className="opening-nav" aria-label="Primary navigation">
            <div className="opening-nav-links">
              <a href="#work">Work</a>
              <a href="#journey">Journey</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

            <a href="#work" className="opening-explore-link">
              Explore work
              <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
        </header>

        <main className="opening-main">
          <div className="opening-identity">
            <p className="opening-eyebrow">
              Software Engineer <span>·</span> Delhi, India
            </p>

            <h1 className="opening-name">
              <span>Harshdeep</span>
              <span className="opening-surname">Singh</span>
            </h1>

            <div className="opening-introduction">
              <p className="opening-statement">
                Building intelligent software,
                <span>one system at a time.</span>
              </p>

              <p className="opening-description">
                I build backend systems, AI-enabled products and developer
                tools with a focus on reliability, thoughtful architecture and
                real-world impact.
              </p>
            </div>

            <div className="opening-actions">
              <a href="#work" className="opening-primary-action">
                View engineering work
                <ArrowUpRight aria-hidden="true" />
              </a>

              <a
                href="https://github.com/harshdeepsingh888-ps"
                target="_blank"
                rel="noreferrer"
                className="opening-secondary-action"
              >
                GitHub
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <article id="work" className="featured-project">
            <header className="featured-project-header">
              <div>
                <p className="featured-project-label">Featured system</p>

                <h2>GatePulse</h2>

                <p>
                  Production-grade API Gateway with authentication, rate
                  limiting, analytics and observability.
                </p>
              </div>

              <span className="featured-project-status">
                Production MVP
              </span>
            </header>

            <div className="featured-project-preview">
              <div className="featured-project-image-window">
                <img
                  src="/images/projects/gatepulse-dashboard.png"
                  alt="GatePulse API Gateway analytics dashboard"
                />
              </div>
            </div>

            <footer className="featured-project-footer">
              <ul aria-label="GatePulse technologies">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <a href="#gatepulse">
                View case study
                <ArrowUpRight aria-hidden="true" />
              </a>
            </footer>
          </article>
        </main>

        <a
  href="#work"
  className="opening-scroll"
  aria-label="Scroll to selected engineering work"
>
  <span aria-hidden="true">↓</span>
</a>
      </div>
    </section>
  );
}