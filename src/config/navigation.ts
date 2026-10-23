
/**
 * Centralized navigation configuration.
 *
 * Both the header and footer consume this collection
 * to keep section identifiers and translation keys
 * consistent across the application.
 */

export const navigationItems = [
  {
    id: "home",
    translationKey: "home",
  },
  {
    id: "cabins",
    translationKey: "cabins",
  },
  {
    id: "about",
    translationKey: "about",
  },
  {
    id: "contact",
    translationKey: "contact",
  },
] as const;

export type SectionId =
  (typeof navigationItems)[number]["id"];
