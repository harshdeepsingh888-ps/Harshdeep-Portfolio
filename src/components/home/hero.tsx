"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

import { hero, site } from "@/content/site";
import { fireIntro } from "@/lib/intro";
import { prefersReducedMotion } from "@/lib/scroll";

import { ChapterRail } from "./chapter-rail";
import s from "./hero.module.css";
import { SignalField } from "./signal-field";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const html = document.documentElement;
      fireIntro();
      // Repeat visits and reduced motion skip the reveal: the content is simply there.
      if (html.dataset.seen || prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-line] > span",
        { y: 0, yPercent: 125 },
        {
          y: 0,
          yPercent: 0,
          duration: 1.3,
          ease: "expo.out",
          stagger: 0.09,
          delay: 0.15,
          clearProps: "transform",
          onComplete: () => {
            html.dataset.seen = "1";
            try {
              sessionStorage.setItem("hs-intro", "1");
            } catch {
              /* private mode: the reveal simply plays again */
            }
          },
        },
      );
      gsap.from("[data-meta] > *", { y: 18, opacity: 0, duration: 1.1, ease: "expo.out", stagger: 0.07, delay: 0.4 });
    },
    { scope: root },
  );

  return (
    <section ref={root} className={s.hero} aria-label="Introduction">
      <SignalField />
      <ChapterRail index="01" label="Intro" intro />

      <div className={s.meta} data-meta>
        <p className={`mono ${s.status}`}>
          <span className="status-dot" />
          {site.status}
        </p>

        <div className={s.intro}>
          <p className={s.lede}>
            {hero.lede} <span className={s.now}>{hero.now}</span>
          </p>
          <dl className={`mono ${s.facts}`}>
            {hero.facts.map((fact) => (
              <div key={fact.k}>
                <dt className="mut">{fact.k}</dt>
                <dd>{fact.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <h1 className={s.name}>
        <span className={s.line} data-line>
          <span>Harshdeep</span>
        </span>
        <span className={`${s.line} ${s.lineEnd}`} data-line>
          <span>
            Singh<span className={s.dot}>.</span>
          </span>
        </span>
      </h1>
    </section>
  );
}
