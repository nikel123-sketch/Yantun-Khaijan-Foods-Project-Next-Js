import React from "react";

const FeedbackSkeleton = () => {
  return (
    <div className="space-y-4">
      
        <div
          
          className="bg-white shadow-md rounded-xl p-4 border animate-pulse"
        >
          {/* Name placeholder */}
          <div className="h-5 bg-gray-300 rounded w-1/3 mb-2"></div>

          {/* Message placeholder */}
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>

          {/* Date placeholder */}
          <div className="h-3 bg-gray-300 rounded w-1/4 mt-3"></div>

          {/* Buttons placeholder */}
          <div className="flex gap-3 mt-4">
            <div className="h-8 w-20 bg-gray-300 rounded"></div>
            <div className="h-8 w-20 bg-gray-300 rounded"></div>
          </div>
        </div>
    
    </div>
  );
};

export default FeedbackSkeleton;
