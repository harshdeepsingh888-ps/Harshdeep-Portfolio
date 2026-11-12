"use client";

import { Command } from "cmdk";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getLenis, scrollToTarget } from "@/lib/scroll";

import s from "./command-palette.module.css";

const sections = [
  { label: "Selected work", hash: "#work" },
  { label: "Stack graph", hash: "#stack" },
  { label: "About", hash: "#about" },
  { label: "Experience", hash: "#experience" },
  { label: "Contact", hash: "#contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("hs:palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("hs:palette", onOpen);
    };
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open]);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 1800);
    return () => window.clearTimeout(id);
  }, [toast]);

  const run = useCallback((action: () => void) => {
    setOpen(false);
    window.setTimeout(action, 60);
  }, []);

  const goToSection = (hash: string) =>
    run(() => (pathname === "/" ? scrollToTarget(hash) : router.push(`/${hash}`)));

  const openExternal = (url: string) => run(() => window.open(url, "_blank", "noopener"));

  const copyEmail = () =>
    run(async () => {
      try {
        await navigator.clipboard.writeText(site.email);
        setToast("Email copied");
      } catch {
        window.location.href = `mailto:${site.email}`;
      }
    });

  return (
    <>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command menu"
        overlayClassName={s.overlay}
        contentClassName={s.content}
        className={s.root}
      >
        <div className={s.head}>
          <Command.Input className={s.input} placeholder="Jump to a project, section or action…" />
          <kbd className="kbd">esc</kbd>
        </div>
        <Command.List className={s.list} data-lenis-prevent>
          <Command.Empty className={s.empty}>Nothing matches that.</Command.Empty>

          <Command.Group heading="Navigate" className={s.group}>
            <Command.Item className={s.item} onSelect={() => run(() => router.push("/"))}>
              Home <span className="mono mut">/</span>
            </Command.Item>
            {sections.map((section) => (
              <Command.Item key={section.hash} className={s.item} onSelect={() => goToSection(section.hash)}>
                {section.label} <span className="mono mut">{section.hash}</span>
              </Command.Item>
            ))}
            <Command.Item className={s.item} onSelect={() => run(() => router.push("/work"))}>
              All projects <span className="mono mut">/work</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Projects" className={s.group}>
            {projects.map((project) => (
              <Command.Item
                key={project.slug}
                value={`${project.name} ${project.kind} ${project.stack.join(" ")}`}
                className={s.item}
                onSelect={() =>
                  project.caseStudy
                    ? run(() => router.push(`/work/${project.slug}`))
                    : openExternal(project.links.live ?? project.links.code ?? site.links.github)
                }
              >
                {project.name}
                <span className="mono mut">{project.caseStudy ? "case study" : project.kind}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Actions" className={s.group}>
            <Command.Item className={s.item} onSelect={copyEmail}>
              Copy email address <span className="mono mut">{site.email}</span>
            </Command.Item>
            <Command.Item className={s.item} onSelect={() => openExternal(site.resume)}>
              Open résumé <span className="mono mut">pdf</span>
            </Command.Item>
            <Command.Item className={s.item} onSelect={() => openExternal(site.links.github)}>
              GitHub <span className="mono mut">↗</span>
            </Command.Item>
            <Command.Item className={s.item} onSelect={() => openExternal(site.links.linkedin)}>
              LinkedIn <span className="mono mut">↗</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>

      <div className={`mono ${s.toast}`} role="status" aria-live="polite" data-show={Boolean(toast)}>
        {toast}
      </div>
    </>
  );
}
