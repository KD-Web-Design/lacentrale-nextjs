import { Info } from "lucide-react";
import React from "react";

export default function HeroBadge() {
  return (
    <section className="h-16 w-full mt-14 border-b border-b-gray-400 flex gap-2">
      <div className="bg-accent h-14 w-2"></div>
      <h1 className="text-xl font-bold">
        Voiture occasion - <span className="text-accent">319 513 annonces</span>
        <Info className="w-4 h-4" />
      </h1>
    </section>
  );
}
