import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Makkah Dental Care",
    short_name: "Makkah Dental",
    description: "Your Smile, Our Priority",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a7b83",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
