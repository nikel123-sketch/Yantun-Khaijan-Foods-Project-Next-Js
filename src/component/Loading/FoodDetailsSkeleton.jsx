import React from "react";

const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="shadow-xl rounded-2xl p-4 border border-gray-200 space-y-3 animate-pulse">
        {/* Image */}
        <div className="w-full h-80 bg-gray-300 rounded-xl mb-3"></div>

        {/* Content */}
        <div className="space-y-2">
          {/* Title */}
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>

          {/* Category */}
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>

          {/* Price */}
          <div className="h-5 bg-gray-300 rounded w-20"></div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
