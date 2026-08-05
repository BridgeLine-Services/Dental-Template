import { siteConfig } from '@/lib/config'
export default function OrganizationSchema() {
  const schema = { "@context": "https://schema.org", "@type": "DentalOrganization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email, telephone: siteConfig.phone, address: { "@type": "PostalAddress", streetAddress: siteConfig.address.street, addressLocality: siteConfig.address.city, addressRegion: siteConfig.address.state, postalCode: siteConfig.address.zip }, geo: { "@type": "GeoCoordinates", latitude: siteConfig.geo.lat, longitude: siteConfig.geo.lng }, sameAs: Object.values(siteConfig.social), openingHours: siteConfig.hours.map(h => `${h.day} ${h.hours}`) }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
