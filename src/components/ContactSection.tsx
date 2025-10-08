"use client";

import { FormEvent, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/SectionHeader";

interface FormState {
  name: string;
  email: string;
  message: string;
  joinList: boolean;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
  joinList: false
};

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage(
      "Thanks for reaching out! We will connect with you shortly. Update the form handler to integrate with your preferred service."
    );
    setFormState(initialFormState);
  };

  return (
    <section id="contact">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let&apos;s start a conversation"
          description="Share how Christina can serve your community, request more information about classes, or invite her to speak."
        />
        <div className="grid two">
          <div>
            <form onSubmit={handleSubmit} aria-describedby="contact-status">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, name: event.target.value }))
                  }
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, email: event.target.value }))
                  }
                />
              </label>
              <label>
                How can Christina help?
                <textarea
                  name="message"
                  required
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, message: event.target.value }))
                  }
                />
              </label>
              <label className="checkbox-group">
                <input
                  type="checkbox"
                  name="joinList"
                  checked={formState.joinList}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, joinList: event.target.checked }))
                  }
                />
                <span className="small-text">
                  I&apos;d love to receive Christina&apos;s quarterly mailing list updates.
                </span>
              </label>
              <button className="button primary" type="submit">
                Send message
              </button>
              {statusMessage ? (
                <p id="contact-status" className="small-text" role="status">
                  {statusMessage}
                </p>
              ) : null}
            </form>
          </div>
          <aside className="card">
            <h3>Prefer a different channel?</h3>
            <p>
              Email Christina directly at <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> or
              call {siteConfig.phone}. For scheduling intensives, use the booking form below.
            </p>
            <ButtonLink href={siteConfig.bookingFormUrl} variant="secondary" target="_blank" rel="noreferrer">
              Book a session via Google Form
            </ButtonLink>
            <p className="small-text">Update the booking link once your Google Form is ready.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
