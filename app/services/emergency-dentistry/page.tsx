import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import { generateMetadata as baseGenerateMetadata } from '@/lib/seo';
import { ServiceDetail } from '@/components/shared/ServiceDetail';

interface PageProps {
  params: {
    slug: string;
  };
}

const SLUG = 'emergency-dentistry';

export async function generateMetadata() {
  const service = services.find((s) => s.slug === SLUG);
  if (!service) return {};

  return baseGenerateMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${SLUG}`,
    image: service.image
  });
}

export default function ServicePage() {
  const service = services.find((s) => s.slug === SLUG);
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
