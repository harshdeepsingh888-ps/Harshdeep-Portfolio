"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Status } from "@/components/shared/status";
import { projects, type Project } from "@/content/projects";
import { prefersReducedMotion } from "@/lib/scroll";

import s from "./node-graph.module.css";

const SERVICES = ["devforge", "officer-prep", "syncroom", "gatepulse", "ai-voice-agent", "ecosort"];

type Kind = "in" | "core" | "svc" | "dep";
type GraphNode = {
  id: string;
  label: string;
  sub: string;
  kind: Kind;
  fx: number;
  fy: number;
  r: number;
  phase: number;
  project?: Project;
  skill?: string;
};
type Edge = [string, string];
type Packet = { route: string[]; seg: number; t: number; speed: number; back: boolean; trail: { x: number; y: number }[] };

function buildGraph() {
  const services = SERVICES.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean) as Project[];
  const n = services.length;

  const serviceNodes: GraphNode[] = services.map((project, i) => ({
    id: `svc:${project.slug}`,
    label: project.slug,
    sub: project.kind.toLowerCase(),
    kind: "svc",
    fx: 0.47 + 0.09 * Math.sin((Math.PI * i) / (n - 1)),
    fy: 0.14 + (0.76 * i) / (n - 1),
    r: 7,
    phase: i * 1.3,
    project,
  }));

  // Order dependencies by the average height of the services that use them, to keep edges from crossing.
  const used = new Map<string, number[]>();
  serviceNodes.forEach((node) =>
    node.project!.skills.forEach((skill) => used.set(skill, [...(used.get(skill) ?? []), node.fy])),
  );
  const skills = [...used.entries()]
    .map(([skill, ys]) => ({ skill, y: ys.reduce((a, b) => a + b, 0) / ys.length }))
    .sort((a, b) => a.y - b.y);

  const depNodes: GraphNode[] = skills.map(({ skill }, i) => ({
    id: `dep:${skill}`,
    label: skill.toLowerCase(),
    sub: "",
    kind: "dep",
    fx: 0.84,
    fy: 0.12 + (0.83 * i) / Math.max(1, skills.length - 1),
    r: 4,
    phase: i * 0.7 + 3,
    skill,
  }));

  const nodes: GraphNode[] = [
    { id: "you", label: "you", sub: "visitor · ingress", kind: "in", fx: 0.05, fy: 0.4, r: 5, phase: 0 },
    { id: "core", label: "harshdeep", sub: "backend · ai", kind: "core", fx: 0.22, fy: 0.4, r: 11, phase: 0.6 },
    ...serviceNodes,
    ...depNodes,
  ];
  const edges: Edge[] = [
    ["you", "core"],
    ...serviceNodes.map((node) => ["core", node.id] as Edge),
    ...serviceNodes.flatMap((node) => node.project!.skills.map((skill) => [node.id, `dep:${skill}`] as Edge)),
  ];
  return { nodes, edges, serviceNodes };
}

const graph = buildGraph();

