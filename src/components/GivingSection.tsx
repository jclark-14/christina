import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/SectionHeader";

export function GivingSection() {
  return (
    <section id="giving" className="giving-section">
      <div className="container">
        <SectionHeader
          eyebrow="Giving"
          title="Choose a giving path that works for you"
          description="Every contribution helps Christina say yes to more mission opportunities. Give securely online or choose the method that fits your rhythms."
        />
        <div className="giving-grid">
          {siteConfig.givingOptions.map((option) => (
            <article className="giving-card" key={option.label}>
              <div className="giving-content">
                <h3>{option.label}</h3>
                <p>{option.description}</p>
                <ButtonLink href={option.url} variant="secondary" target="_blank" rel="noreferrer">
                  Continue
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
