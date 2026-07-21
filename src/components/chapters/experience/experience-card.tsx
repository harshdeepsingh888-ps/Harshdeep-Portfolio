import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import type { ExperienceItem } from "./experience-data";

type ExperienceCardProps = ExperienceItem & {
  index: number;
};

function EmphasizedText({ text }: { text: string }) {
  const words = text.trim().split(/\s+/);

  if (words.length === 1) {
    return <strong>{text}</strong>;
  }

  const secondaryText = words.pop();
  const primaryText = words.join(" ");

  return (
    <>
      <strong>{primaryText}</strong>{" "}
      <span>{secondaryText}</span>
    </>
  );
}

export function ExperienceCard({
  role,
  company,
  duration,
  type,
  description,
  technologies,
  achievements,
  index,
}: ExperienceCardProps) {
  const experienceNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      className="experience-card"
      data-experience={index === 0 ? "primary" : "secondary"}
    >
      <div className="experience-card__node" aria-hidden="true">
        <span>{experienceNumber}</span>
      </div>

      <div className="experience-card__shell">
        <div className="experience-card__topbar">
          <div className="experience-card__identity">
            <div className="experience-card__meta">
              <span className="experience-card__type">
                <Sparkles aria-hidden="true" />

                <span className="experience-card__type-text">
                  <EmphasizedText text={type} />
                </span>
              </span>

              <span className="experience-card__duration">{duration}</span>
            </div>

            <h3 className="experience-card__role">
              <EmphasizedText text={role} />
            </h3>

            <div className="experience-card__company-row">
              <p className="experience-card__company">{company}</p>

              <span className="experience-card__ownership">
                {index === 0 ? "Sole Developer" : "Full-Stack Track"}
              </span>
            </div>
          </div>

          <div className="experience-card__index-mark" aria-hidden="true">
            {experienceNumber}
          </div>
        </div>

        <div className="experience-card__body">
          <div className="experience-card__summary">
            <p className="experience-card__description">{description}</p>

            <div className="experience-card__technologies">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="experience-card__technology"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="experience-card__impact">
            <p className="experience-card__impact-label">
              Engineering Impact
            </p>

            <ul className="experience-card__achievements">
              {achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="experience-card__achievement"
                >
                  <span className="experience-card__achievement-icon">
                    <Check aria-hidden="true" />
                  </span>

                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="experience-card__footer">
          <span>
            {index === 0
              ? "AI systems · backend architecture · automation"
              : "Frontend systems · responsive UI · deployment"}
          </span>

          <ArrowUpRight aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}