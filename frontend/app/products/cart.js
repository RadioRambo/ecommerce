"use client";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext.js";

export default function Cart() {
  const [total, setTotal] = useState(0);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += Number(item.price);
    });
    setTotal(sum);
  }, [cartItems]);

  return (
    <div className="flex flex-col justify-between p-4 w-96 h-96 bg-green-900 shadow-2xl  md:mx-20">
      <div className="overflow-y-scroll overscroll-contain">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between px-4 py-2 m-2 text-xl text-green-50 bg-green-700"
          >
            <div className="font-normal">{item.product}</div>
            <div className="">₹ {item.price}</div>
          </div>
        ))}
      </div>
      <div className="">
        <div className="flex justify-between px-4 py-2 mt-8 text-2xl text-green-50 bg-green-950">
          <div>Total</div>
          <div>₹ {total}</div>
        </div>

        <button className="px-4 py-2 my-2 w-full text-xl bg-green-400 text-green-950">
          Buy Now
        </button>
      </div>
    </div>
  );
}
