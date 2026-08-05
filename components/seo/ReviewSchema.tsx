export default function ReviewSchema({ reviews, avgRating, reviewCount, itemName }: { reviews: { author: string; rating: number; text: string }[]; avgRating: number; reviewCount: number; itemName: string }) {
  const schema = { "@context": "https://schema.org", "@type": "MedicalOrganization", name: itemName, aggregateRating: { "@type": "AggregateRating", ratingValue: avgRating, reviewCount }, review: reviews.map(r => ({ "@type": "Review", author: { "@type": "Person", name: r.author }, reviewRating: { "@type": "Rating", ratingValue: r.rating }, reviewBody: r.text })) }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
