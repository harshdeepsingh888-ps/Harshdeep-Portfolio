import { caseStudies, getProject } from "@/content/projects";
import { renderOg, ogSize } from "@/lib/og";

export const alt = "Case study by Harshdeep Singh";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOg({
    eyebrow: `Case study · ${project?.kind ?? ""}`,
    title: project?.name ?? "Case study",
    footer: project?.metrics.map((m) => `${m.value} ${m.label}`).join("  ·  ") ?? "",
  });
}
