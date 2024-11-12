import Link from "next/link";
import React from "react";

import { Switch } from "../ui/switch";

export default function MobileHistoricFilter() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-gray-100 w-full h-9 px-4 flex items-center">
          <span className="font-semibold">Historique</span>
        </header>
        <div className="w-full flex flex-col gap-3 space-y-2 p-4 border">
          <Link
            href="#"
            className="flex justify-between"
            // onClick={() => setIsOverlayVisible(true)}
          >
            <span className="text-sm font-normal">Première main</span>
            <Switch />
          </Link>
          <Link href="#" className="flex justify-between">
            <span className="text-sm font-normal">Historique du véhicule</span>
            <Switch />
          </Link>
        </div>
      </div>
    </main>
  );
}
