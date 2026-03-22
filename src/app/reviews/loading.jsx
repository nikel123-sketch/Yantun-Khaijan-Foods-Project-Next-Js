import ReviewSkeleton from '@/component/Loading/ReviewSkeleton';
import React from 'react';

const loading = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {[...Array(12)].map((_, i) => (
          <ReviewSkeleton key={i}></ReviewSkeleton>
        ))}
      </div>
    );
};

export default loading;