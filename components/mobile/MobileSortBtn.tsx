"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowDownWideNarrow } from "lucide-react";
import MobileSort from "./filters/MobileSort";

export default function SortBtn() {
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
        <ArrowDownWideNarrow size={20} />
        Trier
      </Button>
      {isFiltersVisible && <MobileSort onClose={handleToggleFilters} />}
    </>
  );
}
