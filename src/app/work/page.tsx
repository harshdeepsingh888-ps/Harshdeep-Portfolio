import type { Metadata } from "next";

import { Registry } from "@/components/work/registry";
import { projects } from "@/content/projects";

import s from "./work.module.css";

export const metadata: Metadata = {
  title: "All projects",
  description: "Everything Harshdeep Singh has shipped — backend systems, AI agents, real-time apps, PWAs and browser games.",
  alternates: { canonical: "/work" },
};

export default function WorkIndexPage() {
  const live = projects.filter((p) => p.links.live).length;
  return (
    <main className={s.page}>
      <header className={s.head}>
        <p className="mono mut">(index) All projects</p>
        <h1 className={s.title}>
          Everything I’ve <em>shipped.</em>
        </h1>
        <p className={s.lede}>
          {projects.length} projects, {live} of them live right now. Case studies go deep on five; the rest link straight
          to the build or the source.
        </p>
      </header>
      <Registry />
    </main>
  );
}
