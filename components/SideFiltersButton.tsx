"use client";

import { ChevronRight, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Label } from "./ui/label";

export default function SideFiltersButton() {
  return (
    <Popover>
      <PopoverTrigger className="flex justify-between bg-slate-100 rounded-lg py-2 px-4 border hover:border-black">
        <span className="font-semibold text-md">Type de véhicule</span>
        <ChevronRight size={24} />
      </PopoverTrigger>
      <PopoverContent
        side="right"
        align="start"
        sideOffset={16}
        className="w-[420px] flex flex-col space-y-3 border-black"
      >
        <h1 className="font-semibold">Type de véhicule</h1>
        <div className="relative focus:bg-inherit">
          <Input type="text" className="pl-6" placeholder="Type de véhicule" />
          <Search
            size={12}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
        <div className=" focus:bg-gray-100">
          <div className="grid grid-cols-2 w-full text-sm cursor-pointer">
            <div className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-1 rounded-sm">
              <Checkbox id="terms1" />
              <Label htmlFor="terms1" className="cursor-pointer">
                4x4, suv & crossover{" "}
                <span className="text-gray-400 text-xs">(127 875)</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-1 rounded-sm">
              <Checkbox id="terms2" />
              <Label htmlFor="terms2" className="cursor-pointer">
                Citadine{" "}
                <span className="text-gray-400 text-xs">(127 875)</span>
              </Label>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
