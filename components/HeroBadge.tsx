import { Info } from "lucide-react";
import React from "react";

export default function HeroBadge() {
  return (
    <section className="w-full mt-12 pb-3 p-4 lg:mt-[4.5rem] border-b flex items-center gap-2 max-w-6xl mx-auto">
      <div className="bg-accent h-6 w-2"></div>
      <h1 className="text-xl lg:text-2xl font-bold">
        Voiture occasion - <span className="text-accent">319 513 annonces</span>
      </h1>
      <Info className="w-3 h-3 cursor-pointer" />
    </section>
  );
}
