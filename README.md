# Christina Outreach Landing Page

A modular Next.js landing page for Christina's outreach initiatives. The app delivers a scrollable single page with quick navigation to the mission, classes, giving, and contact sections.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Project Structure

- `src/app/page.tsx` – assembles the page from composable section components.
- `src/components/` – reusable components for each section (hero, mission, classes, giving, contact, header, footer).
- `src/data/` – content data that can be updated without touching JSX logic.
- `src/config/site.ts` – high-level configuration such as contact info, booking link, and giving options.
- `src/app/globals.css` – theme tokens and global styling aligned with the provided color palette.

Update the content by editing the data/config files. The layout automatically reflects changes, keeping future updates simple.

## Customization Notes

- **Contact form**: Currently resets the form and displays a confirmation message. Replace the `handleSubmit` logic in `ContactSection.tsx` with integration to your preferred email or CRM service when ready.
- **Book a session**: Swap the `bookingFormUrl` in `src/config/site.ts` with the live Google Form link when it is created.
- **Giving links**: Update the URLs and descriptions in `siteConfig.givingOptions` to point to the real payment destinations (Stripe, Zelle, PayPal, and mailing address).
- **Branding**: Typography and colors are defined in `globals.css`. Adjust tokens or extend with component-level styles as the brand evolves.

## Deployment

Deploy the Next.js app to Vercel or your preferred platform. No backend services are required until you connect the contact form to an external provider.
