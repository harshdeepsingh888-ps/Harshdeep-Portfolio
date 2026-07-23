import { OpeningChapter } from "@/components/chapters/opening/opening-chapter";
import { WorkChapter } from "@/components/chapters/work/work-chapter";
import { ExperienceChapter } from "@/components/chapters/experience/experience-chapter";
import { ToolboxChapter } from "@/components/chapters/toolbox/toolbox-chapter";
import { ClosingChapter } from "@/components/sections/closing/closing-chapter";

export function HomePage() {
  return (
    <main>
      <OpeningChapter />
      <WorkChapter />
      <ExperienceChapter />
      <ToolboxChapter />
      <ClosingChapter />
    </main>
  );
}
