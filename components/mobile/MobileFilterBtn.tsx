"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";
import MobileFilters from "./filters/MobileFilters";

export default function FilterBtn() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleToggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  return (
    <>
      <Button
        className="font-bold text-lg bg-zinc-800 text-white relative group overflow-hidden"
        size="lg"
        variant="myvariant2"
        onClick={handleToggleFilters}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          <SlidersHorizontal size={20} />
          Filtrer
        </span>
        <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
      </Button>
      {isFiltersVisible && <MobileFilters onClose={handleToggleFilters} />}
    </>
  );
}
