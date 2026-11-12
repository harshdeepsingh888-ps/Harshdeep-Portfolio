import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BrowserFrame, hostOf } from "@/components/shared/browser-frame";
import { Reveal } from "@/components/shared/reveal";
import { Status } from "@/components/shared/status";
import { caseStudies, getProject } from "@/content/projects";

import s from "./case-study.module.css";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} — ${project.kind} case study`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { title, description: project.summary, url: `/work/${slug}`, type: "article" },
    twitter: { title, description: project.summary },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();

  const { default: Content } = await import(`@/content/case-studies/${slug}.mdx`);
  const index = caseStudies.findIndex((p) => p.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <main className={s.page}>
      <header className={s.hero}>
        <Link href="/work" className={`mono link-line ${s.back}`}>
          ← All work
        </Link>

        <p className={`mono ${s.eyebrow}`}>
          <span className="mut">Case study {String(index + 1).padStart(2, "0")}</span>
          <Status status={project.status} />
          <span className="mut">{project.kind}</span>
        </p>
        <h1 className={s.title}>{project.name}</h1>
        <p className={s.summary}>{project.description}</p>

        <dl className={s.meta}>
          <div>
            <dt className="mono mut">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="mono mut">Timeline</dt>
            <dd>{project.timeline}</dd>
          </div>
          <div>
            <dt className="mono mut">Stack</dt>
            <dd>{project.stack.join(", ")}</dd>
          </div>
          <div>
            <dt className="mono mut">Links</dt>
            <dd className={s.links}>
              {project.links.live ? (
                <a href={project.links.live} target="_blank" rel="noopener" className="link-line">
                  Live site ↗
                </a>
              ) : null}
              {project.links.code ? (
                <a href={project.links.code} target="_blank" rel="noopener" className="link-line">
                  Source ↗
                </a>
              ) : null}
            </dd>
          </div>
        </dl>
      </header>

      <Reveal className={s.metrics}>
        {project.metrics.map((metric) => (
          <div key={metric.label} data-reveal>
            <span className={s.metricValue}>{metric.value}</span>
            <span className="mono mut">{metric.label}</span>
          </div>
        ))}
      </Reveal>

      {project.cover ? (
        <div className={s.cover}>
          <BrowserFrame url={hostOf(project.links.live) ?? project.cover.label ?? project.slug}>
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={project.cover.width}
              height={project.cover.height}
              priority
              sizes="(min-width: 1200px) 1200px, 100vw"
              className={s.coverImage}
            />
          </BrowserFrame>
        </div>
      ) : null}

      <article className={s.body}>
        <Content />
      </article>

      <Link href={`/work/${next.slug}`} className={s.next} data-cursor="Next">
        <span className="mono mut">Next case study</span>
        <span className={s.nextTitle}>{next.name} →</span>
        <span className={s.nextSummary}>{next.summary}</span>
      </Link>
    </main>
  );
}
