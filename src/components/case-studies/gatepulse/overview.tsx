import { Fragment } from "react";

import {
  Activity,
  ArrowRight,
  BarChart3,
  Database,
  FileText,
  Gauge,
  KeyRound,
  Laptop,
  Network,
  Quote,
  ShieldCheck,
} from "lucide-react";

const systemFlow = [
  {
    label: "Client",
    description: "Sends an API request",
    icon: Laptop,
  },
  {
    label: "Gateway",
    description: "Central traffic entry point",
    icon: Network,
    featured: true,
  },
  {
    label: "Authentication",
    description: "Validates JWT and API keys",
    icon: KeyRound,
  },
  {
    label: "Rate limiter",
    description: "Controls request frequency",
    icon: Gauge,
  },
  {
    label: "Logging",
    description: "Records structured events",
    icon: FileText,
  },
  {
    label: "Analytics",
    description: "Generates operational insights",
    icon: BarChart3,
  },
  {
    label: "Database",
    description: "Persists gateway data",
    icon: Database,
  },
];

const overviewPoints = [
  {
    icon: ShieldCheck,
    label: "Security",
    title: "Secure every request",
    description:
      "JWT sessions and hashed API keys protect administrative operations and gateway access.",
  },
  {
    icon: Activity,
    label: "Traffic control",
    title: "Protect backend services",
    description:
      "Token-bucket rate limiting prevents abusive clients from overwhelming protected services.",
  },
  {
    icon: BarChart3,
    label: "Observability",
    title: "Make traffic measurable",
    description:
      "Structured request logs become metrics for latency, errors, usage trends and gateway health.",
  },
];

type FlowStep = (typeof systemFlow)[number];

function PipelineCard({ step }: { step: FlowStep }) {
  const Icon = step.icon;

  return (
    <article
      className={[
        "group relative flex min-h-40 min-w-0 flex-col items-center justify-center overflow-hidden rounded-2xl border px-3 py-5 text-center transition-all duration-300",
        step.featured
          ? "border-accent/55 bg-accent/[0.075] shadow-[0_18px_55px_rgba(205,105,61,0.12)]"
          : "border-border bg-background/45 hover:-translate-y-1 hover:border-accent/35 hover:bg-background/70",
      ].join(" ")}
    >
      {step.featured && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(205,105,61,0.18),transparent_60%)]"
          />

          <span className="absolute right-2.5 top-2.5 rounded-full border border-accent/30 bg-accent/10 px-2 py-1 font-mono text-[0.48rem] uppercase tracking-[0.14em] text-accent">
            Core
          </span>
        </>
      )}

      <span
        className={[
          "relative grid size-11 shrink-0 place-items-center rounded-xl border shadow-[0_12px_35px_rgba(0,0,0,0.16)]",
          step.featured
            ? "border-accent/45 bg-accent/10 text-accent"
            : "border-border bg-surface text-accent",
        ].join(" ")}
      >
        <Icon aria-hidden="true" className="size-[1.1rem]" />
      </span>

      <h4 className="relative mt-4 text-sm font-semibold leading-5 text-foreground">
        {step.label}
      </h4>

      <p className="relative mt-2 max-w-[7.5rem] text-xs leading-5 text-subtle">
        {step.description}
      </p>
    </article>
  );
}

function PipelineConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex min-w-0 items-center justify-center px-1.5"
    >
      <span className="h-px min-w-0 flex-1 bg-border" />

      <span className="mx-1.5 grid size-7 shrink-0 place-items-center rounded-full border border-border bg-surface text-subtle">
        <ArrowRight className="size-3.5" />
      </span>

      <span className="h-px min-w-0 flex-1 bg-border" />
    </div>
  );
}

