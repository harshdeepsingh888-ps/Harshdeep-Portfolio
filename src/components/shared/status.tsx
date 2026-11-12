import type { ProjectStatus } from "@/content/projects";

const map: Record<ProjectStatus, { label: string; tone: "live" | "info" | "acc" }> = {
  live: { label: "Live", tone: "live" },
  "in progress": { label: "In progress", tone: "info" },
  internship: { label: "Internship", tone: "acc" },
  source: { label: "Source", tone: "info" },
  winner: { label: "1st place", tone: "acc" },
};

export function Status({ status, className }: { status: ProjectStatus; className?: string }) {
  const { label, tone } = map[status];
  return (
    <span className={`mono pill ${className ?? ""}`} data-tone={tone}>
      {label}
    </span>
  );
}
