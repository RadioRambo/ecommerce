"use client";

import { useContext } from "react";
import data from "../../data/data.js";
import { CartContext } from "../CartContext.js";

export default function ProductsSection() {
  const { cartItems, addToCart } = useContext(CartContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-y-12 align-middle justify-between px-4 md:px-20 ">
      {data.map((product) => (
        <div key={product.id} className=" bg-green-600 p-4 w-[256px] ">
          <div className="h-fit w-full p-2 bg-green-300 shadow-lg">
            <img src={product.photo} />
          </div>
          <div className="mt-8 bg-green-300/20 p-2">
            <p className="text-xl font-normal mb-1 text-green-50">
              {product.product}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-normal">
                <span className="text-green-900">Rs</span> {product.price}
              </p>
              <button
                onClick={() => {
                  addToCart(product);
                }}
                className="bg-green-800 text-white text-sm shadow-sm py-1 px-4"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
