import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronRight } from "lucide-react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Switch } from "../ui/switch";

export default function PerformanceFilter() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div>
        <div className="bg-slate-100 py-2 px-4 border-b">
          <span className="font-semibold text-md">Performance</span>
        </div>
        <div className="flex flex-col gap-2 p-4 space-y-2">
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Puissance fiscale</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Puissance fiscale</h1>

              <div className="flex gap-2">
                <Input type="text" placeholder="min" className="rounded" />
                <Input type="text" placeholder="max" className="rounded" />
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="flex justify-between hover:text-accent">
              <span className="text-sm">Puissance DIN (ch)</span>
              <ChevronRight size={24} />
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="start"
              sideOffset={32}
              className="w-[400px] flex flex-col space-y-2 p-3 border shadow-lg border-black rounded-lg bg-white"
            >
              <h1 className="font-semibold">Puissance DIN (ch)</h1>

              <div className="flex">
                <Input type="text" placeholder="min" />
                <Input type="text" placeholder="max" />
              </div>
            </PopoverContent>
          </Popover>
          <Link href="#" className="flex justify-between">
            <span className="text-sm font-normal">4 roues motrices</span>
            <Switch />
          </Link>
        </div>
      </div>
    </div>
  );
}
