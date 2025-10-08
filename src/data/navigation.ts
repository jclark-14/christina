export const navigationItems = [
  { id: "mission", label: "Mission" },
  { id: "classes", label: "Classes" },
  { id: "giving", label: "Giving" },
  { id: "contact", label: "Contact" }
];

export type NavigationItem = (typeof navigationItems)[number];
