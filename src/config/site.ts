export const siteConfig = {
  name: "Christina Outreach",
  description:
    "Join Christina in creating spaces of hope through outreach, classes, and community support across the globe.",
  contactEmail: "hello@christinaoutreach.org",
  phone: "(555) 123-4567",
  location: "Serving communities globally with a home base in Nashville, TN",
  bookingFormUrl: "https://forms.gle/your-google-form-id",
  givingOptions: [
    {
      label: "Give with Stripe",
      description: "Secure online giving with debit or credit cards via Stripe.",
      url: "https://donate.stripe.com/example"
    },
    {
      label: "Give with Zelle",
      description: "Use Zelle with the email hello@christinaoutreach.org.",
      url: "mailto:hello@christinaoutreach.org?subject=Zelle%20Gift"
    },
    {
      label: "Give with PayPal",
      description: "Send a one-time or recurring gift through PayPal.",
      url: "https://paypal.me/example"
    },
    {
      label: "Mail a Check",
      description: "Checks payable to Christina Outreach. Mail to PO Box 123, Nashville TN 37201.",
      url: "https://maps.app.goo.gl/example"
    }
  ]
};

export type SiteConfig = typeof siteConfig;
