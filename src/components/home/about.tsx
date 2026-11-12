"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { about, stats } from "@/content/site";

import s from "./about.module.css";
import { ChapterRail } from "./chapter-rail";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const root = useRef<HTMLElement>(null);
  const words = about.statement.split(" ");
  const highlight = new Set(about.highlight);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-word]",
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.04,
            ease: "none",
            scrollTrigger: { trigger: "[data-statement]", start: "top 78%", end: "bottom 42%", scrub: true },
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = Number(el.dataset.count);
          const decimals = Number(el.dataset.decimals ?? 0);
          const suffix = el.dataset.suffix ?? "";
          const counter = { value: 0 };
          el.textContent = `0${suffix}`;
          ScrollTrigger.create({
            trigger: el,
            start: "top 92%",
            once: true,
            onEnter: () =>
              gsap.to(counter, {
                value: target,
                duration: 1.8,
                ease: "expo.out",
                onUpdate: () => {
                  el.textContent = `${counter.value.toFixed(decimals)}${suffix}`;
                },
              }),
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="about" className={s.about} aria-labelledby="about-title">
      <ChapterRail index="04" label="About" />
      <div className="section-label mono">
        <span id="about-title">(04) About</span>
        <span className="mut">B.Tech IT · BVCOE, GGSIPU · ’28</span>
      </div>

      <p className={s.statement} data-statement>
        {words.map((word, index) => (
          <span key={index} data-word className={highlight.has(word) ? s.hl : undefined}>
            {word}{" "}
          </span>
        ))}
      </p>

      <dl className={s.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={s.stat}>
            <dt className="mono mut">{stat.label}</dt>
            <dd
              data-count={stat.value}
              data-decimals={stat.decimals ?? 0}
              data-suffix={stat.suffix}
            >
              {stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value}
              {stat.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
