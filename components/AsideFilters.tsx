import { SlidersVertical } from "lucide-react";
import React from "react";
import SideFiltersButton from "./filters/SideFiltersButton";
import InputFilters from "./filters/InputFilters";
import CarburantFilter from "./filters/CarburantFilter";
import GearboxFilter from "./filters/GearboxFilter";
import PriceFilter from "./filters/PriceFilter";
import PriceIndexFilter from "./filters/PriceIndexFilter";
import SellerTypeFilter from "./filters/SellerTypeFilter";
import EquipmentFilter from "./filters/EquipmentFilter";
import ColorFilter from "./filters/ColorFilter";
import PerformanceFilter from "./filters/PerformanceFilter";
import ConsFilter from "./filters/ConsFilter";
import HistoricFilter from "./filters/HistoricFilter";
import DoorsFilter from "./filters/DoorsFilter";
import DimensionsFilter from "./filters/DimensionsFilter";
import SearchButton from "./filters/SearchButton";
import VehicleLocFilter from "./filters/VehicleLocFilter";

export default function AsideFilters() {
  return (
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
        <VehicleLocFilter />
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
  );
}
