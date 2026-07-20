import { ProjectShowcase } from "./project-showcase";
import { WorkChapterRail } from "./work-chapter-rail";

export function WorkChapter() {
  return (
    <section id="work" className="work-chapter">
      <WorkChapterRail />

      <div className="work-chapter__ambient" aria-hidden="true">
        <span className="work-chapter__orbit work-chapter__orbit--one" />
        <span className="work-chapter__orbit work-chapter__orbit--two" />
        <span className="work-chapter__orbit work-chapter__orbit--three" />
        <span className="work-chapter__planet" />
      </div>

      <div className="work-chapter__container">
        <header className="work-chapter__header">
          <div className="work-chapter__eyebrow">
            <span className="work-chapter__eyebrow-dot" />
            <span>02 / Engineering Systems</span>
          </div>

          <h2 className="work-chapter__title">
            Engineering software that <span>solves</span> real problems.
          </h2>

          <p className="work-chapter__description">
            I build production-oriented software with a strong emphasis on
            architecture, maintainability and developer experience. These
            projects represent how I approach engineering beyond tutorials and
            classroom assignments.
          </p>
        </header>

        <div className="work-chapter__projects">
          <ProjectShowcase
            eyebrow="Featured System"
            title="GatePulse"
            description="A production-grade API gateway featuring API-key management, JWT authentication, request analytics, token-bucket rate limiting and structured logging."
            technologies={[
              "Node.js",
              "Express",
              "PostgreSQL",
              "Prisma",
              "React",
              "TypeScript",
            ]}
            highlights={[
              "Secure API-key management",
              "Request analytics dashboard",
              "Token-bucket rate limiting",
              "Production-oriented backend architecture",
            ]}
            image="/images/projects/gatepulse-dashboard-cropped.png"
            imageAlt="GatePulse API gateway analytics dashboard"
            caseStudyLink="/work/gatepulse"
            accent="violet"
          />

          <ProjectShowcase
            eyebrow="AI SYSTEMS"
            title="AI Voice Agent"
            description="A modular voice-first assistant that understands spoken commands, reasons with Gemini, executes desktop tools, maintains conversation context, and generates natural voice responses."
            technologies={[
              "Python",
              "FastAPI",
              "Gemini",
              "Whisper",
              "Edge TTS",
              "WebRTC VAD",
            ]}
            highlights={[
              "Voice-to-voice interaction",
              "AI-powered tool selection",
              "Conversation memory",
              "Modular FastAPI architecture",
            ]}
            image="/images/projects/ai-voice-agent/system-architecture.png"
            imageAlt="AI Voice Agent system architecture"
            caseStudyLink="/projects/ai-voice-agent"
            accent="orange"
          />
        </div>
      </div>
    </section>
  );
}