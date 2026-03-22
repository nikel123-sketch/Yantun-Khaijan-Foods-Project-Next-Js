import React from "react";

const ReviewSkeleton = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-200 space-y-4 animate-pulse">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

        <div className="space-y-2 w-full">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="h-4 bg-gray-300 rounded w-24"></div>

      {/* Review Text */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>

      {/* Footer */}
      <div className="flex justify-between">
        <div className="h-3 bg-gray-200 rounded w-20"></div>
        <div className="h-3 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
