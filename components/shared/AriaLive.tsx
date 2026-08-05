export default function AriaLive({ message, politeness = 'polite' }: { message: string; politeness?: 'polite' | 'assertive' }) {
  return <div aria-live={politeness} role="status" className="sr-only">{message}</div>
}
