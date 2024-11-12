import React from "react";
import { Input } from "../ui/input";

export default function MobilePriceFilter() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border h-28 overflow-hidden">
        <header className="bg-gray-100 w-full h-1/3 px-4 flex items-center">
          <span className="font-semibold">Prix</span>
        </header>
        <div className="w-full h-2/3 flex items-center justify-between gap-3 px-4 border">
          <Input placeholder="min" type="number" />
          <Input placeholder="max" type="number" />
        </div>
      </div>
    </main>
  );
}
