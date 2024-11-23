import React, { useCallback } from "react";
import { MobileFilterLayout } from "../layout/MobileFilterLayout";
import { useApi } from "@/hooks/useApi";
import { useApiData } from "@/data/navigationData";

export default function MobileCarburantFilter() {
  const transformCarburants = useCallback(
    (data: useApiData[]) => data.map((c) => c.type),
    []
  );
  const carburants = useApi<string, useApiData>(
    "/api/carburant",
    transformCarburants
  );

  return (
    <MobileFilterLayout title="Carburant">
      <div className="w-full flex flex-wrap items-center gap-3">
        {carburants.map((type, index) => (
          <a
            key={index}
            href="#"
            className="relative overflow-hidden rounded-lg flex items-center justify-center border h-fit group"
          >
            <span
              id="carburants"
              className="font-light text-sm p-3 relative z-10"
            >
              {type}
            </span>
            <span className="absolute inset-0 bg-muted scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
          </a>
        ))}
      </div>
    </MobileFilterLayout>
  );
}
