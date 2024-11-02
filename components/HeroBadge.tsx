import { Info } from "lucide-react";
import React from "react";

export default function HeroBadge() {
  return (
    <section className="h-10 w-full mt-12 lg:mt-[4.5rem] border-b border-b-gray-300 flex items-center gap-2 max-w-6xl mx-auto">
      <div className="bg-accent h-6 w-2"></div>
      <h1 className="text-xl lg:text-2xl font-bold flex flex-nowrap items-center gap-1">
        Voiture occasion - <span className="text-accent">319 513 annonces</span>
        <Info className="w-3 h-3 cursor-pointer" />
      </h1>
    </section>
  );
}
