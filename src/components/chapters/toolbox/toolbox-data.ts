import type { LucideIcon } from "lucide-react";

import {
  Bot,
  Braces,
  CloudCog,
  CodeXml,
  ServerCog,
} from "lucide-react";

export type ToolboxAccent =
  | "orange"
  | "violet"
  | "blue"
  | "emerald"
  | "gold";

export type ToolboxCategory = {
  id: string;
  title: string;
  description: string;
  focusAreas: string[];
  technologies: string[];
  icon: LucideIcon;
  accent: ToolboxAccent;
};

export const toolboxCategories: ToolboxCategory[] = [
  {
    id: "backend",
    title: "Backend Systems",
    description:
      "Building reliable server-side systems that handle authentication, traffic, business logic, and persistent data.",
    focusAreas: [
      "Production APIs",
      "Authentication",
      "API Gateways",
      "Data Systems",
    ],
    technologies: [
      "Node.js",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "REST APIs",
    ],
    icon: ServerCog,
    accent: "orange",
  },
  {
    id: "ai",
    title: "AI Systems",
    description:
      "Combining language, speech, and tool execution to create intelligent software that can understand and act.",
    focusAreas: [
      "LLM Reasoning",
      "Speech Processing",
      "Tool Calling",
      "Automation",
    ],
    technologies: [
      "Google Gemini",
      "Whisper",
      "Edge TTS",
      "Tool Calling",
      "Prompt Engineering",
    ],
    icon: Bot,
    accent: "violet",
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Creating responsive product interfaces with clear information hierarchy, reliable data flow, and thoughtful interactions.",
    focusAreas: [
      "Responsive UI",
      "Server State",
      "Performance",
      "Design Systems",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Query",
    ],
    icon: CodeXml,
    accent: "blue",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description:
      "Supporting the complete software lifecycle through deployment, containerization, testing, and version-controlled workflows.",
    focusAreas: [
      "Containerization",
      "Deployment",
      "API Testing",
      "Git Workflows",
    ],
    technologies: [
      "Docker",
      "Git",
      "GitHub",
      "Render",
      "Vercel",
      "Postman",
    ],
    icon: CloudCog,
    accent: "emerald",
  },
  {
    id: "languages",
    title: "Programming Languages",
    description:
      "Using the right language for each layer—from algorithmic problem solving to typed product development and backend systems.",
    focusAreas: [
      "Problem Solving",
      "Type Safety",
      "Scripting",
      "Data Queries",
    ],
    technologies: [
      "C++",
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
    ],
    icon: Braces,
    accent: "gold",
  },
];