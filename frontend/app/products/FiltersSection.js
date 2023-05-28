import { FilterContext } from "./FilterContext";
import { useContext } from "react";

export default function FilterSection() {
  const { setFilteredOption } = useContext(FilterContext);

  const handleOptionChange = (event) => {
    setFilteredOption(event.target.value);
  };

  return (
    <div className="bg-green-50 mb-10">
      <div className="container mx-auto">
        <div className="p-4 md:px-20 md:py-4  flex gap-8">
          <h2 className="">Filters</h2>
          <select className="px-2" onChange={handleOptionChange}>
            <option value="all">All</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="big">Big</option>
          </select>
        </div>
      </div>
    </div>
  );
}
