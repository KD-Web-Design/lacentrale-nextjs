"use client";

import React from "react";
import Link from "next/link";
import { Switch } from "../../ui/switch";
import { MobileFilterLayout } from "../layout/MobileFilterLayout";

export default function MobileHistoricFilter() {
  return (
    <MobileFilterLayout title="Historique">
      <Link href="#" className="flex justify-between">
        <span className="text-sm font-normal">Première main</span>
        <Switch />
      </Link>
      <Link href="#" className="flex justify-between">
        <span className="text-sm font-normal">Historique du véhicule</span>
        <Switch />
      </Link>
    </MobileFilterLayout>
  );
}
