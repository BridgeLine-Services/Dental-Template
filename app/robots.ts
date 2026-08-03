import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://brightsmiledental.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/login/", "/portal/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
