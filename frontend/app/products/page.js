import FilterSection from "./FiltersSection";
import ProductsSection from "./ProductsSection";

export default function Products() {
  return (
    <div className="bg-green-100">
      <div className="container mx-auto">
        <div className="px-4 md:px-20 text-5xl pb-4 pt-6">Products</div>
        <FilterSection />
        <ProductsSection />
      </div>
    </div>
  );
}
