import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { GatePulseHero } from "@/components/case-studies/gatepulse/hero";
import { GatePulseOverview } from "@/components/case-studies/gatepulse/overview";

export function GatePulseCaseStudyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(205,105,61,0.055),transparent_29%),radial-gradient(circle_at_88%_22%,rgba(97,85,205,0.045),transparent_31%),linear-gradient(to_bottom,rgba(255,255,255,0.012),transparent_36%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.022] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 sm:py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to portfolio
        </Link>

        <GatePulseHero />
        <GatePulseOverview />
      </div>
    </main>
  );
}