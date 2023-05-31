"use client";

import { useContext, useState, useEffect } from "react";
import data from "../data/data.js";
import { CartContext } from "./CartContext.js";
import moment from "moment";

export default function DealOfTheDaySection() {
  const [countdown, setCountdown] = useState(3600);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = moment.utc(countdown * 1000).format("HH:mm:ss");
  const filteredData = data.filter((product) => product.id <= 6);
  return (
    <div className="pb-20 bg-green-700">
      <div className="container mx-auto">
        <div className="px-4 pt-16 text-green-50 md:px-20">
          <div className="mb-8 text-3xl font-bold md:text-4xl md:mb-4">
            Deals of the day
          </div>
          <div className="flex gap-4 justify-start mb-6 md:mb-14">
            <p className="text-lg font-normal text-green-300">Time Left</p>
            <p className="text-lg font-semibold text-green-50 md:w-fit">
              {formattedTime}
            </p>
          </div>
          <div className="overflow-x-scroll pb-2">
            <div className="flex gap-2 md:gap-6 w-fit">
              {filteredData.map((product) => (
                <div key={product.id} className="p-4 w-64 bg-green-600">
                  <div className="p-2 w-full bg-green-300 shadow-lg h-fit">
                    <img src={product.photo} />
                  </div>
                  <div className="p-2 mt-8 bg-green-300/20">
                    <p className="mb-1 text-xl font-normal text-green-50 whitespace-nowrap">
                      {product.product}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-normal">
                        <span className="text-green-900">Rs</span>{" "}
                        {product.price}
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
          </div>
        </div>
      </div>
    </div>
  );
}
