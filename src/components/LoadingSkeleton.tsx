
import React from "react";

interface LoadingSkeletonProps {
  className?: string;
  rows?: number;
}

export function LoadingSkeleton({ className = "", rows = 3 }: LoadingSkeletonProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="loading-skeleton h-4 rounded-md mb-2"></div>
          <div className="loading-skeleton h-3 rounded-md w-3/4"></div>
        </div>
      ))}
    </div>
  );
}
