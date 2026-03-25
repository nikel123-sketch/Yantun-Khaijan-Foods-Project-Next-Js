import Link from "next/link";
import React from "react";

export async function generateMetadata({ params }) {
  const {id}=await params;

  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  )
  const data=await res.json();
  const fooddata=data.details;

  return {
    title: fooddata?.title || "Food Details",
    description: `Details about ${fooddata?.title || "food item"}`,
  };

}


// Server-side fetch for a single food
const getSingleData = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await res.json();

  return data.details;
};

const FoodDetails = async ({ params }) => {
  
  const { id } = await params;

  // Fetch single food
  const food = await getSingleData(id);

  if (!food) {
    return (
      <div className="text-center mt-10 text-red-500 font-bold">
        Food not found
      </div>
    );
  }

  const { category, foodImg, price, title, video } = food;

  return (
    <div>
      <div className=" shadow-xl rounded-2xl p-4 border border-gray-200 hover:shadow-2xl transition max-w-md mx-auto">
        {/* Image */}
        <img
          src={foodImg}
          alt={title}
          className="w-full h-80 sm:h-64 md:h-80 object-cover rounded-xl mb-3 border-4 border-green-500"
        />

        {/* Content */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>

          <p className="text-sm text-gray-500">
            Category: <span className="font-semibold">{category}</span>
          </p>

          <p className="text-lg font-bold text-amber-500">${price}</p>
        </div>

        {/* Button */}
        <div className="text-center mt-4">
          <Link
            href="/foods"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Go To Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
