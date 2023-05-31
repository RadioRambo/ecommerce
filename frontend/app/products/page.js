"use client";

import FilterSection from "./FiltersSection";
import ProductsSection from "./ProductsSection";
import { useState } from "react";
import { FilterProvider } from "./FilterContext";

export default function Products() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  return (
    <FilterProvider>
      <div className="pb-20 bg-green-100">
        <div className="container mx-auto">
          <div className="px-4 pt-6 pb-4 text-5xl md:px-20">Products</div>
          <FilterSection />
          <ProductsSection />
        </div>
      </div>
    </FilterProvider>
  );
}
