import React from "react";

import MobileVehicleCard from "./MobileVehicleCard";

export default function MobileMainSection() {
  return (
    <section className="grid sm:grid-cols-2 gap-4 py-6 px-2 max-sm:max-w-md mx-auto lg:hidden">
      {Array.from({ length: 26 }, (_, index) => (
        <MobileVehicleCard key={index} index={index} />
      ))}
    </section>
  );
}
