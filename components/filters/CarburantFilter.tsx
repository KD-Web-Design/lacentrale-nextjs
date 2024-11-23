"use client";

import React, { useCallback } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { useApi } from "@/hooks/useApi";
import { useApiData } from "@/data/navigationData";

export default function CarburantFilter() {
  const transformCarburants = useCallback(
    (data: useApiData[]) => data.map((c) => c.type),
    []
  );
  const carburants = useApi<string, useApiData>(
    "/api/carburant",
    transformCarburants
  );
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-muted py-2 px-4 border-b">
          <span className="font-semibold text-md">Carburant</span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          {carburants.map((type, index) => (
            <Label
              key={index}
              className="cursor-pointer flex items-center gap-2 rounded-sm relative"
              htmlFor={`carburant-${index}`}
            >
              <Checkbox id={`carburant-${index}`} />
              {type}
            </Label>
          ))}
        </div>
      </div>
    </div>
  );
}
