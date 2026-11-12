export const site = {
  name: "Harshdeep Singh",
  shortName: "HS",
  url: "https://harshdeep-portfolio-tau.vercel.app",
  role: "Software engineer",
  focus: "Backend & AI systems",
  location: "New Delhi, India",
  timezone: "Asia/Kolkata",
  status: "Open to SWE internships",
  description:
    "Harshdeep Singh — backend and AI engineer. APIs, real-time systems and voice agents, built with tests. Technical intern at Neubitat, B.Tech IT at BVCOE.",
  email: "harshdeepsingh87179@gmail.com",
  resume: "/Harshdeep_Singh_Resume.pdf",
  links: {
    github: "https://github.com/harshdeepsingh888-ps",
    linkedin: "https://www.linkedin.com/in/harshdeep-singh-073b02320/",
  },
} as const;

export const hero = {
  lede: "I build backend systems and AI agents — APIs, real-time apps and voice pipelines, shipped with tests.",
  now: "Currently a technical intern at Neubitat; before that, the sole engineer on Zeber’s AI voice agent.",
  facts: [
    { k: "now", v: "Technical intern @ Neubitat" },
    { k: "study", v: "B.Tech IT · BVCOE ’28" },
    { k: "won", v: "1st · TCS AI Hackathon ’26" },
  ],
};

/** Every number here is counted from the public repositories. */
export const stats = [
  { value: 15, suffix: "", label: "Projects shipped in 2026" },
  { value: 500, suffix: "+", label: "Tests written across them" },
  { value: 8.47, decimals: 2, suffix: "", label: "CGPA · B.Tech IT" },
  { value: 270, suffix: "+", label: "GitHub contributions this year" },
];

export const about = {
  statement:
    "I’m an IT undergrad who likes the layer most people skip — auth, rate limits, state machines, the path between a request and a result. I’m interning at Neubitat; before that I was the sole engineer on an AI voice agent at Zeber, and with four teammates I took 1st place at the TCS AI Hackathon. On my own time I’ve built a developer platform with 216 tests, an exam-prep app you can install today, and a few browser games for fun.",
  highlight: ["skip", "sole", "engineer", "1st", "place", "216", "tests,", "install", "today,"],
};

export type Commit = {
  date: string;
  title: string;
  ref?: { label: string; tone: "head" | "tag" };
  body: string;
};

export const changelog: Commit[] = [
  {
    date: "Aug 2026 —",
    title: "feat: technical intern (software engineering) at Neubitat",
    ref: { label: "HEAD → now", tone: "head" },
    body: "Building production Next.js sites across four products, the Learning Paths mobile app in React Native (Expo), features for the internal intern portal, and an AI-assisted content pipeline built on Claude.",
  },
  {
    date: "Jun — Aug 2026",
    title: "feat: software engineering intern at Zeber",
    body: "AI automation. Sole engineer on the voice agent — speech recognition, LLM tool planning and speech synthesis as separate FastAPI services — from architecture to deployment.",
  },
  {
    date: "2026",
    title: "feat: win 1st place at the TCS AI Hackathon",
    ref: { label: "1st of ~130", tone: "tag" },
    body: "EcoSort, built with a team of five at TCS Tech Day: photograph a piece of waste and get its category, material, biodegradability and the right disposal stream.",
  },
  {
    date: "Jul — Aug 2026",
    title: "feat: full-stack development intern at IncodeVision",
    body: "Built Atelier Commerce, a white-label boutique store and admin dashboard — React, Express and MongoDB, JWT in HttpOnly cookies, 29 API endpoints and 18 tests.",
  },
  {
    date: "2026",
    title: "feat: ship Devforge, Officer Prep, SyncRoom + 12 more",
    body: "A Fastify/Prisma developer platform, an offline exam-prep PWA with CI-gated deploys, a server-authoritative watch party, and browser games built on three.js.",
  },
  {
    date: "During B.Tech",
    title: "chore: promoted to Sergeant, National Cadet Corps",
    ref: { label: "leadership", tone: "tag" },
    body: "Lance Corporal to Corporal to Sergeant over three years. Head of Content Creation for the NCC MAIT social media team.",
  },
  {
    date: "Class of ’28",
    title: "init: B.Tech in Information Technology — BVCOE, GGSIPU",
    body: "CGPA 8.47. Core coursework in data structures, operating systems, DBMS and computer networks.",
  },
];
