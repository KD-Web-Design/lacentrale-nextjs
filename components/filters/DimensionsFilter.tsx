import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronRight } from "lucide-react";
import { Input } from "../ui/input";

export default function DimensionsFilter() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-muted py-2 px-4 border-b">
          <span className="font-semibold text-md">Dimensions</span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Dimensions du véhicule</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Dimensions du véhicule</h1>

              <div className="flex gap-2">
                <Input placeholder="L max" className="rounded" />
                <Input placeholder="l max" className="rounded" />
                <Input placeholder="H max" className="rounded" />
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Volume du coffre</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Volume du coffre</h1>

              <div className="flex">
                <Input placeholder="Volume min" className="rounded" />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
