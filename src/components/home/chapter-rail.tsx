import s from "./chapter-rail.module.css";

/**
 * The left-hand chapter rail carried over from the first portfolio:
 * a hairline down the page, an HS mark where each chapter begins, and the chapter's number and name.
 * Purely decorative — the same information is in each section's label — so it's hidden from assistive tech.
 */
export function ChapterRail({
  index,
  label,
  intro = false,
  solid = false,
}: {
  index: string;
  label: string;
  intro?: boolean;
  /** Mask content that slides underneath (the horizontal reel). */
  solid?: boolean;
}) {
  return (
    <aside className={s.rail} data-intro={intro} data-solid={solid} aria-hidden="true">
      {intro ? null : <span className={s.logo}>HS</span>}
      <span className={s.chapter}>
        {intro ? <span className={s.pill} /> : <span className={s.dot} />}
        {intro ? (
          <>
            <span className={`mono ${s.label}`}>{label}</span>
            <span className={s.line} />
          </>
        ) : (
          <>
            <span className={s.line} />
            <span className={`mono ${s.label}`}>{label}</span>
          </>
        )}
        <span className={`mono ${s.number}`}>{index}</span>
      </span>
    </aside>
  );
}
