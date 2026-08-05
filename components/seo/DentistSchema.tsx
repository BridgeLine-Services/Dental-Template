import { siteConfig } from '@/lib/config'
export default function DentistSchema({ name, medicalSpecialty, image, description }: { name: string; medicalSpecialty?: string; image?: string; description?: string }) {
  const schema = { "@context": "https://schema.org", "@type": "Physician", name, medicalSpecialty: medicalSpecialty || "Dentistry", image, description, address: { "@type": "PostalAddress", streetAddress: siteConfig.address.street, addressLocality: siteConfig.address.city, addressRegion: siteConfig.address.state, postalCode: siteConfig.address.zip }, telephone: siteConfig.phone, hospital: { "@type": "Dentist", name: siteConfig.name } }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
