import { XIcon } from "lucide-react";
import React from "react";
import MobileSideFiltersButton from "./MobilePopFiltersButton";
import MobileInputFilters from "./MobileInputFilters";
import MobileCarburantFilters from "./MobileCarburantFilter";
import MobileGearboxFilter from "./MobileGearboxFilter";
import MobilePriceIndexFilter from "./MobilePriceIndexFilter";
import MobilePriceFilter from "./MobilePriceFilter";
import MobileVehicleLoc from "./MobileVehicleLoc";
import MobileSellerType from "./MobileSellerType";
import MobileEquipmentFilter from "./MobileEquipmentFilter";
import MobileColorFilter from "./MobileColorFilter";
import MobilePerformanceFilter from "./MobilePerformanceFilter";
import MobileConsFilter from "./MobileConsFilter";
import MobileDoorsFilter from "./MobileDoorsFilter";
import MobileHistoricFilter from "./MobileHistoricFilter";
import MobileDimensionsFilter from "./MobileDimensionsFilter";
import { Button } from "../ui/button";

export default function MobileFilters({ onClose }: { onClose: () => void }) {
  return (
    <div className="inset-0 fixed bg-white lg:hidden overflow-y-scroll px-1 ">
      <div
        className="border-b-2 relative flex items-center justify-center py-4 mb-2"
        id="topbar"
      >
        <h1 className="font-semibold text-lg">Filtrer</h1>
        <XIcon
          size={42}
          strokeWidth={1}
          className="cursor-pointer absolute right-0"
          onClick={onClose}
        />
      </div>
      <main className="flex flex-col w-full gap-4 p-4 mb-16">
        <MobileSideFiltersButton />
        <MobileInputFilters />
        <MobileCarburantFilters />
        <MobileGearboxFilter />
        <MobilePriceFilter />
        <MobilePriceIndexFilter />
        <MobileVehicleLoc />
        <MobileSellerType />
        <MobileEquipmentFilter />
        <MobileColorFilter />
        <MobilePerformanceFilter />
        <MobileConsFilter />
        <MobileHistoricFilter />
        <MobileDoorsFilter />
        <MobileDimensionsFilter />
      </main>
      <footer className="w-full flex justify-center fixed bottom-0 bg-white py-3 shadow-lg">
        <Button
          className="bg-accent text-lg font-bold px-20"
          size="lg"
          variant="myvariant"
        >
          Rechercher (322 255)
        </Button>
        <span className="absolute inset-0 bg-gray-100 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
      </footer>
    </div>
  );
}
