"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/** Fades/rises every `[data-reveal]` descendant as it scrolls into view. */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  y = 36,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ol" | "ul";
  y?: number;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y,
            opacity: 0,
            duration: 1.05,
            ease: "expo.out",
            clearProps: "transform,opacity",
            scrollTrigger: { trigger: el, start: "top 90%" },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={root as any} className={className}>
      {children}
    </Tag>
  );
}
