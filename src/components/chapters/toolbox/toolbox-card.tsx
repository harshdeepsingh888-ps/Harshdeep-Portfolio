import clsx from "clsx";

import type { ToolboxCategory } from "./toolbox-data";

type ToolboxCardProps = {
  category: ToolboxCategory;
};

const categoryGlyphs: Record<ToolboxCategory["id"], string> = {
  backend: "</>",
  ai: "✦",
  frontend: "◇",
  infrastructure: "⌁",
  languages: "Aa",
};

export function ToolboxCard({ category }: ToolboxCardProps) {
  const Icon = category.icon;

  return (
    <article
      className={clsx(
        "toolbox-card",
        `toolbox-card--${category.accent}`,
        `toolbox-card--${category.id}`
      )}
    >
      <div className="toolbox-card__visual">
        <span className="toolbox-card__visual-frame" />

        <div className="toolbox-card__icon">
          <Icon size={34} strokeWidth={1.65} />
        </div>

        <span className="toolbox-card__visual-node" />
      </div>

      <div className="toolbox-card__content">
        <div className="toolbox-card__heading">
          <h3 className="toolbox-card__title">
            {category.title}
          </h3>

          <span
            className="toolbox-card__glyph"
            aria-hidden="true"
          >
            {categoryGlyphs[category.id]}
          </span>
        </div>

        <p className="toolbox-card__description">
          {category.description}
        </p>

        <div className="toolbox-card__technologies">
          {category.technologies.map((technology) => (
            <span
              key={technology}
              className="toolbox-card__technology"
            >
              <span className="toolbox-card__technology-dot" />
              {technology}
            </span>
          ))}
        </div>
      </div>
      
    </article>
  );
}