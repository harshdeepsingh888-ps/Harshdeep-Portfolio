"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import s from "./work.module.css";

gsap.registerPlugin(ScrollTrigger);

/** Pins the section and scrolls its children sideways on large screens; stacks them everywhere else. */
export function HorizontalReel({
  head,
  rail,
  children,
}: {
  head: React.ReactNode;
  rail?: React.ReactNode;
  children: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current;
        if (!el) return;
        const distance = () => el.scrollWidth - window.innerWidth;

        const reel = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            pin: true,
            scrub: 1,
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => gsap.set(bar.current, { scaleX: self.progress }),
          },
        });

        el.querySelectorAll<HTMLElement>("[data-panel]").forEach((panel) => {
          gsap.from(panel.querySelectorAll("[data-reveal]"), {
            y: 36,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.06,
            scrollTrigger: { trigger: panel, containerAnimation: reel, start: "left 85%" },
          });
        });
      });

      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        track.current?.querySelectorAll<HTMLElement>("[data-panel]").forEach((panel) => {
          gsap.from(panel, {
            y: 48,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: { trigger: panel, start: "top 88%" },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className={s.reel}>
      {rail}
      {head}
      <div ref={track} className={s.track}>
        {children}
      </div>
      <div className={s.progress} aria-hidden="true">
        <span ref={bar} />
      </div>
    </div>
  );
}
