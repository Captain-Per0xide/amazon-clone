"use client";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import Image from "next/image";
import React from "react";

const ShoppingCart = () => {
  const cart = useAppSelector(getCart);

  return (
    <div>
      <h1 className="font-bold text-2xl">Shopping Cart</h1>
      {cart.map((product: any) => (
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={product.image}
            width={200}
            height={300}
            alt={product.title}
          />
          <div>
            <h2>{product.title}</h2>
            <h3>Price: ${product.price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
