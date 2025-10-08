import { classOfferings } from "@/data/classes";
import { SectionHeader } from "@/components/SectionHeader";

export function ClassesSection() {
  return (
    <section id="classes">
      <div className="container">
        <SectionHeader
          eyebrow="Classes"
          title="Formational experiences to equip every season"
          description="Whether you are discerning your next step or ready to lead others, each class is designed to be interactive, relational, and actionable."
        />
        <div className="grid two">
          {classOfferings.map((item) => (
            <article className="card" key={item.name}>
              <h3>{item.name}</h3>
              <span className="badge">{item.format}</span>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
