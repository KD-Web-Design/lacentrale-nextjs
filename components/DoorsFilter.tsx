import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronRight } from "lucide-react";
import DoorsCount from "./DoorsCount";

export default function DoorsFilter() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-slate-100 py-2 px-4 border-b">
          <span className="font-semibold text-md">Places & Portes</span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Nombre de places</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Nombre de places</h1>

              <div className="flex items-center justify-between">
                <span>Places</span>
                <DoorsCount max={9} />
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Nombre de portes</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Nombre de portes</h1>

              <div className="flex items-center justify-between">
                <span>Places</span>
                <DoorsCount max={6} />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
