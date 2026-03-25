import FoodCard from "@/component/Card/FoodCard";
import React from "react";

const getfoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    
  );

  const data = await res.json();
  console.log(data);

  return data.foods || [];
};

const FoodsPage = async ({ searchParams }) => {
  
  const { search = "" } = await searchParams;
  
  const foods = await getfoods(search);

  return (
    <div>
      <h1 className="font-bold text-center text-3xl underline">
        Total Foods ({foods?.length || 0})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {foods?.map((food) => (
          <FoodCard key={food.id || food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
