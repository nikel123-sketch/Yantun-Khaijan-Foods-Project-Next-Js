import FoodCardSkeletion from '@/component/Loading/FoodCardSkeletion';
import React from 'react';

const loading = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {[...Array(12)].map((_, i) => (
          <FoodCardSkeletion key={i}></FoodCardSkeletion>
        ))}
      </div>
    );
};

export default loading;