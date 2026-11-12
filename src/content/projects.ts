export type ProjectStatus = "live" | "source" | "in progress" | "internship" | "winner";

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  year: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  metrics: Metric[];
  stack: string[];
  /** Skills this project is proof of — drives the stack graph. */
  skills: string[];
  links: { live?: string; code?: string };
  /** `label` is shown in the browser-frame bar when the project has no public URL. */
  cover?: { src: string; alt: string; width: number; height: number; label?: string };
  featured?: boolean;
  caseStudy?: boolean;
  role?: string;
  timeline?: string;
  context?: string;
};

const gh = (repo: string) => `https://github.com/harshdeepsingh888-ps/${repo}`;

export const projects: Project[] = [
  {
    slug: "devforge",
    name: "Devforge",
    kind: "Developer platform",
    year: "2026",
    summary: "A developer operating system — work items, ADRs, commits and deploys in one model.",
    description:
      "A Fastify + Prisma monorepo that models the software lifecycle: workspaces, projects, work items, architecture decisions, git commits, CI/CD runs and deployments.",
    status: "in progress",
    metrics: [
      { value: "216", label: "tests" },
      { value: "63", label: "API routes" },
      { value: "27", label: "data models" },
    ],
    stack: ["TypeScript", "Fastify", "Prisma", "PostgreSQL", "React", "Docker", "Terraform"],
    skills: ["TypeScript", "Node.js", "PostgreSQL", "Prisma", "React", "Testing", "Docker", "AWS"],
    links: { code: gh("Devforge") },
    cover: {
      src: "/images/projects/devforge/inspector.webp",
      alt: "Devforge work stream board with the work-item inspector open",
      width: 1600,
      height: 1000,
      label: "devforge · local build",
    },
    featured: true,
    caseStudy: true,
    role: "Solo — design, API, web, infra",
    timeline: "Jul 2026 — ongoing · 67 commits",
  },
  {
    slug: "officer-prep",
    name: "Officer Prep",
    kind: "Offline PWA",
    year: "2026",
    summary: "An installable study app for India’s officer exams — with a test suite that gates every deploy.",
    description:
      "Planner, practice tests, official past papers on an OMR sheet, spaced repetition and SSB psych tests for CDS, AFCAT, CAPF, Coast Guard and UPSC. Works offline; data never leaves the browser.",
    status: "live",
    metrics: [
      { value: "139", label: "unit + e2e tests" },
      { value: "61", label: "question generators" },
      { value: "CI", label: "tests gate deploys" },
    ],
    stack: ["React", "TypeScript", "IndexedDB", "Vitest", "Playwright", "GitHub Actions"],
    skills: ["TypeScript", "React", "Testing", "CI/CD"],
    links: { live: "https://harshdeepsingh888-ps.github.io/officer-prep/", code: gh("officer-prep") },
    cover: { src: "/images/projects/officer-prep/cover.webp", alt: "Officer Prep dashboard", width: 1600, height: 1000 },
    featured: true,
    caseStudy: true,
    role: "Solo — product, content engine, testing",
    timeline: "Oct — Nov 2026 · 19 commits",
  },
  {
    slug: "syncroom",
    name: "SyncRoom",
    kind: "Real-time",
    year: "2026",
    summary: "A watch party where the server owns playback — everyone stays in lockstep.",
    description:
      "Clients send play, pause and seek commands; the server validates them and broadcasts playback snapshots over Socket.IO. Late joiners sync instantly, drift is corrected client-side.",
    status: "live",
    metrics: [
      { value: "20", label: "socket events" },
      { value: "0.75s", label: "drift threshold" },
      { value: "3", label: "room roles" },
    ],
    stack: ["React 19", "Express 5", "Socket.IO", "Zod", "TypeScript"],
    skills: ["TypeScript", "Node.js", "React", "Real-time"],
    links: { live: "https://syncroom-gamma.vercel.app", code: gh("syncroom") },
    cover: { src: "/images/projects/syncroom/landing-screen.webp", alt: "SyncRoom landing page", width: 1901, height: 905 },
    featured: true,
    caseStudy: true,
    role: "Solo — protocol, server, client",
    timeline: "Jul — Aug 2026 · 24 commits",
  },
  {
    slug: "gatepulse",
    name: "GatePulse",
    kind: "API gateway",
    year: "2026",
    summary: "API keys, token-bucket rate limiting and traffic analytics in front of your services.",
    description:
      "An Express gateway plus admin dashboard: issues SHA-256-hashed API keys, rate-limits each key with a token bucket, logs every request and charts traffic, latency and errors.",
    status: "live",
    metrics: [
      { value: "17", label: "route handlers" },
      { value: "6", label: "analytics views" },
      { value: "3", label: "data models" },
    ],
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "React", "Docker"],
    skills: ["Node.js", "PostgreSQL", "Prisma", "React", "Docker", "Security"],
    links: { live: "https://gate-pulse.vercel.app", code: gh("GatePulse") },
    cover: { src: "/images/projects/gatepulse/dashboard-screen.webp", alt: "GatePulse analytics dashboard", width: 1899, height: 908 },
    featured: true,
    caseStudy: true,
    role: "Solo — gateway, dashboard, deployment",
    timeline: "Jul 2026 · 38 commits",
  },
  {
    slug: "ai-voice-agent",
    name: "AI Voice Agent",
    kind: "AI agent",
    year: "2026",
    summary: "Speak a request, it acts on it — Whisper, Gemini tool planning and Edge TTS.",
    description:
      "A voice pipeline built at Zeber: voice activity detection, Whisper transcription, Gemini picks and validates a tool call, a registry dispatches it, and Edge TTS answers back.",
    status: "internship",
    metrics: [
      { value: "15", label: "tests" },
      { value: "5", label: "plug-in tools" },
      { value: "4", label: "pipeline stages" },
    ],
    stack: ["Python", "FastAPI", "Gemini", "Whisper", "Edge TTS", "WebRTC VAD"],
    skills: ["Python", "FastAPI", "LLMs", "Testing"],
    links: { code: gh("AI_VOICE_AGENT") },
    cover: {
      src: "/images/projects/ai-voice-agent/system-architecture.webp",
      alt: "AI Voice Agent pipeline architecture",
      width: 1672,
      height: 941,
      label: "ai-voice-agent/architecture",
    },
    featured: true,
    caseStudy: true,
    role: "Sole engineer · Zeber internship",
    timeline: "Jun — Jul 2026 · 27 commits",
    context: "Built during the Zeber internship.",
  },
  {
    slug: "ecosort",
    name: "EcoSort",
    kind: "AI · hackathon winner",
    year: "2026",
    summary: "1st place at the TCS AI Hackathon 2026 — photograph a piece of waste, learn exactly how to dispose of it.",
    description:
      "An AI waste-intelligence platform built by a team of five: capture or upload a photo and it reports the waste category, material, biodegradability, contamination and the right disposal stream, with reduce–reuse–recycle options.",
    status: "winner",
    metrics: [
      { value: "1st", label: "of ~130 participants" },
      { value: "5", label: "person team" },
    ],
    stack: ["Next.js", "TypeScript", "Gemini"],
    skills: ["TypeScript", "React", "LLMs"],
    links: { code: gh("EcoSort") },
    context: "Team project — TCS AI Hackathon 2026 (Tech Day).",
  },
  {
    slug: "dsa-metro",
    name: "DSA Metro",
    kind: "Learning platform",
    year: "2026",
    summary: "Data structures as a metro map — 18 stations from Big-O to dynamic programming.",
    description:
      "A statically exported Next.js site. Every station has a story, an interactive demo, C++/Python code, a quiz and practice problems.",
    status: "live",
    metrics: [
      { value: "18", label: "interactive demos" },
      { value: "12", label: "practice drills" },
    ],
    stack: ["Next.js", "React", "TypeScript", "GitHub Actions"],
    skills: ["TypeScript", "React", "CI/CD"],
    links: { live: "https://harshdeepsingh888-ps.github.io/dsa-metro/", code: gh("dsa-metro") },
    cover: { src: "/images/projects/dsa-metro/cover.webp", alt: "DSA Metro route map", width: 1600, height: 1000 },
  },
  {
    slug: "rutwater",
    name: "Rutwater",
    kind: "Browser game",
    year: "2026",
    summary: "An off-road driving game in the browser — 4 maps, 8 vehicles, one HTML file.",
    description: "three.js terrain, vehicles and expeditions, with progress saved locally.",
    status: "live",
    metrics: [
      { value: "4", label: "maps" },
      { value: "8", label: "vehicles" },
    ],
    stack: ["JavaScript", "three.js"],
    skills: ["three.js"],
    links: { live: "https://harshdeepsingh888-ps.github.io/rutwater/", code: gh("rutwater") },
    cover: { src: "/images/projects/rutwater/cover.webp", alt: "Rutwater vehicle select screen", width: 1600, height: 1000 },
  },
  {
    slug: "needle-run",
    name: "Needle Run",
    kind: "Browser game",
    year: "2026",
    summary: "A deep-space arcade game: thread a rocket through spinning gates.",
    description: "Two modes, five rocket skins, power-ups and a daily run — three.js in a single file.",
    status: "live",
    metrics: [
      { value: "2", label: "modes" },
      { value: "5", label: "skins" },
    ],
    stack: ["JavaScript", "three.js", "Web Audio"],
    skills: ["three.js"],
    links: { live: "https://harshdeepsingh888-ps.github.io/needle-run/", code: gh("needle-run") },
    cover: { src: "/images/projects/needle-run/cover.webp", alt: "Needle Run title screen", width: 1600, height: 1000 },
  },
  {
    slug: "agenttrace",
    name: "AgentTrace",
    kind: "Execution engine",
    year: "2026",
    summary: "A DAG execution engine that re-runs only the nodes a change affects.",
    description:
      "Validates and traverses a node graph, runs registered node runners, persists runs to PostgreSQL and reuses cached results for unaffected nodes.",
    status: "in progress",
    metrics: [{ value: "83", label: "tests" }],
    stack: ["TypeScript", "Express 5", "PostgreSQL"],
    skills: ["TypeScript", "Node.js", "PostgreSQL", "Testing"],
    links: { code: gh("AGENTTRACE") },
  },
  {
    slug: "boutique-commerce",
    name: "Boutique Commerce",
    kind: "E-commerce platform",
    year: "2026",
    summary: "A white-label store and admin for small fashion boutiques, re-branded from one config file.",
    description:
      "React storefront and admin dashboard on an Express/MongoDB API with JWT cookies, Zod validation and server-side price checks. Built during the IncodeVision internship.",
    status: "source",
    metrics: [
      { value: "29", label: "endpoints" },
      { value: "18", label: "tests" },
    ],
    stack: ["React", "Express", "MongoDB", "TypeScript"],
    skills: ["TypeScript", "Node.js", "React", "Testing"],
    links: { code: gh("Boutique-Commerce-Platform") },
  },
  {
    slug: "ai-pipeline",
    name: "AI Pipeline",
    kind: "Engineering assignment",
    year: "2026",
    summary: "A four-agent pipeline instrumented for token usage, fault injection and retries.",
    description:
      "Measures prompt tokens with tiktoken before and after four context-reduction techniques, with CI, Docker and typed validation.",
    status: "source",
    metrics: [{ value: "15", label: "tests" }],
    stack: ["Python", "FastAPI", "tiktoken", "Docker", "GitHub Actions"],
    skills: ["Python", "FastAPI", "CI/CD", "Docker"],
    links: { code: gh("ai-pipeline-engineering-assignment") },
  },
  {
    slug: "pincode-explorer",
    name: "Pincode Explorer",
    kind: "Full-stack assignment",
    year: "2026",
    summary: "Bangalore pincode lookup with a local fallback when the postal API fails.",
    description: "Express API with injectable providers and a React client, covered by Vitest and Supertest.",
    status: "source",
    metrics: [{ value: "13", label: "tests" }],
    stack: ["TypeScript", "Express", "React", "Vitest"],
    skills: ["TypeScript", "Node.js", "Testing"],
    links: { code: gh("Bangalore-Pincode-Explorer") },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const caseStudies = projects.filter((p) => p.caseStudy);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const skillOrder = [
  "TypeScript",
  "Python",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "React",
  "Real-time",
  "LLMs",
  "Testing",
  "CI/CD",
  "Docker",
  "AWS",
  "Security",
  "three.js",
];
