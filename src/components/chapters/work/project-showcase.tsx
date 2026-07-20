import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectAccent = "violet" | "orange";

type ProjectShowcaseProps = {
  eyebrow: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image?: string;
  imageAlt?: string;
  caseStudyLink: string;
  accent: ProjectAccent;
};

export function ProjectShowcase({
  eyebrow,
  title,
  description,
  technologies,
  highlights,
  image,
  imageAlt,
  caseStudyLink,
  accent,
}: ProjectShowcaseProps) {
  return (
    <article className="project-showcase" data-accent={accent}>
      <div className="project-showcase__content">
        <div className="project-showcase__eyebrow">
          <span className="project-showcase__eyebrow-dot" />
          <span>{eyebrow}</span>
        </div>

        <h3 className="project-showcase__title">{title}</h3>

        <p className="project-showcase__description">{description}</p>

        <div
          className="project-showcase__technologies"
          aria-label={`${title} technologies`}
        >
          {technologies.map((technology) => (
            <span
              key={technology}
              className="project-showcase__technology"
            >
              {technology}
            </span>
          ))}
        </div>

        <ul className="project-showcase__highlights">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="project-showcase__highlight"
            >
              <span className="project-showcase__highlight-icon">
                <Check aria-hidden="true" />
              </span>

              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <Link
          to={caseStudyLink}
          className="project-showcase__link"
          aria-label={`View ${title} case study`}
        >
          <span>View Case Study</span>
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="project-showcase__visual">
        <div className="project-showcase__image-frame">
          {image ? (
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="project-showcase__image"
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}