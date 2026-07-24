import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  ExternalLink,
  Monitor,
  Server,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const capabilities = [
  "JWT administrator authentication",
  "Secure API-key lifecycle management",
  "Token-bucket rate limiting",
  "Structured request and error logging",
  "Operational traffic analytics",
];

const technologies = [
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "React",
  "TypeScript",
  "Docker",
];

const engineeringDetails = [
  {
    label: "Role",
    value: "Full-stack engineer",
    icon: UserRound,
  },
  {
    label: "System",
    value: "API gateway platform",
    icon: Server,
  },
  {
    label: "Backend",
    value: "Node.js + Express",
    icon: Code2,
  },
  {
    label: "Frontend",
    value: "React + TypeScript",
    icon: Monitor,
  },
  {
    label: "Security",
    value: "JWT + API keys",
    icon: ShieldCheck,
  },
  {
    label: "Deployment",
    value: "Render + Vercel",
    icon: Cloud,
  },
];

function GitHubMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4 shrink-0"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.89a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92v2.78c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function GatePulseHero() {
  return (
    <section className="relative pb-20 pt-10 sm:pt-14 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-10 h-[34rem] w-[34rem] rounded-full bg-accent/[0.055] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 top-32 h-[30rem] w-[30rem] rounded-full bg-[#7868ff]/[0.045] blur-[140px]"
      />

      <div className="relative grid gap-16 xl:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] xl:items-center xl:gap-20">
        <div className="min-w-0">
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-surface/70 px-5 py-2.5 backdrop-blur-md">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-25" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>

              <span className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-subtle">
                Production engineering case study
              </span>
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              API infrastructure
              <span className="mx-3 text-subtle">/</span>
              Full-stack system
            </p>
          </div>

          <h1 className="mt-8 max-w-4xl text-6xl font-medium tracking-[-0.065em] sm:text-8xl xl:text-[7rem] xl:leading-[0.9]">
            GatePulse
          </h1>

          <p className="mt-1 max-w-[38rem] text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            A production-grade API gateway built to secure, observe and manage
            API traffic through centralized authentication, API-key control,
            rate limiting, structured logging and operational analytics.
          </p>

          <div className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-3 text-sm leading-6 text-muted"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-border bg-surface/80 text-accent">
                  <Check aria-hidden="true" className="size-3.5" />
                </span>

                <span>{capability}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://gate-pulse.vercel.app"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the live GatePulse platform"
              className="group inline-flex min-h-[3.5rem] items-center justify-center gap-2 rounded-full border px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                backgroundColor: "#f3eee6",
                borderColor: "#f3eee6",
                color: "#111214",
              }}
            >
              <ExternalLink
                aria-hidden="true"
                className="size-4 shrink-0"
                style={{ color: "#111214" }}
              />

              <span style={{ color: "#111214" }}>View live platform</span>

              <ArrowUpRight
                aria-hidden="true"
                className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "#111214" }}
              />
            </a>

            <a
              href="https://github.com/harshdeepsingh888-ps/GatePulse"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the GatePulse GitHub repository"
              className="group inline-flex min-h-[3.5rem] items-center justify-center gap-2 rounded-full border border-border bg-surface/70 px-7 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-foreground/70 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <GitHubMark />

              <span>View repository</span>

              <ArrowUpRight
                aria-hidden="true"
                className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <aside className="min-w-0 overflow-hidden rounded-[2rem] border border-border bg-surface/75 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur-xl">
          <div className="relative border-b border-border px-7 py-8 sm:px-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/[0.075] blur-3xl"
            />

            <div className="relative flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-background/70 text-accent">
                <ShieldCheck aria-hidden="true" className="size-5" />
              </span>

              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle">
                  Engineering profile
                </p>

                <h2 className="mt-2 text-base font-semibold text-foreground">
                  Built across the complete product stack
                </h2>
              </div>
            </div>

            <p className="relative mt-6 max-w-lg text-sm leading-7 text-muted">
              GatePulse was designed as an infrastructure product rather than a
              dashboard-only application, covering gateway middleware,
              persistence, security, analytics and cloud deployment.
            </p>
          </div>

          <dl className="divide-y divide-border">
            {engineeringDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <div
                  key={detail.label}
                  className="group flex items-center justify-between gap-6 px-7 py-5 transition-colors duration-300 hover:bg-background/35 sm:px-9"
                >
                  <dt className="flex min-w-0 items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border bg-background/50 text-subtle transition-colors group-hover:text-accent">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>

                    <span className="font-mono text-[0.63rem] uppercase tracking-[0.18em] text-subtle">
                      {detail.label}
                    </span>
                  </dt>

                  <dd className="text-right text-sm font-semibold text-foreground">
                    {detail.value}
                  </dd>
                </div>
              );
            })}
          </dl>
        </aside>
      </div>

      <div className="relative mt-16 border-y border-border py-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 h-20 -translate-y-1/2 bg-accent/[0.025] blur-3xl"
        />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center">
          <p className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle">
            Technology stack
          </p>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-surface/65 px-4 py-2 font-mono text-[0.67rem] uppercase tracking-[0.14em] text-subtle backdrop-blur-md transition-colors hover:border-accent/50 hover:text-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle">
          System overview
        </span>

        <span
          aria-hidden="true"
          className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
        />
      </div>

      <a
        href="#gatepulse-overview"
        className="mt-6 inline-flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-foreground"
      >
        Explore the system
        <ArrowDown aria-hidden="true" className="size-4 text-accent" />
      </a>
    </section>
  );
}