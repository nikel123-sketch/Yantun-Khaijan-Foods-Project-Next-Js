import FeedbackSkeleton from '@/component/Loading/FeedbackSkeleton';
import React from 'react';

const loading = () => {
    return (
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {[...Array(12)].map((_, i) => (
          <FeedbackSkeleton key={i}></FeedbackSkeleton>
        ))}
      </div>
    );
};

export default loading;