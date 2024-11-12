"use client";

import React, { useState } from "react";
import { ChevronRight, Search, XIcon } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import MobileValidateBtn from "./MobileValidateBtn";
import { Input } from "../ui/input";
import { BaseEntity } from "./MobilePopFiltersButton";

export default function MobileEquipmentFilter() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterItems = (items: BaseEntity[]) =>
    items.filter((item) =>
      item.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-gray-100 w-full h-9 px-4 flex items-center">
          <span className="font-semibold">Equipements & options</span>
        </header>
        <div className="w-full flex flex-col gap-3 space-y-2 p-4 border">
          <Link
            href="#"
            className="flex justify-between hover:text-accent"
            onClick={() => setIsOverlayVisible(true)}
          >
            <span className="text-sm font-normal">Equipements & options</span>
            <ChevronRight size={24} />
          </Link>
          <Link href="#" className="flex justify-between hover:text-accent">
            <span className="text-sm font-normal">
              Niveau d&apos;équipement
            </span>
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>

      {isOverlayVisible && (
        <div
          id="overlay"
          className="inset-0 fixed bg-white z-50 lg:hidden px-1 flex flex-col"
        >
          <header className="p-4 relative">
            <h1 className="text-center font-semibold text-lg">
              Equipements et options
            </h1>
            <XIcon
              size={42}
              strokeWidth={1}
              className="cursor-pointer absolute right-2 top-2"
              onClick={() => setIsOverlayVisible(false)}
            />
          </header>

          <ScrollArea className="border-b-2 focus:bg-gray-100 flex-grow px-2">
            {/* {filteredEquipment.map((equipment) => ( */}
            <div className="p-3 relative mb-3">
              <Input
                type="text"
                className="pl-6"
                placeholder="Rechercher un équipement"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                size={14}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <div className="mb-1">
              <Label className="cursor-pointer flex items-center p-2 rounded-sm relative">
                <Checkbox className="absolute right-2 w-5 h-5" />
              </Label>
            </div>
            {/* ))} */}
          </ScrollArea>
          <footer className="inline-flex w-full justify-between items-center px-2 py-4">
            <a
              className="font-semibold underline w-1/2 text-center hover:text-gray-400"
              href="#"
              onClick={() => setIsOverlayVisible(false)}
            >
              Annuler
            </a>
            <MobileValidateBtn />
          </footer>
        </div>
      )}
    </main>
  );
}