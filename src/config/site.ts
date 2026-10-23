
/**
 * Centralized public configuration.
 *
 * Business information and asset paths are maintained
 * in one place to avoid duplication across the website.
 */

const locationQuery =
  "9CQ9+H8V, San Ramón, Alajuela, Costa Rica";

export const siteConfig = {
  name: "Cabañas Don Augusto",

  location: {
    city: "San Isidro",
    district: "Peñas Blancas",
    canton: "San Ramón",
    province: "Alajuela",
    country: "Costa Rica",
    plusCode: "9CQ9+H8V",
  },

  cabins: {
    total: 3,
  },

  images: {
    hero: "/images/cabins/hero-cabins.jpg",
  },

  maps: {
    searchUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(locationQuery),
  },
} as const;
