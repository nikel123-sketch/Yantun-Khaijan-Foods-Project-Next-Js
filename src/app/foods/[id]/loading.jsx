import FoodDetailsSkeleton from '@/component/Loading/FoodDetailsSkeleton';
import React from 'react';

const LoadingDetails = () => {
    return (
        <div>
            {
                [...Array(1)].map((_,i)=><FoodDetailsSkeleton key={i}></FoodDetailsSkeleton>)
            }
        </div>
    );
};

export default LoadingDetails;