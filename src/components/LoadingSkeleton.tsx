import React from 'react';
interface LoadingSkeletonProps {
  className?: string;
}
export function LoadingSkeleton({ className = '' }: LoadingSkeletonProps) {
  return <div className={`bg-gray-200 animate-shimmer ${className}`} />;
}
export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col space-y-4">
      <LoadingSkeleton className="w-full aspect-[3/4] rounded-sm" />
      <div className="space-y-2">
        <LoadingSkeleton className="h-4 w-3/4" />
        <LoadingSkeleton className="h-4 w-1/4" />
      </div>
    </div>);

}