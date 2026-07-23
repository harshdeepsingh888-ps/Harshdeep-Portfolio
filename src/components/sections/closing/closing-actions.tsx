import {
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";

const professionalLinks = [
  {
    label: "GitHub",
    description: "Projects & source code",
    href: "https://github.com/harshdeepsingh888-ps",
    external: true,
  },
  {
    label: "LinkedIn",
    description: "Professional profile",
    href: "https://www.linkedin.com/in/harshdeep-singh-073b02320/",
    external: true,
  },
];

export function ClosingActions() {
  return (
    <section
      className="closing__opportunity"
      aria-labelledby="closing-opportunity-title"
    >
      <div className="closing__opportunity-copy">
        <span className="closing__availability">
          <span
            className="closing__availability-dot"
            aria-hidden="true"
          />

          Available for opportunities
        </span>

        <h3 id="closing-opportunity-title">
          Looking for a Software Engineering Internship
        </h3>

        <p>
          I want to contribute to a team building ambitious products,
          reliable systems, and meaningful AI-powered experiences.
        </p>
      </div>

      <div className="closing__action-area">
        <a
          className="closing__primary-action"
          href="mailto:harshdeepsingh87179@gmail.com"
        >
          <span className="closing__primary-label">
            <Mail
              size={19}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            Start a conversation
          </span>

          <span
            className="closing__action-arrow"
            aria-hidden="true"
          >
            <ArrowUpRight
              size={19}
              strokeWidth={1.8}
            />
          </span>
        </a>

        <div className="closing__professional-links">
          {professionalLinks.map((link) => (
            <a
              key={link.label}
              className="closing__professional-link"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <span>
                <strong>{link.label}</strong>
                <small>{link.description}</small>
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </a>
          ))}

          <a
            className="closing__professional-link"
            href="/resume.pdf"
            download
          >
            <span>
              <strong>Resume</strong>
              <small>Download PDF</small>
            </span>

            <Download
              size={16}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}