import { siteConfig } from '@/lib/config'

interface SchemaItem {
  label?: string
  name?: string
  href?: string
  url?: string
}

export default function BreadcrumbSchema({ items }: { items: SchemaItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label || item.name || '',
      item: `${siteConfig.url}${item.href || item.url || ''}`,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
