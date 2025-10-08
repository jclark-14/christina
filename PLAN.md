# Christina Outreach Landing Page Plan

## Project Snapshot
The landing page is implemented as a single-page Next.js 14 application with modular sections for mission, classes, giving, and contact. Styling is handled through global design tokens and lightweight utility classes to create a warm Squarespace-inspired aesthetic.

## Architecture Overview
- **Framework**: Next.js App Router with static rendering for fast loads and straightforward Vercel deployment.
- **Structure**: Each major section (hero, mission, classes, giving, contact, footer) resides in `src/components`, making future changes isolated and reusable.
- **Content Management**: Copy and CTAs are driven by structured data in `src/data` and `src/config/site.ts`. Updating these files refreshes the page without touching JSX layout logic.
- **Navigation**: Sticky top navigation with anchor links for smooth scrolling to sections.

## Current Features
1. **Hero + Quick Actions**
   - Mission statement with CTA buttons for giving and contact.
   - Highlight card promoting current initiatives with a "Book a Session" button that points to the configurable Google Form link.
2. **Mission Highlights**
   - Three-card layout outlining outreach pillars.
3. **Classes Overview**
   - Modular card grid for key offerings with format badges.
4. **Giving Options**
   - Buttons for Stripe, Zelle, PayPal, and check giving with editable descriptions/links.
5. **Contact Form**
   - Collects name, email, message, and newsletter opt-in checkbox. Displays a success message (ready for integration with email/CRM service).
   - Companion sidebar summarizing direct contact info and linking to the booking Google Form.
6. **Footer**
   - Location, contact details, and pointers to where configuration lives.

## Security & Integrations
- Keep payments off-site through Stripe/Zelle/PayPal links to avoid handling sensitive data.
- When integrating the contact form with an email service, use an API route or third-party provider that supports CAPTCHA/spam mitigation.
- Store future API keys or secrets in Vercel environment variables; never commit them to the repo.

## Future Enhancements
- Swap placeholder copy with approved messaging and testimonials when available.
- Integrate the contact form with the chosen mailing list or CRM provider.
- Embed analytics or tracking pixels once requirements are confirmed (none currently).
- Introduce a CMS (e.g., Sanity) if non-technical collaborators need to update content frequently.
- Add imagery or iconography once brand assets are finalized.
