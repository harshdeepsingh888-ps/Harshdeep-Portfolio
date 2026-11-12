"use client";

import { gsap } from "gsap";
import { useRef } from "react";

export function Magnetic({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    gsap.to(el, {
      x: (event.clientX - rect.left - rect.width / 2) * 0.35,
      y: (event.clientY - rect.top - rect.height / 2) * 0.35,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    if (ref.current) gsap.to(ref.current, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.35)" });
  };

  return (
    <a ref={ref} href={href} className={className} onPointerMove={onMove} onPointerLeave={onLeave} data-cursor=" ">
      <span>{children}</span>
    </a>
  );
}
