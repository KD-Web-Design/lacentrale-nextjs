import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

export default function MobileDoorsFilter() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-gray-100 w-full h-9 px-4 flex items-center">
          <span className="font-semibold">Places & Portes</span>
        </header>
        <div className="w-full flex flex-col gap-3 space-y-2 p-4 border">
          <Link
            href="#"
            className="flex justify-between hover:text-accent"
            // onClick={() => setIsOverlayVisible(true)}
          >
            <span className="text-sm font-normal">Nombre de places</span>
            <ChevronRight size={24} />
          </Link>
          <Link href="#" className="flex justify-between hover:text-accent">
            <span className="text-sm font-normal">Nombre de portes</span>
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>
    </main>
  );
}
