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
import ColorFilter from "./ColorFilter";
import PerformanceFilter from "./PerformanceFilter";
import ConsFilter from "./ConsFilter";
import HistoricFilter from "./HistoricFilter";
import DoorsFilter from "./DoorsFilter";
import DimensionsFilter from "./DimensionsFilter";
import SearchButton from "./SearchButton";

export default function SideFilters() {
  return (
    <section className="hidden lg:block max-w-6xl mx-auto mt-2">
      <aside className="w-72 flex flex-col border-r border-gray-">
        <section className="px-4 space-y-5">
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
          <ColorFilter />
          <PerformanceFilter />
          <ConsFilter />
          <HistoricFilter />
          <DoorsFilter />
          <DimensionsFilter />
        </section>
        <SearchButton />
      </aside>
    </section>
  );
}
