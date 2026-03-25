
import Link from "next/link";
import React from "react";
import Add2Cart from "../Button/Add2Cart";
import Image from "next/image";

const FoodCard = ({ food }) => {
 
  const { id, catId, category, foodImg, price, title } = food;

  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 border border-gray-200 hover:shadow-2xl transition">
      {/* Image */}
      <Image
        src={foodImg}
        alt={title}
        width={400}
        height={400}
        className="w-full h-auto rounded-xl mb-3 border-4 border-green-500"
      />

      {/* Content */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        <p className="text-sm text-gray-500">
          Category: <span className="font-semibold">{category}</span>
        </p>

        <p className="text-lg font-bold text-amber-500">${price}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        {/* Add to Cart */}
        <Add2Cart food={food}></Add2Cart>

        {/* Details */}
        <Link
          href={`/foods/${id}`}
          className="flex-1 text-center bg-blue-500 text-white py-1.5 rounded-lg hover:bg-blue-600 transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
