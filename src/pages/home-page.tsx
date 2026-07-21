import { OpeningChapter } from "@/components/chapters/opening/opening-chapter";
import { WorkChapter } from "@/components/chapters/work/work-chapter";
import { ExperienceChapter } from "@/components/chapters/experience/experience-chapter";

export function HomePage() {
  return (
    <main>
      <OpeningChapter />
      <WorkChapter />
      <ExperienceChapter />
    </main>
  );
}