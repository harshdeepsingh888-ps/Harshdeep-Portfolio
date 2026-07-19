const engineeringSignals = [
  {
    label: "Current focus",
    value: "GatePulse v1",
  },
  {
    label: "Based in",
    value: "Delhi, India",
  },
  {
    label: "Availability",
    value: "Remote · Delhi NCR",
  },
];

const focusAreas = [
  "Backend systems",
  "API design",
  "AI engineering",
  "Developer tools",
  "System design",
  "Production software",
];

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-border"
    >
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20 lg:px-16 lg:py-20">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Software Engineer
          </div>

          <h1
            id="hero-heading"
            className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[5.75rem]"
          >
            Harshdeep Singh
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted sm:text-2xl lg:text-[1.75rem]">
            Building AI systems, backend infrastructure, and developer tools.
          </p>

          <p className="mt-7 max-w-3xl text-base leading-7 text-muted">
            B.Tech IT student at Bharati Vidyapeeth College of Engineering,
            Delhi. Currently working as a Software &amp; AI Automation Intern
            at <span className="font-medium text-foreground">Zeber</span>.
          </p>

          <div className="mt-7 flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
            />

            <p className="text-sm leading-6 text-foreground">
              Open to Software Engineering, Backend, and Full-Stack internships
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center bg-accent px-6 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-background transition-colors duration-200 hover:bg-accent-soft"
            >
              View my work&nbsp; →
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center border border-border-strong bg-background px-6 font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground transition-colors duration-200 hover:border-foreground"
            >
              Contact me
            </a>
          </div>

          <dl className="mt-12 grid max-w-3xl gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {engineeringSignals.map((signal) => (
              <div key={signal.label} className="bg-surface px-5 py-4">
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
                  {signal.label}
                </dt>

                <dd className="mt-2 text-sm text-foreground">
                  {signal.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <aside
          aria-label="Current engineering focus"
          className="border border-border bg-surface/90"
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Current focus
            </p>

            <span className="font-mono text-xs text-subtle">2026</span>
          </div>

          <div className="border-b border-border p-6">
            <span className="font-mono text-xs text-accent">01</span>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight">
              GatePulse
            </h2>

            <p className="mt-2 text-sm text-muted">
              API Gateway &amp; Management Platform
            </p>

            <p className="mt-5 text-sm leading-7 text-muted">
              A full-stack platform for API authentication, key lifecycle
              management, rate limiting, structured request logging, and
              operational analytics.
            </p>

            <a
              href="#work"
              className="mt-6 inline-flex font-mono text-xs uppercase tracking-[0.14em] text-accent transition-colors hover:text-accent-soft"
            >
              Explore the system&nbsp; →
            </a>
          </div>

          <div className="p-6">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-subtle">
              Engineering interests
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="border border-border-strong px-3 py-2 font-mono text-[0.68rem] text-muted"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}