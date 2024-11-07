import { XIcon } from "lucide-react";
import React from "react";
import MobileSideFiltersButton from "./MobileSideFiltersButton";

export default function MobileFilters({ onClose }: { onClose: () => void }) {
  return (
    <div className="inset-0 fixed bg-white lg:hidden overflow-scroll ">
      <div className="border-b-2 pb-4 relative flex items-center justify-center py-4 mb-2">
        <h1 className="font-semibold text-lg">Filtrer</h1>
        <XIcon
          size={42}
          strokeWidth={1}
          className="cursor-pointer absolute right-0"
          onClick={onClose}
        />
      </div>
      <main className="flex flex-col w-full p-4">
        <MobileSideFiltersButton />
      </main>
    </div>
  );
}
