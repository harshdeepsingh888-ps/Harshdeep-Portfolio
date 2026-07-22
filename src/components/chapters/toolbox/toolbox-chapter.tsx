import { ToolboxCard } from "./toolbox-card";
import { ToolboxChapterRail } from "./toolbox-chapter-rail";
import { toolboxCategories } from "./toolbox-data";

import "./toolbox.css";
import "./toolbox-chapter.css";

export function ToolboxChapter() {
  const backend = toolboxCategories.find(
    (category) => category.id === "backend"
  );

  const ai = toolboxCategories.find(
    (category) => category.id === "ai"
  );

  const frontend = toolboxCategories.find(
    (category) => category.id === "frontend"
  );

  const infrastructure = toolboxCategories.find(
    (category) => category.id === "infrastructure"
  );

  const languages = toolboxCategories.find(
    (category) => category.id === "languages"
  );

  if (
    !backend ||
    !ai ||
    !frontend ||
    !infrastructure ||
    !languages
  ) {
    return null;
  }

  return (
    <section
      id="toolbox"
      className="toolbox-chapter"
      aria-labelledby="toolbox-title"
    >
      <ToolboxChapterRail />

      <div className="toolbox-chapter__container">
        <header className="work-chapter__header toolbox-chapter__header">
          <span className="work-chapter__eyebrow">
            <span className="work-chapter__eyebrow-dot" />
            04 / Toolbox
          </span>

          <h2
  id="toolbox-title"
  className="work-chapter__title toolbox-chapter__title"
>
  <span className="toolbox-chapter__title-primary">
    Technologies behind the
  </span>

  <span className="toolbox-chapter__title-accent">
    systems I build.
  </span>
</h2>

          <p className="work-chapter__description">
            From backend services and AI systems to frontend applications and
            cloud deployment, this is the engineering toolbox I rely on to
            design, build, and ship production-ready software.
          </p>
        </header>

        <div className="toolbox-blueprint">
          <div className="toolbox-blueprint__backend">
            <ToolboxCard category={backend} />
          </div>

          <div className="toolbox-blueprint__supporting">
            <div className="toolbox-blueprint__ai">
              <ToolboxCard category={ai} />
            </div>

            <div className="toolbox-blueprint__frontend">
              <ToolboxCard category={frontend} />
            </div>
          </div>

          <div className="toolbox-blueprint__infrastructure">
            <ToolboxCard category={infrastructure} />
          </div>

          <div className="toolbox-blueprint__languages">
            <ToolboxCard category={languages} />
          </div>
        </div>
      </div>
    </section>
  );
}