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
        className="font-bold text-lg"
        size="lg"
        onClick={handleToggleFilters}
      >
        <SlidersHorizontal size={20} />
        Filtrer
      </Button>
      {isFiltersVisible && <MobileFilters onClose={handleToggleFilters} />}
    </>
  );
}
