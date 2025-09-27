# Christina Outreach Landing Page Plan

## Project Vision
Create a single-page "Squarespace-style" marketing and donation site for Christina Fowler's HeartSync-focused ministry. The page should communicate her mission, highlight classes and sessions, and provide clear calls to action for booking, registering, and giving. The look and feel should be warm, inviting, and professional, using the provided Flora Jones palette and welcoming imagery instead of personal photos.

## Technical Stack Recommendation
- **Framework**: Next.js 14 (App Router) deployed on Vercel for fast static generation, built-in routing, and SEO support.
- **Styling**: Tailwind CSS with custom theme tokens to express the Flora Jones color palette and typography utilities for cohesive spacing and layout.
- **Content Management**: Use static JSON/MDX content for copy, or integrate a headless CMS (Sanity, Contentful) if non-technical stakeholders need to edit content frequently.
- **Payments/Donations**: Stripe Checkout or Stripe Payment Links embedded via Next.js API Route or Stripe-hosted links (no PCI compliance burden). Provide alternate giving methods (Zelle, PayPal, check) via CTA buttons.
- **Newsletter Signup**: Use a hosted form (Mailchimp, ConvertKit, or Substack) embedded via secure client-side form post or API route proxy.

## Architecture Overview
1. **App Layout**
   - Hero section with Christina's message, mission statement, and quick CTA buttons.
   - Navigation banner with anchor links (`#mission`, `#classes`, `#giving`, `#contact`).
   - Section blocks for Mission, Classes (HeartSync Foundations, Pathways, Retreats, Belonging, Forming), Testimonials (optional), Giving, Contact, and FAQ.
   - Sticky/mobile navigation for quick jumps.
2. **Data Modeling**
   - Represent programs in structured data (`programs.ts`) to drive the classes section.
   - Use MDX for long-form descriptions to retain formatting while keeping content manageable.
3. **Integrations**
   - Link "Book a HeartSync Session" CTA to scheduling tool (Calendly or TidyCal).
   - Donation CTAs route to Stripe-hosted payment pages to avoid handling card data directly.
   - Use reCAPTCHA or hCaptcha on contact form to deter spam.

## Security Considerations (Frontend-Centric)
- **Payment Security**: Keep all payment processing off-site via Stripe-hosted Checkout or Payment Links. Never collect card information on the page; ensures PCI compliance with minimal effort.
- **Form Hardening**: Validate inputs client-side and server-side (via Next.js API routes). Throttle or rate-limit submissions, and store secrets (email service API keys) as environment variables on Vercel.
- **Embedded Scripts**: Only load trusted third-party scripts (Stripe, email marketing). Set `Content-Security-Policy` headers via Next.js middleware to restrict sources.
- **HTTPS**: Vercel enforces HTTPS, preventing man-in-the-middle attacks for visitors.
- **Dependency Hygiene**: Keep packages updated, run `npm audit`, and lock dependencies with `package-lock.json`.
- **Accessibility & Privacy**: Offer privacy notice for forms, comply with CAN-SPAM for newsletters, and ensure accessible markup (proper headings, contrast from the palette).

## Visual Design Guidelines
- **Color Palette**: Translate the Flora Jones palette into Tailwind theme variables (primary `#4D6D8A`, accent `#D4E6E9`, neutral backgrounds `#E5EDEE`, highlight `#D4E6E9`, warm accent `#D8CEA4`).
- **Typography**: Pair a serif display font for headings (e.g., "Playfair Display") with a humanist sans-serif for body (e.g., "Source Sans Pro").
- **Layout**: Generous white space, card-like sections with soft shadows, rounded corners, and subtle gradients/texture for depth.
- **Imagery**: Use abstract nature or ministry-related imagery, soft overlays, and avoid busy backgrounds. Highlight Christina's quote or prayer in large text blocks.

## Next Steps / Open Questions
1. Confirm copy for each section (mission, class descriptions, testimonials, giving instructions).
2. Decide on scheduling platform integration (Calendly link available?).
3. Choose newsletter provider and donation platform (Stripe setup, connect PayPal/Zelle instructions).
4. Determine any analytics requirements (Plausible or Vercel Analytics) and corresponding privacy disclosures.
5. Gather brand assets (logo, typography preferences, imagery) and finalize hero messaging.

Once these decisions are made, we can scaffold the Next.js project, define Tailwind theme tokens, and start implementing the sections with responsive layout and smooth scrolling navigation.
