import React from "react";
import { Button } from "./ui/button";
import { ArrowDownWideNarrow } from "lucide-react";

export default function SortBtn() {
  return (
    <Button className="font-bold text-lg" size="lg">
      <ArrowDownWideNarrow size={20} />
      Trier
    </Button>
  );
}
