import s from "./browser-frame.module.css";

export function BrowserFrame({ url, children, className }: { url?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`${s.frame} ${className ?? ""}`}>
      <div className={`mono ${s.bar}`} aria-hidden="true">
        <i />
        <i />
        <i />
        {url ? <span>{url}</span> : null}
      </div>
      <div className={s.view}>{children}</div>
    </div>
  );
}

export const hostOf = (url?: string) => (url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : undefined);
