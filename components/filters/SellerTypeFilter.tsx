import { sellerType } from "@/data/navigationData";
import React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export default function SellerTypeFilter() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-muted py-2 px-4 border-b">
          <span className="font-semibold text-md">Type de vendeur</span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          {sellerType.map((item) => (
            <Label
              key={item.id}
              className="cursor-pointer flex items-center gap-2 rounded-sm relative"
              htmlFor={`seller-${item.id}`}
            >
              <Checkbox id={`seller-${item.id}`} />
              {item.type}
            </Label>
          ))}
        </div>
      </div>
    </div>
  );
}
