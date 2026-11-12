"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { Status } from "@/components/shared/status";
import { projects, type Project } from "@/content/projects";
import { prefersReducedMotion } from "@/lib/scroll";

import s from "./registry.module.css";

const filters = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend", match: ["Node.js", "FastAPI", "PostgreSQL"] },
  { id: "ai", label: "AI", match: ["LLMs"] },
  { id: "realtime", label: "Real-time", match: ["Real-time"] },
  { id: "frontend", label: "Frontend", match: ["React"] },
  { id: "games", label: "Games", match: ["three.js"] },
] as const;

type FilterId = (typeof filters)[number]["id"];

const hrefFor = (project: Project) =>
  project.caseStudy ? `/work/${project.slug}` : (project.links.live ?? project.links.code ?? "#");

export function Registry() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [hover, setHover] = useState<string | null>(null);
  const preview = useRef<HTMLDivElement>(null);

  const visible = useMemo(() => {
    const rule = filters.find((f) => f.id === filter);
    if (!rule || !("match" in rule)) return projects;
    return projects.filter((p) => p.skills.some((skill) => (rule.match as readonly string[]).includes(skill)));
  }, [filter]);

  // The preview card trails the pointer with a little lag and tilt.
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || prefersReducedMotion()) return;
    const el = preview.current;
    if (!el) return;
    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      tx = event.clientX;
      ty = event.clientY;
    };
    const loop = () => {
      const dx = tx - x;
      x += dx * 0.12;
      y += (ty - y) * 0.12;
      const tilt = Math.max(-10, Math.min(10, dx * 0.06));
      el.style.transform = `translate3d(${x + 32}px, ${y - el.offsetHeight / 2}px, 0) rotate(${tilt}deg)`;
      frame = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const hovered = projects.find((p) => p.slug === hover);

  return (
    <div className={s.wrap}>
      <div className={s.filters} role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`mono ${s.filter}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
        <span className={`mono mut ${s.count}`}>
          {String(visible.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className={`mono mut ${s.row} ${s.headRow}`} aria-hidden="true">
        <span>#</span>
        <span>Project</span>
        <span>Kind</span>
        <span>Proof</span>
        <span>Status</span>
        <span />
      </div>

      <ul className={s.list} onMouseLeave={() => setHover(null)}>
        {visible.map((project) => {
          const external = !project.caseStudy;
          return (
            <li key={project.slug}>
              <Link
                href={hrefFor(project)}
                {...(external ? { target: "_blank", rel: "noopener" } : {})}
                className={s.row}
                data-dim={hover !== null && hover !== project.slug}
                data-cursor={project.caseStudy ? "Read" : "Open"}
                onMouseEnter={() => setHover(project.slug)}
                onFocus={() => setHover(project.slug)}
              >
                <span className="mono mut">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
                <span className={s.name}>
                  {project.name}
                  <small>{project.summary}</small>
                </span>
                <span className="mono mut">{project.kind}</span>
                <span className="mono">
                  {project.metrics
                    .slice(0, 2)
                    .map((m) => `${m.value} ${m.label}`)
                    .join(" · ")}
                </span>
                <span>
                  <Status status={project.status} />
                </span>
                <span className={`mono ${s.go}`}>{project.caseStudy ? "Case study →" : "Open ↗"}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div ref={preview} className={s.preview} data-on={Boolean(hovered?.cover)} aria-hidden="true">
        {projects
          .filter((p) => p.cover)
          .map((p) => (
            <div key={p.slug} className={s.slide} data-on={p.slug === hover}>
              <Image
                src={p.cover!.src}
                alt=""
                fill
                sizes="420px"
                style={{ objectFit: "cover", objectPosition: "left top" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
