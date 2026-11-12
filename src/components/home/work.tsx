import Image from "next/image";
import Link from "next/link";

import { BrowserFrame, hostOf } from "@/components/shared/browser-frame";
import { Status } from "@/components/shared/status";
import { featuredProjects, projects, type Project } from "@/content/projects";

import { ChapterRail } from "./chapter-rail";
import { HorizontalReel } from "./horizontal-reel";
import s from "./work.module.css";

function Media({ project }: { project: Project }) {
  if (!project.cover) return null;
  return (
    <BrowserFrame url={hostOf(project.links.live) ?? project.cover.label ?? project.slug}>
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        width={project.cover.width}
        height={project.cover.height}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={s.image}
      />
    </BrowserFrame>
  );
}

function Panel({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  return (
    <article className={s.panel} data-panel>
      <div className={s.copy}>
        <div>
          <div className={s.index} data-reveal aria-hidden="true">
            {number}
          </div>
          <p className={`mono ${s.kind}`} data-reveal>
            <Status status={project.status} />
            <span className="mut">{project.kind}</span>
          </p>
          <h3 className={s.title} data-reveal>
            {project.name}
          </h3>
          <p className={s.summary} data-reveal>
            {project.summary}
          </p>
          <dl className={s.metrics} data-reveal>
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="mono mut">{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div data-reveal>
          <ul className={`mono ${s.tags}`} aria-label="Stack">
            {project.stack.slice(0, 5).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className={`mono ${s.links}`}>
            <Link href={`/work/${project.slug}`} className={s.primary}>
              Case study →
            </Link>
            {project.links.live ? (
              <a href={project.links.live} target="_blank" rel="noopener" className="link-line">
                Live ↗
              </a>
            ) : null}
            {project.links.code ? (
              <a href={project.links.code} target="_blank" rel="noopener" className="link-line">
                Code ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <Link
        href={`/work/${project.slug}`}
        className={s.media}
        data-cursor="Open"
        aria-label={`${project.name} case study`}
        tabIndex={-1}
      >
        <Media project={project} />
      </Link>
    </article>
  );
}

export function Work() {
  const others = projects.length - featuredProjects.length;
  return (
    <section id="work" className={s.work} aria-labelledby="work-title">
      <HorizontalReel
        rail={<ChapterRail index="02" label="Work" solid />}
        head={
          <div className={`mono ${s.head}`}>
            <span>(02) Selected work</span>
            <span className="mut">
              {featuredProjects.length} featured · {others} more in the index
            </span>
          </div>
        }
      >
        <div className={s.intro}>
          <h2 id="work-title" className={s.introTitle}>
            Selected <em>work.</em>
          </h2>
          <p>
            Five projects, each with a live build or source you can open, and the numbers behind them:
            tests, routes, models.
          </p>
          <Link href="/work" className={`mono link-line ${s.introLink}`}>
            Browse the full index →
          </Link>
        </div>

        {featuredProjects.map((project, index) => (
          <Panel key={project.slug} project={project} index={index} />
        ))}

        <div className={s.end}>
          <span className="mono mut">+ {others} more</span>
          <Link href="/work" className={s.endLink} data-cursor="Index">
            All projects →
          </Link>
          <span className="mono mut">Games, PWAs, engines, experiments.</span>
        </div>
      </HorizontalReel>
    </section>
  );
}
