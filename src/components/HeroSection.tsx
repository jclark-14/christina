import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div>
          <span className="badge">Living on mission together</span>
          <h1>Extending hope to every table Christina touches</h1>
          <p>
            Christina partners with local churches, leaders, and organizations to bring
            practical care, spiritual formation, and leadership development to communities
            around the world. Discover how you can journey with her mission.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#giving">Support the Mission</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact Christina
            </ButtonLink>
          </div>
        </div>
        <div className="hero-card">
          <strong>What&apos;s new</strong>
          <p>
            Applications are open for the spring Leadership Labs cohort. We&apos;re gathering a
            diverse group of leaders for six weeks of coaching, prayer, and strategic planning.
          </p>
          <ButtonLink
            href={siteConfig.bookingFormUrl}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
          >
            Book a Session
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
