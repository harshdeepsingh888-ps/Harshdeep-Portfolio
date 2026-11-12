"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { site } from "@/content/site";
import { openPalette } from "@/lib/scroll";

import { Clock } from "./clock";
import s from "./header.module.css";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 160 && y > last);
      setScrolled(y > 80);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={s.header} data-hidden={hidden} data-scrolled={scrolled}>
      <Link href="/" className={s.logo} aria-label={`${site.name} — home`}>
        HS<sup>©</sup>
      </Link>

      <p className={`mono ${s.meta}`}>
        {site.role}
        <br />
        <span className="mut">{site.focus}</span>
      </p>

      <p className={`mono ${s.meta}`}>
        New Delhi, IN
        <br />
        <span className="mut">
          <Clock /> IST
        </span>
      </p>

      <nav aria-label="Primary" className={`mono ${s.nav}`}>
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="link-line">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className={s.actions}>
        <button type="button" className={`mono ${s.cmd}`} onClick={openPalette} aria-label="Open command menu">
          <span>Menu</span>
          <kbd className="kbd">⌘K</kbd>
        </button>
        <a className={`mono ${s.cv}`} href={site.resume} target="_blank" rel="noopener">
          Résumé ↗
        </a>
      </div>
    </header>
  );
}
