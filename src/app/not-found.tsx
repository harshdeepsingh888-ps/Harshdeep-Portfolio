import Link from "next/link";

import s from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={s.page}>
      <p className="mono mut">GET {"<this page>"} → 404</p>
      <h1 className={s.title}>
        Lost the <span className="acc">signal.</span>
      </h1>
      <p className={s.copy}>That page doesn’t exist — or it moved when the site was rebuilt.</p>
      <div className={s.actions}>
        <Link className="btn" data-variant="solid" href="/">
          Back home
        </Link>
        <Link className="btn" href="/work">
          All projects
        </Link>
      </div>
    </main>
  );
}
