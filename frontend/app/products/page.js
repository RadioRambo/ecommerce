"use client";

import FilterSection from "./FiltersSection";
import ProductsSection from "./ProductsSection";
import { useState } from "react";
import { FilterProvider } from "./FilterContext";

export default function Products() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  return (
    <FilterProvider>
      <div className="bg-green-100 pb-20">
        <div className="container mx-auto">
          <div className="px-4 md:px-20 text-5xl pb-4 pt-6">Products</div>
          <FilterSection />
          <ProductsSection />
        </div>
      </div>
    </FilterProvider>
  );
}
