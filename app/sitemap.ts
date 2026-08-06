import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brightsmiledental.com";
  const lastModified = new Date();

  const staticRoutes = [
    "", "/services", "/dentists", "/about", "/gallery", "/blog", "/offers",
    "/contact", "/faq", "/booking", "/emergency", "/resources", "/login",
    "/consent-forms", "/insurance-verification", "/smile-assessment",
    "/cost-estimator", "/telehealth", "/hipaa-notice", "/privacy-policy",
    "/terms", "/accessibility", "/payment", "/membership", "/referral",
    "/waitlist", "/financing-calculator", "/online-check-in", "/staff",
    "/office-tour", "/multi-location", "/ai-receptionist",
    "/forms/new-patient", "/forms/medical-history", "/forms/treatment-consent",
    "/forms/xray-consent", "/forms/financial-policy", "/forms/insurance-assignment",
    "/legal/cookie-policy", "/legal/disclaimer", "/legal/copyright", "/legal/dmca",
    "/legal/data-retention", "/legal/ai-disclosure", "/legal/accessibility",
    "/legal/no-medical-advice", "/legal/financial-policy", "/legal",
    "/offline",
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceSlugs = [
    "general-dentistry", "cosmetic-dentistry", "teeth-whitening", "dental-implants",
    "invisalign", "veneers", "crowns", "bridges", "root-canals", "fillings",
    "extractions", "dentures", "pediatric-dentistry", "emergency-dentistry",
    "gum-disease-treatment", "sedation-dentistry", "oral-surgery",
    "wisdom-teeth-removal", "preventive-care",
  ].map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogSlugs = [
    "proper-brushing-technique", "flossing-importance", "teeth-whitening-options",
    "dental-implants-guide", "childrens-dental-care", "invisalign-treatment",
    "gum-disease-prevention", "oral-health-tips",
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceSlugs, ...blogSlugs];
}
