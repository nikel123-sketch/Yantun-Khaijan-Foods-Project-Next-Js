import React from "react";

const FoodCardSkeletion = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 border border-gray-200 space-y-3 animate-pulse">
      {/* Image */}
      <div className="w-full h-48 bg-gray-300 rounded-xl mb-3"></div>

      {/* Content */}
      <div className="space-y-2">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-5 bg-gray-300 rounded w-20"></div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        <div className="flex-1 h-8 bg-gray-300 rounded-lg"></div>
        <div className="flex-1 h-8 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default FoodCardSkeletion;
