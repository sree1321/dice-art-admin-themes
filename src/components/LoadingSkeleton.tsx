
import React from "react";

interface LoadingSkeletonProps {
  className?: string;
  rows?: number;
}

export function LoadingSkeleton({ className = "", rows = 3 }: LoadingSkeletonProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="animate-shimmer">
          <div className="h-4 bg-gradient-to-r from-muted via-muted/50 to-muted rounded-md mb-2 animate-wave"></div>
          <div className="h-3 bg-gradient-to-r from-muted via-muted/50 to-muted rounded-md w-3/4 animate-wave delay-200"></div>
        </div>
      ))}
    </div>
  );
}
