export type SectionId = "home" | "benefits" | "ourClasses" | "contactUs";

export const navLinks: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "benefits", label: "Benefits" },
  { id: "ourClasses", label: "Our Classes" },
  { id: "contactUs", label: "Contact Us" },
];
