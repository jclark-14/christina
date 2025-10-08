export const navigationItems = [
  { id: "about", label: "About" },
  { id: "mission", label: "Mission" },
  { id: "offerings", label: "Offerings" },
  { id: "giving", label: "Giving" },
  { id: "contact", label: "Contact" }
];

export type NavigationItem = (typeof navigationItems)[number];
