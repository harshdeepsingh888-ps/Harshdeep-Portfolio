import { OpeningChapter } from "@/components/chapters/opening/opening-chapter";
import { WorkChapter } from "@/components/chapters/work/work-chapter";

export function HomePage() {
  return (
    <main>
      <OpeningChapter />
      <WorkChapter />
    </main>
  );
}