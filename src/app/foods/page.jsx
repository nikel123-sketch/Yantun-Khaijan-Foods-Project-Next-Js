import FoodCard from "@/component/Card/FoodCard";
import CartItem from "@/component/CartItem/CartItem";
import InputSearch from "@/component/InputSharch/InputSharch";
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
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-5">
        {/* Search */}
        <div className="">
          <InputSearch />
        </div>

        {/* Title */}
        <h1 className="font-bold text-2xl md:text-3xl underline text-center">
          Total Foods ({foods?.length || 0})
        </h1>

        {/* Cart */}
        <div>
          <CartItem />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {foods?.map((food) => (
          <FoodCard key={food.id || food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
