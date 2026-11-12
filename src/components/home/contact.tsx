import { site } from "@/content/site";

import { ChapterRail } from "./chapter-rail";
import s from "./contact.module.css";
import { CopyEmail } from "./copy-email";
import { Magnetic } from "./magnetic";

export function Contact() {
  return (
    <section id="contact" className={s.contact} aria-labelledby="contact-title">
      <ChapterRail index="06" label="Contact" />
      <div className="section-label mono">
        <span>(06) Contact</span>
        <span className="mut">Email works best</span>
      </div>

      <h2 id="contact-title" className={s.title}>
        <span>Let’s</span>
        <span className={s.outline}>talk.</span>
      </h2>

      <div className={s.grid}>
        <div className={s.left}>
          <p className={`mono mut ${s.note}`}>
            <span className="status-dot" /> {site.status} · New Delhi (IST)
          </p>
          <a className={s.email} href={`mailto:${site.email}`} data-cursor="Write">
            {site.email}
          </a>
          <div className={s.actions}>
            <CopyEmail />
            <a className="btn" href={site.resume} target="_blank" rel="noopener">
              Résumé (PDF) ↗
            </a>
            <a className="btn" href={site.links.linkedin} target="_blank" rel="noopener">
              LinkedIn ↗
            </a>
            <a className="btn" href={site.links.github} target="_blank" rel="noopener">
              GitHub ↗
            </a>
          </div>
        </div>

        <Magnetic className={s.magnet} href={`mailto:${site.email}`}>
          Get in
          <br />
          touch ↗
        </Magnetic>
      </div>
    </section>
  );
}
