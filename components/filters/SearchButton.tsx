import React from "react";
import { Button } from "../ui/button";

export default function SearchButton() {
  return (
    <div className="sticky bottom-0 bg-white shadow-lg py-2 px-4 flex items-center justify-center w-72 mt-4">
      <Button
        className="relative overflow-hidden flex items-center justify-center group p-6"
        variant="myvariant2"
        size="lg"
      >
        <span className="relative z-10">Rechercher (322 318)</span>
        <span className="absolute inset-0 bg-[#E30046] scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
      </Button>
    </div>
  );
}
