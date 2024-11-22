import React from "react";

import MobileVehicleCard from "./MobileVehicleCard";
import SaveSearchBtn from "../SaveSearchBtn";
import Pagination from "../Pagination";
import SellAd from "../SellAd";

export default function MobileMainSection() {
  return (
    <section className="flex flex-col gap-4 bg-gray-100 p-4 mt-4 lg:hidden">
      <section className="grid sm:grid-cols-2 gap-4 px-4">
        {Array.from({ length: 26 }, (_, index) => (
          <MobileVehicleCard key={index} index={index} />
        ))}
      </section>
      <SaveSearchBtn />
      <Pagination />
      <SellAd />
    </section>
  );
}
