import {
  Bot,
  Boxes,
  Server,
  type LucideIcon,
} from "lucide-react";

type JourneyItem = {
  index: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const journeyItems: JourneyItem[] = [
  {
    index: "01",
    label: "Built",
    title: "GatePulse",
    description:
      "A production-oriented API gateway with authentication, rate limiting, analytics, and deployment.",
    icon: Server,
  },
  {
    index: "02",
    label: "Explored",
    title: "AI Voice Systems",
    description:
      "Speech recognition, language models, tool execution, automation, and voice interaction.",
    icon: Bot,
  },
  {
    index: "03",
    label: "Next",
    title: "Developer Products",
    description:
      "Reliable tools and systems that improve how developers build, learn, and work.",
    icon: Boxes,
  },
];

export function ClosingJourney() {
  return (
    <section className="closing__journey" aria-label="Engineering journey">
      {journeyItems.map((item) => {
        const Icon = item.icon;

        return (
          <article className="closing__journey-item" key={item.title}>
            <div className="closing__journey-marker">
              <div className="closing__journey-icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.7} />
              </div>

              <span className="closing__journey-index" aria-hidden="true">
                {item.index}
              </span>
            </div>

            <div>
              <span className="closing__journey-label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}