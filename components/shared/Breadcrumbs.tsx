import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

interface BreadcrumbItem {
  label?: string
  name?: string
  href?: string
  url?: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map(item => ({
    label: item.label || item.name || '',
    href: item.href || item.url || '',
  }))

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-slate-500 mb-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-1">
            {i < items.length - 1 ? (
              <>
                <Link href={item.href || item.url || '#'} className="hover:text-brand-600 transition-colors">
                  {item.label || item.name}
                </Link>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </>
            ) : (
              <span className="text-slate-700 font-medium" aria-current="page">
                {item.label || item.name}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}
