export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-20 pt-8 sm:pb-28 lg:pb-36 lg:pt-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-[-16rem] h-[34rem] w-[34rem] rounded-full bg-accent/5 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-[88rem] px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div className="relative z-10">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent-soft">
              <span className="h-px w-8 bg-accent" />
              Software Engineer
            </p>

            <h1
              id="hero-heading"
              className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[5.15rem]"
            >
              Building reliable software for real-world systems.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Backend infrastructure, AI applications, and developer tools
              designed with production-minded engineering.
            </p>

            <div className="mt-10">
              <p className="text-lg font-medium text-foreground">
                Harshdeep Singh
              </p>

              <p className="mt-2 text-sm leading-6 text-muted">
                Software &amp; AI Automation Intern at Zeber
                <span className="mx-2 text-subtle">·</span>
                Delhi, India
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-accent"
              />

              <p className="text-sm text-muted">
                Open to software engineering internships
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center bg-foreground px-6 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-soft"
              >
                Explore my work
                <span aria-hidden="true" className="ml-3">
                  ↘
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center border border-border-strong px-6 text-sm font-medium text-foreground transition-colors duration-200 hover:border-muted hover:bg-surface"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-6 top-10 hidden font-mono text-[0.65rem] uppercase tracking-[0.18em] text-subtle xl:block"
            >
              Production system
            </div>

            <figure>
              <div className="relative overflow-hidden rounded-[1.25rem] bg-surface p-2 shadow-[0_32px_90px_rgba(0,0,0,0.38)] sm:p-3">
                <div className="flex items-center gap-2 px-3 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5f]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e6b94c]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#62b56b]" />

                  <span className="ml-3 font-mono text-[0.65rem] text-subtle">
                    gatepulse / dashboard
                  </span>
                </div>

                <div className="overflow-hidden rounded-[0.8rem] bg-background">
                  <img
                    src="/images/projects/gatepulse-dashboard.png"
                    alt="GatePulse API Gateway analytics dashboard showing traffic, latency, errors, and API key activity"
                    width="1600"
                    height="900"
                    className="h-auto w-full"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <figcaption className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-base font-medium text-foreground">
                    GatePulse
                  </p>

                  <p className="mt-1 text-sm text-muted">
                    API Gateway &amp; Management Platform
                  </p>
                </div>

                <p className="max-w-xs font-mono text-[0.65rem] uppercase leading-5 tracking-[0.14em] text-subtle sm:text-right">
                  Authentication · Rate limiting · Analytics · Observability
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}