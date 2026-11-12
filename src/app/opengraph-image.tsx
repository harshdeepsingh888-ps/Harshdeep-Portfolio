import { renderOg, ogSize } from "@/lib/og";

export const alt = "Harshdeep Singh — software engineer, backend and AI systems";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOg({
    eyebrow: "Open to SWE internships",
    title: "Harshdeep Singh",
    footer: "Backend & AI systems · Technical intern at Neubitat · B.Tech IT, BVCOE ’28",
  });
}
