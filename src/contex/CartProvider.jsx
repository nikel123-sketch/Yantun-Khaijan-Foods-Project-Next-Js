"use client";
import React, { createContext, useState } from "react";

export const Cartcontex = createContext();

const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const Addtocart = (food) => {
    setcart((prev) => [food, ...prev]);
  };

  const cartinfo = {
    Addtocart,
    cart,
  };

  return <Cartcontex.Provider value={cartinfo}>{children}</Cartcontex.Provider>;
};

export default CartProvider;
