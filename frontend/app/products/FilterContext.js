"use client";
import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filteredOption, setFilteredOption] = useState("all");

  return (
    <FilterContext.Provider value={{ filteredOption, setFilteredOption }}>
      {children}
    </FilterContext.Provider>
  );
};
