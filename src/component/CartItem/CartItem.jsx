"use client";
import { Cartcontex } from "@/contex/CartProvider";
import Link from "next/link";
import React, { useContext } from "react";

const CartItem = () => {
  const { cart } = useContext(Cartcontex);

  return (
    <Link
      href="/allcart"
      className="relative inline-flex items-center gap-1 px-4 py-2 font-semibold  hover:text-green-600 transition text-xl  underline"
    >
      🛒 Cart
      {/* Badge */}
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
        {cart.length}
      </span>
    </Link>
  );
};

export default CartItem;
