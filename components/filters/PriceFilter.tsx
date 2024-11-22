import React from "react";
import { Input } from "../ui/input";

export default function PriceFilter() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-muted py-2 px-4 border-b">
          <span className="font-semibold text-md">Prix</span>
        </div>
        <div className="flex gap-2 p-4">
          <Input placeholder="min" className="rounded" type="number" />
          <Input placeholder="max" className="rounded" type="number" />
        </div>
      </div>
    </div>
  );
}
