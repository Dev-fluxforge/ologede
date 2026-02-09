export default function Loading() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="mb-12">
          <div className="h-10 bg-muted rounded w-1/3 mb-4 animate-pulse" />
          <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
        </div>

        {/* Filters skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-1">
            <div className="h-6 bg-muted rounded mb-4 w-24 animate-pulse" />
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-muted rounded w-full animate-pulse" />
              ))}
            </div>
          </div>

          {/* Course cards skeleton */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-lg border border-border overflow-hidden animate-pulse">
                  <div className="h-48 bg-muted" />
                  <div className="p-6">
                    <div className="h-6 bg-muted rounded mb-2 w-3/4" />
                    <div className="h-4 bg-muted rounded mb-4 w-full" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
