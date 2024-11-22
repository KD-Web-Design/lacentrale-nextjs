import React from "react";
import { Button } from "./ui/button";
import { BellRing } from "lucide-react";

export default function SaveSearchBtn() {
  return (
    <Button
      className="sticky bottom-6 rounded-lg w-[300px] mx-auto font-bold text-xl flex items-center bg-zinc-800 overflow-hidden group"
      size="lg"
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        <BellRing size={24} />
        Enregistrer ma recherche
      </span>
      <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
    </Button>
  );
}
