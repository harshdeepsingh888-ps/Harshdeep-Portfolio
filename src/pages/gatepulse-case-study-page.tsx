import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function GatePulseCaseStudyPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to portfolio
        </Link>

        <p className="mt-20 font-mono text-xs uppercase tracking-[0.24em] text-accent">
          Engineering case study
        </p>

        <h1 className="mt-5 text-6xl font-medium tracking-[-0.06em] sm:text-8xl">
          GatePulse
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          A production-grade API gateway with authentication, token-bucket
          rate limiting, API-key management, structured request logging and
          analytics.
        </p>

        <div className="mt-16 rounded-3xl border border-border bg-surface p-10">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-subtle">
            Full case study coming next
          </p>
        </div>
      </div>
    </main>
  );
}