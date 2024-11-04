import React from "react";
import { Button } from "./ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function FilterBtn() {
  return (
    <Button className="font-bold text-lg" size="lg">
      <SlidersHorizontal size={20} />
      Filtrer
    </Button>
  );
}
