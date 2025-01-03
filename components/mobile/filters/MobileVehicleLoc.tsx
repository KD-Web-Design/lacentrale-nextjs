import React, { useState } from "react";
import { ChevronRight, MapPin } from "lucide-react";
import { Input } from "../../ui/input";
import { MobileFilterLayout } from "../layout/MobileFilterLayout";
import Link from "next/link";
import { Switch } from "../../ui/switch";
import { MobileFilterOverlay } from "../overlay/MobileFilterOverlay";
import { ScrollArea } from "../../ui/scroll-area";
import { Label } from "../../ui/label";
import { Checkbox } from "../../ui/checkbox";
import { Region } from "@/data/navigationData";
import { useApi } from "@/hooks/useApi";

export default function MobileVehicleLoc() {
  const regions = useApi<Region>("api/regions");
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const filteredRegions = regions.filter((region) => region.nom.toLowerCase());

  return (
    <MobileFilterLayout title="Localisation des véhicules">
      <div className="relative">
        <Input
          type="number"
          placeholder="Code postal"
          className="pl-8 font-normal"
        />
        <MapPin
          size={16}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
      <Link
        href="#"
        className="flex justify-between hover:text-accent"
        onClick={() => setIsOverlayVisible(true)}
      >
        <span className="text-sm font-normal">Par régions</span>
        <ChevronRight size={24} />
      </Link>
      <Link href="#" className="flex justify-between">
        <span className="text-sm font-normal">Avec livraison</span>
        <Switch />
      </Link>
      <MobileFilterOverlay
        isVisible={isOverlayVisible}
        title="Par régions"
        onClose={() => setIsOverlayVisible(false)}
      >
        <ScrollArea className="border-b-2 focus:bg-muted flex-grow px-2">
          {filteredRegions.map((region) => (
            <div key={region.id} className="mb-1">
              <Label
                htmlFor={`region-${region.id}`}
                className="cursor-pointer flex items-center p-2 rounded-sm relative"
              >
                {region.nom}
                <Checkbox
                  id={`region-${region.id}`}
                  className="absolute right-2 w-5 h-5"
                />
              </Label>
            </div>
          ))}
        </ScrollArea>
      </MobileFilterOverlay>
    </MobileFilterLayout>
  );
}
