import { ButtonLink } from '@/components/ButtonLink';
import Image from 'next/image';
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
            pause, be honest about where they are, and encounter the love, hope,
            and healing of Jesus.
          </p>
          <p>
            Through relationships, prayer, and community, I invite you to join me on a
            journey toward wholeness: a place to be known, to heal, and to discover
            more of who God created you to be.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#about">Learn More</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Get in Touch
            </ButtonLink>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src={christinaImage}
            alt="Christina Fowler"
            fill
            priority
            sizes="(min-width: 960px) 40vw, 90vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
