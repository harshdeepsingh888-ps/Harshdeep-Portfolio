import Link from "next/link";

import { site } from "@/content/site";

import s from "./footer.module.css";

export function Footer() {
  return (
    <footer className={`mono ${s.footer}`}>
      <span className="mut">© {new Date().getFullYear()} {site.name}</span>
      <nav aria-label="Footer" className={s.links}>
        <a className="link-line" href={site.links.github} target="_blank" rel="noopener">
          GitHub
        </a>
        <a className="link-line" href={site.links.linkedin} target="_blank" rel="noopener">
          LinkedIn
        </a>
        <a className="link-line" href={site.resume} target="_blank" rel="noopener">
          Résumé
        </a>
        <Link className="link-line" href="/work">
          All projects
        </Link>
      </nav>
      <span className="mut">Built with Next.js, three.js &amp; GSAP · New Delhi</span>
    </footer>
  );
}
