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
    <div className=" flex flex-col justify-between h-96 shadow-2xl  md:mx-20   bg-green-900 p-4 w-96 ">
      <div className="overflow-y-scroll overscroll-contain">
        {cartItems.map((item) => (
          <div key={item.id} className="px-4 py-2 m-2 text-xl bg-green-700 text-green-50 flex justify-between">
            <div className="font-normal ">{item.product}</div>
            <div className="">₹ {item.price}</div>
          </div>
        ))}
      </div>
      <div className="">
        <div className="px-4 py-2 mt-8 bg-green-950  text-2xl text-green-50 flex justify-between">
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
