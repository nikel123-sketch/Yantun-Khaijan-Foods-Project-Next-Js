"use client";
import { Cartcontex } from "@/contex/CartProvider";
import Link from "next/link";
import React, { useContext } from "react";

const AllCart = () => {
  const { cart} = useContext(Cartcontex);

  

  

  return (
    <div className="  ">
      {/* Title */}
      <h1 className="font-bold text-3xl text-center underline mb-6">
        Total Cart: {cart.length}
      </h1>

      {/* Empty Cart */}
      {cart.length === 0 && (
        <div className="text-center space-y-3">
          <p className="text-gray-500">Your cart is empty</p>
          <Link
            href="/foods"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Go to Foods
          </Link>
        </div>
      )}

      {/* Cart Items */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-4 border"
          >
            <img
              src={item.foodImg}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="text-xl font-bold mt-3 text-black">{item.title}</h2>

            <p className="text-gray-500">Category: {item.category}</p>

            <p className="text-green-600 font-semibold mt-1">
              Price: ${item.price}
            </p>

           

            {/* Link */}
            <Link
              href="/foods"
              className="mt-3 w-full bg-red-500 text-white py-1.5 rounded-lg hover:bg-red-600 transition p-2 "
            >
              All Foods
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AllCart;
