"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ButtonLink } from "@/components/ButtonLink";
import { offerings } from "@/data/offerings";
import { siteConfig } from "@/config/site";

export function OfferingsSection() {
  const [expandedClass, setExpandedClass] = useState<number | null>(null);

  const toggleClass = (index: number) => {
    setExpandedClass(expandedClass === index ? null : index);
  };

  return (
    <section id="offerings">
      <div className="container">
        <SectionHeader
          eyebrow="Offerings"
          title="Classes, Community, and Healing Ministry"
          description="Explore opportunities for growth, connection, and transformation through Christ-centered courses, community groups, and prayer ministry."
        />

        {/* Classes */}
        <div className="offerings-category">
          <h3 className="offerings-category-title">Classes & Courses</h3>
          <div className="offerings-list">
            {offerings.classes.map((course, index) => (
              <article
                key={index}
                className={`offering-card ${expandedClass === index ? 'expanded' : ''}`}
              >
                <div
                  className="offering-header"
                  onClick={() => toggleClass(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleClass(index)}
                >
                  <div>
                    <h4>{course.name}</h4>
                    {course.duration && <span className="badge">{course.duration}</span>}
                  </div>
                  <span className="toggle-icon">{expandedClass === index ? '−' : '+'}</span>
                </div>
                {expandedClass === index && (
                  <div className="offering-content">
                    <p>{course.description}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Community Groups & HeartSync Sessions */}
        <div className="grid two">
          <article className="card">
            <h3>{offerings.communityGroups.name}</h3>
            <p>{offerings.communityGroups.description}</p>
            <ButtonLink href="#contact" variant="secondary">
              Learn More
            </ButtonLink>
          </article>

          <article className="card">
            <h3>{offerings.heartSyncSessions.name}</h3>
            <p>{offerings.heartSyncSessions.description}</p>
            <ButtonLink
              href={siteConfig.bookingFormUrl}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Book a Session
            </ButtonLink>
          </article>
        </div>
      </div>
    </section>
  );
}
