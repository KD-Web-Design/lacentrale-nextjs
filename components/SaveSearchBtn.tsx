import React from "react";
import { Button } from "./ui/button";
import { BellRing } from "lucide-react";

export default function SaveSearchBtn() {
  return (
    <Button
      className="w-[300px] mx-auto font-bold text-xl flex items-center"
      size="lg"
    >
      <BellRing size={24} />
      Enregistrer ma recherche
    </Button>
  );
}