export function NodeGraph() {
  const router = useRouter();
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const inspector = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef<GraphNode | null>(null);
  const [hovered, setHovered] = useState<GraphNode | null>(null);

  useEffect(() => {
    const el = canvas.current;
    const box = wrap.current;
    const card = inspector.current;
    if (!el || !box || !card) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;

    const reduce = prefersReducedMotion();
    const mono = getComputedStyle(document.body).getPropertyValue("--font-jetbrains").trim() || "monospace";
    const byId = new Map(graph.nodes.map((node) => [node.id, node]));
    const packets: Packet[] = [];
    const mouse = { x: -999, y: -999 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let inView = false;

    const resize = () => {
      const rect = box.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      width = rect.width;
      height = rect.height;
      el.width = width * dpr;
      el.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const pos = (node: GraphNode, t: number) => ({
      x: node.fx * width + (reduce ? 0 : Math.sin(t * 0.6 + node.phase) * 5),
      y: node.fy * height + (reduce ? 0 : Math.cos(t * 0.5 + node.phase) * 6),
    });

    const bezier = (a: { x: number; y: number }, b: { x: number; y: number }, u: number) => {
      const mx = (a.x + b.x) / 2;
      const v = 1 - u;
      return {
        x: v * v * v * a.x + 3 * v * v * u * mx + 3 * v * u * u * mx + u * u * u * b.x,
        y: v * v * v * a.y + 3 * v * v * u * a.y + 3 * v * u * u * b.y + u * u * u * b.y,
      };
    };

    const spawn = () => {
      const focus = hoveredRef.current;
      let pool = graph.serviceNodes;
      if (focus?.kind === "svc") pool = [focus];
      else if (focus?.kind === "dep") pool = graph.serviceNodes.filter((node) => node.project!.skills.includes(focus.skill!));
      const service = Math.random() < 0.75 ? pool[Math.floor(Math.random() * pool.length)] : graph.serviceNodes[Math.floor(Math.random() * graph.serviceNodes.length)];
      const deps = service.project!.skills;
      const dep = focus?.kind === "dep" && deps.includes(focus.skill!) ? focus.skill! : deps[Math.floor(Math.random() * deps.length)];
      packets.push({ route: ["you", "core", service.id, `dep:${dep}`], seg: 0, t: 0, speed: 0.014 + Math.random() * 0.01, back: false, trail: [] });
    };

    const focusSet = (node: GraphNode | null) => {
      if (!node) return null;
      const set = new Set<string>(["you", "core", node.id]);
      if (node.kind === "svc") node.project!.skills.forEach((skill) => set.add(`dep:${skill}`));
      if (node.kind === "dep") graph.serviceNodes.filter((sn) => sn.project!.skills.includes(node.skill!)).forEach((sn) => set.add(sn.id));
      if (node.kind === "core") graph.nodes.forEach((n) => set.add(n.id));
      return set;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const P = new Map(graph.nodes.map((node) => [node.id, pos(node, t)]));

      // hit-test
      let hit: GraphNode | null = null;
      let best = 30;
      graph.nodes.forEach((node) => {
        if (node.kind === "in") return;
        const p = P.get(node.id)!;
        const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (d < best) {
          best = d;
          hit = node;
        }
      });
      if (hit !== hoveredRef.current) {
        hoveredRef.current = hit;
        setHovered(hit);
        const cursorNode = hit as GraphNode | null;
        if (cursorNode?.kind === "svc") box.dataset.cursor = "Open";
        else delete box.dataset.cursor;
      }
      const current = hoveredRef.current as GraphNode | null;
      const focus = focusSet(current);

      // edges
      graph.edges.forEach(([a, b]) => {
        const pa = P.get(a)!;
        const pb = P.get(b)!;
        const lit = focus ? focus.has(a) && focus.has(b) : false;
        const mx = (pa.x + pb.x) / 2;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.bezierCurveTo(mx, pa.y, mx, pb.y, pb.x, pb.y);
        ctx.setLineDash(byId.get(b)!.kind === "dep" ? [3, 5] : []);
        ctx.strokeStyle = lit ? "rgba(255,91,31,0.6)" : focus ? "rgba(242,239,234,0.04)" : "rgba(242,239,234,0.11)";
        ctx.lineWidth = lit ? 1.4 : 1;
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const k = packets[i];
        const from = k.back ? k.route[k.route.length - 1 - k.seg] : k.route[k.seg];
        const to = k.back ? k.route[k.route.length - 2 - k.seg] : k.route[k.seg + 1];
        const p = bezier(P.get(from)!, P.get(to)!, k.t);
        k.trail.push(p);
        if (k.trail.length > 14) k.trail.shift();
        const rgb = k.back ? "61,220,151" : "255,91,31";
        const dim = focus ? !(focus.has(from) && focus.has(to)) : false;
        k.trail.forEach((q, j) => {
          ctx.beginPath();
          ctx.arc(q.x, q.y, 0.3 + (j / k.trail.length) * 1.7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb},${(j / k.trail.length) * (dim ? 0.08 : 0.5)})`;
          ctx.fill();
        });
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${dim ? 0.15 : 1})`;
        ctx.shadowColor = `rgb(${rgb})`;
        ctx.shadowBlur = dim ? 0 : 12;
        ctx.fill();
        ctx.shadowBlur = 0;
        k.t += k.speed;
        if (k.t >= 1) {
          k.t = 0;
          k.seg += 1;
          if (k.seg >= k.route.length - 1) {
            if (!k.back) {
              k.back = true;
              k.seg = 0;
            } else packets.splice(i, 1);
          }
        }
      }

      // nodes + labels
      graph.nodes.forEach((node) => {
        const p = P.get(node.id)!;
        const isHover = current === node;
        ctx.globalAlpha = focus && !focus.has(node.id) ? 0.22 : 1;

        if (node.kind === "core") {
          const pulse = (t * 0.6) % 1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, node.r + pulse * 36, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255,91,31,${0.5 * (1 - pulse)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(p.x, p.y, node.r + 8, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(255,91,31,0.35)";
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(p.x, p.y, node.r, 0, Math.PI * 2);
          ctx.fillStyle = "#ff5b1f";
          ctx.shadowColor = "#ff5b1f";
          ctx.shadowBlur = 32;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else if (node.kind === "svc") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, node.r + (isHover ? 11 : 6), 0, Math.PI * 2);
          ctx.strokeStyle = isHover ? "#ff5b1f" : "rgba(242,239,234,0.3)";
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(p.x, p.y, node.r, 0, Math.PI * 2);
          ctx.fillStyle = isHover ? "#ff5b1f" : "#f2efea";
          ctx.fill();
          const status = node.project!.status;
          ctx.beginPath();
          ctx.arc(p.x + node.r + 4, p.y - node.r - 4, 3, 0, Math.PI * 2);
          ctx.fillStyle = status === "live" ? "#3ddc97" : status === "winner" || status === "internship" ? "#ff7a45" : "#8aa9f7";
          ctx.fill();
        } else if (node.kind === "dep") {
          ctx.strokeStyle = isHover ? "#ff5b1f" : "#8a8680";
          ctx.lineWidth = 1;
          ctx.strokeRect(p.x - 4, p.y - 4, 8, 8);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, node.r, 0, Math.PI * 2);
          ctx.fillStyle = "#3ddc97";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, node.r + 6 + Math.sin(t * 3) * 2, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(61,220,151,0.4)";
          ctx.stroke();
        }

        ctx.textBaseline = "middle";
        const below = node.kind === "in" || node.kind === "core";
        const lx = below ? p.x - (node.kind === "core" ? 30 : 8) : p.x + node.r + 16;
        const ly = below ? p.y + node.r + 28 : p.y;
        ctx.font = `${node.kind === "core" ? 600 : 500} ${node.kind === "dep" ? 11 : 13}px ${mono}`;
        ctx.fillStyle = node.kind === "dep" ? (isHover ? "#f2efea" : "#8a8680") : "#f2efea";
        ctx.fillText(node.label, lx, node.sub ? ly - 7 : ly);
        if (node.sub) {
          ctx.font = `400 11px ${mono}`;
          ctx.fillStyle = "#8a8680";
          ctx.fillText(node.sub, lx, ly + 9);
        }
        ctx.globalAlpha = 1;
      });

    };

    let start = performance.now();
    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      if (inView) draw((now - start) / 1000);
    };

    const onMove = (event: PointerEvent) => {
      const rect = box.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      if (reduce) draw(0);
    };
    const onLeave = () => {
      mouse.x = mouse.y = -999;
      if (reduce) draw(0);
    };
    const onClick = () => {
      const node = hoveredRef.current;
      if (node?.kind !== "svc") return;
      const project = node.project!;
      if (project.caseStudy) router.push(`/work/${project.slug}`);
      else window.open(project.links.live ?? project.links.code, "_blank", "noopener");
    };

    resize();
    const observer = new ResizeObserver(() => {
      resize();
      if (reduce) draw(0);
    });
    observer.observe(box);
    const visibility = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    visibility.observe(box);
    box.addEventListener("pointermove", onMove);
    box.addEventListener("pointerleave", onLeave);
    box.addEventListener("click", onClick);

    let spawner = 0;
    if (reduce) {
      draw(0);
    } else {
      start = performance.now();
      frame = requestAnimationFrame(loop);
      spawner = window.setInterval(() => inView && spawn(), 320);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(spawner);
      observer.disconnect();
      visibility.disconnect();
      box.removeEventListener("pointermove", onMove);
      box.removeEventListener("pointerleave", onLeave);
      box.removeEventListener("click", onClick);
    };
  }, [router]);

  const project = hovered?.kind === "svc" ? hovered.project : undefined;
  const usedBy =
    hovered?.kind === "dep" ? graph.serviceNodes.filter((n) => n.project!.skills.includes(hovered.skill!)) : [];

  return (
    <div className={s.root}>
      <div ref={wrap} className={`${s.graph} blueprint`}>
        <canvas ref={canvas} className={s.canvas} aria-hidden="true" />

        <div ref={inspector} className={s.inspector} data-on={Boolean(hovered && hovered.kind !== "in")} aria-hidden="true">
          {project ? (
            <>
              <div className={`mono ${s.inspHead}`}>
                <span className="mut">service/{project.slug}</span>
                <Status status={project.status} />
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <dl className={s.inspMetrics}>
                {project.metrics.slice(0, 3).map((metric) => (
                  <div key={metric.label}>
                    <dt className="mono mut">{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl>
              <p className={`mono ${s.inspFoot}`}>
                {project.caseStudy ? "click to open the case study →" : "click to open ↗"}
              </p>
            </>
          ) : hovered?.kind === "dep" ? (
            <>
              <div className={`mono ${s.inspHead}`}>
                <span className="mut">dependency</span>
              </div>
              <h3>{hovered.skill}</h3>
              <p>
                Shipped in {usedBy.length} of these services: {usedBy.map((n) => n.project!.name).join(", ")}.
              </p>
            </>
          ) : hovered?.kind === "core" ? (
            <>
              <div className={`mono ${s.inspHead}`}>
                <span className="mut">core</span>
                <span className="mono pill" data-tone="live">
                  open to internships
                </span>
              </div>
              <h3>Harshdeep Singh</h3>
              <p>Backend and AI engineer. Every service on this map is a real project — hover one to inspect it.</p>
            </>
          ) : null}
        </div>
      </div>

    </div>
  );
}