export function GatePulseOverview() {
  return (
    <section
      id="gatepulse-overview"
      className="relative scroll-mt-24 pb-24 lg:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-28 h-[30rem] w-[30rem] rounded-full bg-accent/[0.045] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-20 h-[26rem] w-[26rem] rounded-full bg-[#7868ff]/[0.04] blur-[140px]"
      />

      <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-surface/60 shadow-[0_35px_110px_rgba(0,0,0,0.2)] backdrop-blur-xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(205,105,61,0.09),transparent_32%),radial-gradient(circle_at_85%_90%,rgba(105,93,255,0.055),transparent_36%)]"
        />

        {/* Introduction */}
        <div className="relative border-b border-border px-6 py-10 sm:px-9 sm:py-12 lg:px-12 lg:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-accent">
            System overview
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <div className="min-w-0">
              <h2 className="max-w-[40rem] text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3rem] lg:leading-[1.04]">
                Every request follows the same production pipeline.
              </h2>
            </div>

            <div className="min-w-0 lg:pt-1">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-subtle">
                Why GatePulse exists
              </p>

              <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-muted">
                <p>
                  Backend applications often expose services directly to
                  clients. While that approach works for prototypes, it becomes
                  difficult to secure, control and observe as traffic grows.
                </p>

                <p>
                  GatePulse introduces a centralized infrastructure layer where
                  authentication, rate limiting, request logging and analytics
                  happen before traffic reaches protected application logic.
                </p>

                <p>
                  The objective was not merely to create another administration
                  dashboard. It was to reproduce the gateway pattern used by
                  production systems to centralize cross-cutting concerns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Request lifecycle */}
        <div className="relative px-5 py-9 sm:px-8 sm:py-11 lg:px-10 lg:py-12">
          <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr] lg:items-start lg:gap-16">
            <div>
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-subtle">
                Request lifecycle
              </p>

              <h3 className="mt-3 max-w-2xl text-xl font-semibold leading-7 tracking-[-0.025em] text-foreground sm:text-2xl">
                From incoming traffic to persistent operational data
              </h3>
            </div>

            <p className="max-w-lg text-sm leading-7 text-muted lg:justify-self-end lg:pt-1">
              Each stage has one responsibility, keeping the gateway pipeline
              predictable, modular and easier to reason about.
            </p>
          </div>

          {/* Desktop pipeline: fits inside the section without a scrollbar */}
          <div
            className="mt-9 hidden xl:grid xl:items-stretch"
            style={{
              gridTemplateColumns:
                "minmax(0,1fr) 3.25rem minmax(0,1fr) 3.25rem minmax(0,1fr) 3.25rem minmax(0,1fr) 3.25rem minmax(0,1fr) 3.25rem minmax(0,1fr) 3.25rem minmax(0,1fr)",
            }}
          >
            {systemFlow.map((step, index) => (
              <Fragment key={step.label}>
                <PipelineCard step={step} />

                {index < systemFlow.length - 1 && <PipelineConnector />}
              </Fragment>
            ))}
          </div>

          {/* Tablet and mobile pipeline: intentionally scrollable */}
          <div className="mt-9 overflow-x-auto pb-4 xl:hidden">
            <div className="flex min-w-max items-stretch gap-0 pr-2">
              {systemFlow.map((step, index) => (
                <Fragment key={step.label}>
                  <div className="w-40 shrink-0 sm:w-44">
                    <PipelineCard step={step} />
                  </div>

                  {index < systemFlow.length - 1 && (
                    <div className="w-16 shrink-0">
                      <PipelineConnector />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          <p className="mt-1 text-center font-mono text-[0.6rem] uppercase tracking-[0.17em] text-subtle xl:hidden">
            Scroll horizontally to inspect the request lifecycle
          </p>
        </div>

        {/* Engineering outcomes */}
        <div className="relative grid border-t border-border md:grid-cols-3">
          {overviewPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <article
                key={point.title}
                className={[
                  "group px-7 py-9 transition-colors duration-300 hover:bg-background/25 sm:px-9 lg:px-10 lg:py-10",
                  index < overviewPoints.length - 1
                    ? "border-b border-border md:border-b-0 md:border-r"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-background/55 text-accent transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon aria-hidden="true" className="size-[1.1rem]" />
                  </span>

                  <span className="pt-1 text-right font-mono text-[0.56rem] uppercase tracking-[0.18em] text-subtle">
                    {point.label}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-foreground">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="relative border-t border-border px-6 py-12 sm:px-9 sm:py-14 lg:px-12 lg:py-16">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-background/45 px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/[0.07] blur-[100px]"
            />

            <Quote
              aria-hidden="true"
              className="relative size-7 text-accent"
              strokeWidth={1.6}
            />

            <blockquote className="relative mt-7 max-w-5xl">
              <p className="text-2xl font-medium leading-[1.2] tracking-[-0.035em] text-foreground sm:text-3xl lg:text-[2.35rem] lg:leading-[1.16]">
                GatePulse wasn&apos;t built as another dashboard. It was built
                as the infrastructure layer behind every API request.
              </p>
            </blockquote>

            <div className="relative mt-9 flex items-center gap-4">
              <span className="h-px w-10 bg-accent/60" />

              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-subtle">
                Engineering principle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}