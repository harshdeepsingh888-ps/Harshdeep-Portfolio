import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;