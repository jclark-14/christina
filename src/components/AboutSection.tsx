import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import christinaImage from "@/data/christina.png";

const aboutParagraphs = [
  "Christina Fowler has dedicated over two decades to helping others experience the love of Jesus and grow into wholeness in Him. A former college basketball player, she began her ministry mentoring student-athletes and later served as a youth minister before founding and directing The Porch, a Washington, D.C.–based ministry dedicated to discipling underserved youth and families.",
  "Her work has since expanded to include mentoring and teaching missionaries and ministry leaders, serving cross-culturally, and walking alongside many in prayer and inner healing ministry. Christina is an ordained minister and a Certified HeartSync Facilitator, serving as an Area Leader in both Washington, D.C., and Atlanta.",
  "Known for her ability to create safe and welcoming spaces, Christina specializes in cultivating relationally connected environments and equipping others to do the same within their communities. Her ministry integrates spiritual formation with psychological frameworks such as Interpersonal Neurobiology, Polyvagal Theory, and Internal Family Systems, helping people experience the transforming love of Jesus in heart, mind, and body."
];

export function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <SectionHeader
              eyebrow="About"
              title="Meet Christina"
              description="A pastor, mentor, and facilitator devoted to creating spaces of healing and formation."
            />
            <div className="about-content">
              {aboutParagraphs.map((text) => (
                <p key={text.slice(0, 24)}>{text}</p>
              ))}
            </div>
          </div>
          <aside className="about-media" aria-label="Portrait of Christina">
            <Image
              src={christinaImage}
              alt="Portrait of Christina"
              fill
              priority
              sizes="(min-width: 960px) 35vw, 90vw"
              style={{ objectFit: "cover" }}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
