import Image from 'next/image';
import { ButtonLink } from '@/components/ButtonLink';
import { siteConfig } from '@/config/site';
import christinaImage from '@/data/christina.png';

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div>
          <span className="badge">Living on mission together</span>
          <h1>Hi, I&apos;m Christina. I am glad you&apos;re here.</h1>
          <p>
            My desire is to create safe, welcoming spaces where people can
            pause, be honest about where they are, and encounter the love, hope
            and healing of Jesus. Through relationships, prayer, classes, and
            community groups, I invite you to join me on a journey toward
            wholeness. This is a place to be known, to heal, and to discover
            more of who God created you to be. As we walk together with Jesus,
            my prayer is that our hearts are strengthened to love God,
            ourselves, and others well, so that we can carry His peace,
            compassion, and hope into a world that deeply needs it.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#giving">Support the Mission</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact Christina
            </ButtonLink>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src={christinaImage}
            alt="Portrait of Christina"
            priority
            className="hero-image__photo"
            sizes="(min-width: 960px) 40vw, 80vw"
          />
          <ButtonLink
            href={siteConfig.bookingFormUrl}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
            aria-label="Book a session with Christina"
          >
            Book a Session
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
