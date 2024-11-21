import React from "react";
import AsideFilters from "./AsideFilters";
import VehicleCard from "./VehicleCard";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronDown } from "lucide-react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { sortOptions } from "@/data/navigationData";
import SaveSearchBtn from "./SaveSearchBtn";
import Pagination from "./Pagination";
import SellAd from "./SellAd";
import Footer from "./Footer";

export default function MainSection() {
  return (
    <>
      <section className="hidden lg:flex max-w-6xl mx-auto mt-2">
        <AsideFilters />
        <main className="flex flex-col gap-2 p-2 w-[600px]">
          <div className="flex w-full justify-end">
            <Popover>
              <PopoverTrigger className="flex justify-between items-center rounded p-2 border hover:border-black w-72 ">
                <span className="font-bold text-sm">
                  Trier par :{" "}
                  <span className="font-normal">{sortOptions[0]?.option}</span>
                </span>
                <ChevronDown size={16} />
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                className="flex flex-col border-black py-4 px-0"
              >
                <RadioGroup
                  defaultValue={`option-${sortOptions[0]?.id}`}
                  className="gap-0"
                >
                  {sortOptions.map((item) => (
                    <Label
                      key={item.id}
                      htmlFor={`option-${item.id}`}
                      className="inline-flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-4 py-2"
                    >
                      <RadioGroupItem
                        id={`option-${item.id}`}
                        value={`option-${item.id}`}
                      />
                      {item.option}
                    </Label>
                  ))}
                </RadioGroup>
              </PopoverContent>
            </Popover>
          </div>
          <div className="rounded-lg w-full bg-gray-100 p-3 pb-6 flex flex-col gap-3">
            {Array.from({ length: 26 }, (_, index) => (
              <VehicleCard key={index} />
            ))}
            <SaveSearchBtn />
            <Pagination />
            <SellAd />
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
