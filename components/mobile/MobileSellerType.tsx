import React from "react";
import { sellerType } from "@/data/navigationData";
import { MobileFilterLayout } from "./layout/MobileFilterLayout";

export default function MobileSellerType() {
  return (
    <MobileFilterLayout title="Type de vendeur">
      <div className="w-full flex items-center gap-3">
        {sellerType.map(({ id, type }) => (
          <a
            key={id}
            href="#"
            className="relative overflow-hidden rounded-lg flex items-center justify-center border h-fit group w-1/2"
          >
            <span className="font-light text-sm p-3 relative z-10">{type}</span>
            <span className="absolute inset-0 bg-gray-100 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
          </a>
        ))}
      </div>
    </MobileFilterLayout>
  );
}
