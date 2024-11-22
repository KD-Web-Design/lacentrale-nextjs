import Link from "next/link";
import React from "react";
import { Switch } from "../ui/switch";

export default function HistoricFilter() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-muted py-2 px-4 border-b">
          <span className="font-semibold text-md">Historique</span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          <Link href="#" className="flex justify-between">
            <span className="text-sm font-normal">Première main</span>
            <Switch />
          </Link>
          <Link href="#" className="flex justify-between">
            <span className="text-sm font-normal">Historique du véhicule</span>
            <Switch />
          </Link>
        </div>
      </div>
    </div>
  );
}
