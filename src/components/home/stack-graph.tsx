"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import { projects, skillOrder, type Project } from "@/content/projects";
import { prefersReducedMotion } from "@/lib/scroll";

import { ChapterRail } from "./chapter-rail";
import { NodeGraph } from "./node-graph";
import s from "./stack-graph.module.css";

type Active = { kind: "skill" | "project"; id: string } | null;

const projectHref = (project: Project) =>
  project.caseStudy ? `/work/${project.slug}` : (project.links.live ?? project.links.code ?? "#");

/**
 * The system map. Desktop gets the live node graph (borrowed from the Live System concept);
 * phones and screen readers get the same information as two linked lists.
 */
export function StackGraph() {
  const skills = useMemo(
    () =>
      skillOrder
        .map((skill) => ({ skill, count: projects.filter((p) => p.skills.includes(skill)).length }))
        .filter((entry) => entry.count > 0),
    [],
  );

  const [active, setActive] = useState<Active>(null);
  const [touched, setTouched] = useState(false);

  const lit = useMemo(() => {
    if (!active) return null;
    if (active.kind === "skill") {
      return {
        skills: new Set([active.id]),
        projects: new Set(projects.filter((p) => p.skills.includes(active.id)).map((p) => p.slug)),
      };
    }
    const project = projects.find((p) => p.slug === active.id);
    return { skills: new Set(project?.skills ?? []), projects: new Set([active.id]) };
  }, [active]);

  const engage = useCallback((next: Active) => {
    setTouched(true);
    setActive(next);
  }, []);

  // On phones, walk through the skills until someone taps one.
  useEffect(() => {
    if (touched || prefersReducedMotion() || window.innerWidth > 900) return;
    let index = 0;
    const id = window.setInterval(() => {
      setActive({ kind: "skill", id: skills[index % skills.length].skill });
      index += 1;
    }, 2400);
    return () => window.clearInterval(id);
  }, [touched, skills]);

  return (
    <section id="stack" className={s.stack} aria-labelledby="stack-title">
      <ChapterRail index="03" label="System" />
      <div className="section-label mono">
        <span>(03) System map</span>
        <span className="mut">Hover a node</span>
      </div>
      <h2 id="stack-title" className={s.title}>
        Every project, wired to <em>its stack.</em>
      </h2>

      <div className={s.desktop}>
        <NodeGraph />
      </div>

      <div className={s.lists} onMouseLeave={() => setActive(null)}>
        <ul className={s.skills} aria-label="Skills">
          {skills.map(({ skill, count }) => (
            <li key={skill}>
              <button
                type="button"
                className={s.skill}
                data-on={lit?.skills.has(skill) ?? false}
                data-dim={lit ? !lit.skills.has(skill) : false}
                aria-pressed={active?.kind === "skill" && active.id === skill}
                onMouseEnter={() => engage({ kind: "skill", id: skill })}
                onFocus={() => engage({ kind: "skill", id: skill })}
                onClick={() => engage({ kind: "skill", id: skill })}
              >
                <span>{skill}</span>
                <span className="mono mut">{String(count).padStart(2, "0")}</span>
              </button>
            </li>
          ))}
        </ul>

        <ul className={s.projects} aria-label="Projects">
          {projects.map((project) => {
            const external = !project.caseStudy;
            return (
              <li key={project.slug}>
                <Link
                  href={projectHref(project)}
                  {...(external ? { target: "_blank", rel: "noopener" } : {})}
                  className={s.project}
                  data-on={lit?.projects.has(project.slug) ?? false}
                  data-dim={lit ? !lit.projects.has(project.slug) : false}
                  onMouseEnter={() => engage({ kind: "project", id: project.slug })}
                  onFocus={() => engage({ kind: "project", id: project.slug })}
                >
                  <span className={s.projectName}>{project.name}</span>
                  <span className="mono mut">
                    {project.kind}
                    {external ? " ↗" : ""}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
