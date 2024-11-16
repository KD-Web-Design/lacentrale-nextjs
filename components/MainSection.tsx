import React from "react";
import AsideFilters from "./AsideFilters";
import { Popover, PopoverContent } from "@radix-ui/react-popover";
import { PopoverTrigger } from "./ui/popover";
import { ChevronDown } from "lucide-react";

export default function MainSection() {
  return (
    <section className="hidden lg:flex max-w-6xl mx-auto mt-2">
      <AsideFilters />
      <main className="flex flex-col p-4 ">
        <Popover>
          <PopoverTrigger className="flex justify-between items-center rounded p-2 border hover:border-black w-72 ">
            <span className="font-bold text-sm">Trier par : </span>
            <ChevronDown size={16} />
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            className="w-[420px] h-[400px] flex flex-col space-y-3 border-black"
          ></PopoverContent>
        </Popover>
      </main>
    </section>
  );
}
