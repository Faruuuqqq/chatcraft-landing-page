"use client"

export function SkeletonLoader() {
  return (
    <div className="space-y-4">
      <div className="h-12 bg-muted animate-shimmer rounded-lg" />
      <div className="space-y-2">
        <div className="h-4 bg-muted animate-shimmer rounded w-3/4" />
        <div className="h-4 bg-muted animate-shimmer rounded w-1/2" />
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="p-6 border border-border rounded-lg space-y-4">
      <div className="h-8 bg-muted animate-shimmer rounded w-1/2" />
      <div className="space-y-2">
        <div className="h-4 bg-muted animate-shimmer rounded" />
        <div className="h-4 bg-muted animate-shimmer rounded w-5/6" />
      </div>
      <div className="h-10 bg-muted animate-shimmer rounded w-1/3" />
    </div>
  )
}

export function GridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}
