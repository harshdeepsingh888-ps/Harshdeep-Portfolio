import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
          Error 404
        </p>

        <h1 className="mt-5 text-6xl font-medium tracking-[-0.05em]">
          Page not found.
        </h1>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm transition-colors hover:border-accent"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Return home
        </Link>
      </div>
    </main>
  );
}