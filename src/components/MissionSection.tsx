import { missionHighlights } from "@/data/mission";
import { SectionHeader } from "@/components/SectionHeader";

export function MissionSection() {
  return (
    <section id="mission">
      <div className="container">
        <SectionHeader
          eyebrow="Mission"
          title="A rhythm of presence, prayer, and practical care"
          description="Every initiative Christina leads is rooted in a commitment to show up, listen, and serve in a way that empowers local communities."
        />
        <div className="grid three">
          {missionHighlights.map((highlight) => (
            <article className="card" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
