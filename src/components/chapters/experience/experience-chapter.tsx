import { ExperienceCard } from "./experience-card";
import { ExperienceChapterRail } from "./experience-chapter-rail";
import { experiences } from "./experience-data";

import "./experience.css";

export function ExperienceChapter() {
  return (
    <section id="experience" className="experience-chapter">
      <ExperienceChapterRail />

      <div className="experience-chapter__container">
        <header className="work-chapter__header">
          <div className="work-chapter__eyebrow">
            <span className="work-chapter__eyebrow-dot" />
            <span>03 / Experience</span>
          </div>

          <h2 className="work-chapter__title">
            Learning engineering by{" "}
            <span>shipping real software.</span>
          </h2>

          <p className="work-chapter__description">
            My experience has been shaped by ownership, production-focused
            development, and solving practical problems beyond classroom
            assignments.
          </p>
        </header>

        <div className="experience-chapter__list">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              {...experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}