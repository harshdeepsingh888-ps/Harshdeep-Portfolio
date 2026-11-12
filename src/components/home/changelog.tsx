import { Reveal } from "@/components/shared/reveal";
import { changelog } from "@/content/site";

import { ChapterRail } from "./chapter-rail";
import s from "./changelog.module.css";

export function Changelog() {
  return (
    <section id="experience" className={`${s.section} blueprint`} aria-labelledby="experience-title">
      <ChapterRail index="05" label="Experience" />
      <div className="section-label mono">
        <span>(05) Experience</span>
        <span className="mut">git log --oneline career</span>
      </div>
      <h2 id="experience-title" className={s.title}>
        Change<span className="mut">log.</span>
      </h2>

      <Reveal as="ol" className={s.log}>
        {changelog.map((commit, index) => (
          <li key={commit.title} className={s.commit} data-head={index === 0} data-reveal>
            <span className={s.graph} aria-hidden="true">
              <i />
            </span>
            <span className={`mono mut ${s.date}`}>{commit.date}</span>
            <div className={s.body}>
              <h3>
                {commit.title}
                {commit.ref ? (
                  <span className={`mono ${s.ref}`} data-tone={commit.ref.tone}>
                    {commit.ref.label}
                  </span>
                ) : null}
              </h3>
              <p>{commit.body}</p>
            </div>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
