export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  type: string;
  description: string;
  technologies: string[];
  achievements: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "Software & AI Automation Intern",
    company: "Zeber",
    duration: "June 2026 — Present",
    type: "Internship",
    description:
      "Owned the development of a modular AI Voice Agent that converts spoken requests into executable actions using speech recognition, LLM reasoning, tool dispatching, and natural voice responses.",
    technologies: [
      "Python",
      "FastAPI",
      "Gemini",
      "Whisper",
      "Edge TTS",
      "WebRTC VAD",
      "Git",
    ],
    achievements: [
      "Built the voice agent as the sole developer",
      "Designed a modular tool manager and dispatcher",
      "Implemented voice activity detection and conversation memory",
      "Delivered the Phase 1 MVP with a professional Git workflow",
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "IncodeVision",
    duration: "July 2026 — August 2026",
    type: "Internship Program",
    description:
      "Developing production-oriented full-stack projects with an emphasis on reusable frontend architecture, responsive interfaces, backend integration, and deployment.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Git",
    ],
    achievements: [
      "Building a long-term professional engineering portfolio",
      "Creating reusable and maintainable React components",
      "Implementing responsive layouts across major breakpoints",
      "Following structured development and deployment practices",
    ],
  },
];