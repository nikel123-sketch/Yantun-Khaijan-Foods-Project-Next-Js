import FoodCard from '@/component/Card/FoodCard';
import React from 'react';

const getfoods=async()=>{
const res = await fetch(
  "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
);
const data=await res.json();
return data.foods
}

const FoodsPage =async () => {
    const foods=await getfoods();
    return (
        <div>
            <h1 className='font-bold text-center text-3xl underline'>Totall Foods ({foods.length})</h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    foods.map(food=><FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodsPage;