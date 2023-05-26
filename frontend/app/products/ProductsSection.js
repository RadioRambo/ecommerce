"use client";

import { useState, useEffect } from "react";

export default function ProductsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await fetch("https://fakestoreapi.com/products");
      const productsData = await data.json();
      console.log(productsData);
      setProducts(productsData);
    }
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-y-12 align-middle justify-between px-4 md:px-20 ">
      {products.map((product) => (
        <div key={product.id} className=" bg-green-600 p-4 w-[274px] ">
          <div className="h-72 w-60 bg-green-300 shadow-lg"></div>
          <div className="mt-8 bg-green-300/20 p-2">
            <p className="text-xl font-normal mb-1 text-green-50">
              product name
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-normal">
                <span className="text-green-300">Rs</span> 400
              </p>
              <button className="bg-green-800 text-white text-sm shadow-sm py-1 px-4">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
