export function LoadingSkeleton({ className = "" }: { className?: string }) {
  return <div className={`bg-muted rounded-lg animate-pulse ${className}`} />
}

export function CardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4">
      <LoadingSkeleton className="h-6 w-3/4" />
      <LoadingSkeleton className="h-4 w-full" />
      <LoadingSkeleton className="h-4 w-5/6" />
    </div>
  )
}

export function FormSkeleton() {
  return (
    <div className="space-y-4">
      <LoadingSkeleton className="h-10 w-full" />
      <LoadingSkeleton className="h-10 w-full" />
      <LoadingSkeleton className="h-10 w-full" />
    </div>
  )
}
