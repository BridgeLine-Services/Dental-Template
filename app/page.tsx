import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { DentistsSection } from "@/components/home/DentistsSection";
import { OfficeInfo } from "@/components/home/OfficeInfo";
import { Insurance } from "@/components/home/Insurance";
import { Reviews } from "@/components/home/Reviews";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { FAQ } from "@/components/home/FAQ";
import { SpecialOffers } from "@/components/home/SpecialOffers";
import { EmergencySection } from "@/components/home/EmergencySection";
import { CTASection } from "@/components/home/CTASection";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "Bright Smile Dental — comprehensive, compassionate dental care in Springfield, CA. Cosmetic dentistry, implants, Invisalign, emergency dentistry, and more. Book your appointment today!",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesGrid />
      <DentistsSection />
      <OfficeInfo />
      <Insurance />
      <Reviews />
      <GalleryPreview />
      <SpecialOffers />
      <EmergencySection />
      <FAQ />
      <CTASection />
    </>
  );
}
