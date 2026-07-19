import { OpeningChapter } from "@/components/chapters/opening/opening-chapter";

export default function App() {
  return (
    <main>
      <OpeningChapter />

      <section
        id="work"
        className="flex min-h-[60vh] items-center justify-center px-6"
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
          Engineering work — next chapter
        </p>
      </section>
    </main>
  );
}