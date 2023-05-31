"use client";

import { useContext } from "react";
import data from "../../data/data.js";
import { CartContext } from "../CartContext.js";
import { FilterContext } from "./FilterContext.js";

export default function ProductsSection() {
  const { filteredOption } = useContext(FilterContext);
  const filteredData =
    filteredOption === "all"
      ? data
      : data.filter((product) => product.size === filteredOption);

  const { addToCart } = useContext(CartContext);
  return (
    <div className="grid grid-cols-1 gap-y-12 place-items-center px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:px-20">
      {filteredData.map((product) => (
        <div key={product.id} className=" bg-green-600 p-4 w-[256px] ">
          <div className="p-2 w-full bg-green-300 shadow-lg h-fit">
            <img src={product.photo} />
          </div>
          <div className="p-2 mt-8 bg-green-300/20">
            <p className="mb-1 text-xl font-normal text-green-50 whitespace-nowrap">
              {product.product}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm font-normal">
                <span className="text-green-900">Rs</span> {product.price}
              </p>
              <button
                onClick={() => {
                  addToCart(product);
                }}
                className="px-4 py-1 text-sm text-white bg-green-800 shadow-sm hover:bg-green-900 active:bg-green-800"
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
