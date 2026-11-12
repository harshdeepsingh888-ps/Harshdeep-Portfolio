import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { highlight } from "sugar-high";

import { BrowserFrame } from "@/components/shared/browser-frame";

import s from "./mdx.module.css";

function Code({ children, className }: { children?: React.ReactNode; className?: string }) {
  // Inline code stays plain; fenced blocks arrive with a language class and get highlighted.
  if (!className || typeof children !== "string") return <code className={s.inline}>{children}</code>;
  return <code className={s.block} dangerouslySetInnerHTML={{ __html: highlight(children.trim()) }} />;
}

export function Figure({
  src,
  alt,
  caption,
  url,
  width = 1600,
  height = 1000,
}: {
  src: string;
  alt: string;
  caption?: string;
  url?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className={s.figure}>
      <BrowserFrame url={url}>
        <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1100px) 1000px, 100vw" className={s.image} />
      </BrowserFrame>
      {caption ? <figcaption className="mono mut">{caption}</figcaption> : null}
    </figure>
  );
}

export function Video({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure className={s.figure}>
      <BrowserFrame url="demo.mp4">
        <video className={s.video} src={src} autoPlay muted loop playsInline preload="metadata" />
      </BrowserFrame>
      {caption ? <figcaption className="mono mut">{caption}</figcaption> : null}
    </figure>
  );
}

export function Callout({ label = "Trade-off", children }: { label?: string; children: React.ReactNode }) {
  return (
    <aside className={s.callout}>
      <span className="mono acc">{label}</span>
      <div>{children}</div>
    </aside>
  );
}

const components: MDXComponents = {
  h2: ({ children }) => <h2 className={s.h2}>{children}</h2>,
  h3: ({ children }) => <h3 className={s.h3}>{children}</h3>,
  p: ({ children }) => <p className={s.p}>{children}</p>,
  ul: ({ children }) => <ul className={s.ul}>{children}</ul>,
  ol: ({ children }) => <ol className={s.ol}>{children}</ol>,
  a: ({ href, children }) => (
    <a href={href} className={s.a} {...(href?.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
      {children}
    </a>
  ),
  pre: ({ children }) => <pre className={s.pre}>{children}</pre>,
  code: Code,
  blockquote: ({ children }) => <blockquote className={s.quote}>{children}</blockquote>,
  Figure,
  Video,
  Callout,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
