import React from "react";
import { Input } from "../../ui/input";
import { MobileFilterLayout } from "../layout/MobileFilterLayout";

export default function MobilePriceFilter() {
  return (
    <MobileFilterLayout title="Prix">
      <div className="w-full flex items-center justify-between gap-3">
        <Input placeholder="min" type="number" className="font-normal" />
        <Input placeholder="max" type="number" className="font-normal" />
      </div>
    </MobileFilterLayout>
  );
}
