export default function ServiceSchema({ name, description, procedure, preparation, followup, url }: { name: string; description?: string; procedure?: string; preparation?: string; followup?: string; url?: string }) {
  const schema: any = { "@context": "https://schema.org", "@type": "MedicalProcedure", name, description, url }
  if (procedure) schema.howPerformed = procedure
  if (preparation) schema.preparation = preparation
  if (followup) schema.followup = followup
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
