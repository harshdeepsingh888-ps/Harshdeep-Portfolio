import { About } from "@/components/home/about";
import { Changelog } from "@/components/home/changelog";
import { Contact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { StackGraph } from "@/components/home/stack-graph";
import { Work } from "@/components/home/work";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Work />
      <StackGraph />
      <About />
      <Changelog />
      <Contact />
    </main>
  );
}
