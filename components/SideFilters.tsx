import { SlidersVertical } from "lucide-react";
import React from "react";
import SideFiltersButton from "./SideFiltersButton";
import InputFilters from "./InputFilters";
import CarburantFilter from "./CarburantFilter";
import GearboxFilter from "./GearboxFilter";
import PriceFilter from "./PriceFilter";
import PriceIndexFilter from "./PriceIndexFilter";
import VehicleLoc from "./VehicleLoc";
import SellerTypeFilter from "./SellerTypeFilter";
import EquipmentFilter from "./EquipmentFilter";

export default function SideFilters() {
  return (
    <section className="hidden lg:block max-w-6xl mx-auto mt-2">
      <aside className="w-64 pr-4 flex flex-col gap-5 border-r border-gray-300">
        <span className="font-semibold text-xl inline-flex items-center gap-2">
          <SlidersVertical size={20} />
          Filtres
        </span>
        <SideFiltersButton />
        <InputFilters />
        <CarburantFilter />
        <GearboxFilter />
        <PriceFilter />
        <PriceIndexFilter />
        <VehicleLoc />
        <SellerTypeFilter />
        <EquipmentFilter />
      </aside>
    </section>
  );
}
