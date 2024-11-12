import { sellerType } from "@/data/navigationData";
import React from "react";

export default function MobileSellerType() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-gray-100 w-full h-9 px-4 flex items-center">
          <span className="font-semibold">Type de vendeur</span>
        </header>
        <div className="w-full flex items-center gap-3 p-4 border">
          {sellerType.map(({ id, type }) => (
            <a
              key={id}
              href="#"
              className="relative overflow-hidden rounded-lg flex items-center justify-center border h-fit group w-1/2"
            >
              <span
                id="carburants"
                className="font-light text-sm p-3 relative z-10"
              >
                {type}
              </span>
              <span className="absolute inset-0 bg-gray-100 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
