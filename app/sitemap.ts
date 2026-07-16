import { MetadataRoute } from "next";
import { services, dentists } from "../lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brightsmiledental.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/blog",
    "/gallery",
    "/offers",
    "/emergency",
    "/resources",
    "/booking",
    "/services",
    "/dentists",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic service slugs
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic dentist pages
  const dentistRoutes = dentists.map((dentist) => ({
    url: `${baseUrl}/dentists/${dentist.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...dentistRoutes];
}
