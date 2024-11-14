import React from "react";
import { priceIndex } from "@/data/navigationData";
import { MobileFilterLayout } from "./layout/MobileFilterLayout";

export default function MobilePriceIndexFilter() {
  return (
    <MobileFilterLayout title="Indicateur de prix">
      <div className="w-full flex flex-wrap items-center gap-3">
        {priceIndex.map(({ id, name }) => (
          <a
            key={id}
            href="#"
            className="relative overflow-hidden rounded-lg flex items-center justify-center border h-fit group"
          >
            <span className="font-light text-sm p-3 relative z-10">{name}</span>
            <span className="absolute inset-0 bg-gray-100 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
          </a>
        ))}
      </div>
    </MobileFilterLayout>
  );
}
