"use client";

import { ChevronRight, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Label } from "../ui/label";
import { useState } from "react";
import {
  BaseEntity,
  SideFiltersButtonPopoverName,
} from "@/data/navigationData";
import { ScrollArea } from "../ui/scroll-area";
import { useApi } from "@/hooks/useApi";
import { formatNumber } from "@/lib/formatNumber";

export default function SideFiltersButton() {
  // Gestion d'états
  const categories = useApi<BaseEntity>("/api/categories");
  const marques = useApi<BaseEntity>("/api/marques");
  const modeles = useApi<BaseEntity>("/api/modeles");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activePopover, setActivePopover] = useState<string | null>(null);

  // Fonctions utilitaires pour gérer la recherche dans l'Input
  const filterItems = (items: BaseEntity[]) =>
    items.filter((item) =>
      item.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredCategories = filterItems(categories);
  const filteredMarques = filterItems(marques);
  const filteredModeles = filterItems(modeles);

  // Fonction pour gérer les Popovers
  const handlePopoverChange = (isOpen: boolean, popoverName: string) => {
    if (isOpen) {
      setActivePopover(popoverName);
    } else {
      setSearchTerm("");
      setActivePopover(null);
    }
  };

  // Fonction générique pour afficher les items des Popovers
  const renderPopoverItems = (items: BaseEntity[], type: string) => {
    return items.map((item: BaseEntity) => (
      <div
        key={item.id}
        className="flex items-center space-x-2 hover:bg-muted px-4 py-1 rounded-sm"
      >
        <Checkbox id={`${type}-${item.id}`} />
        <Label htmlFor={`${type}-${item.id}`} className="cursor-pointer">
          {item.nom}{" "}
          <span className="text-gray-400 text-xs ml-1">
            ({formatNumber(item.nombre_de_vehicules)})
          </span>
        </Label>
      </div>
    ));
  };

  return (
    <section className="flex flex-col gap-4">
      {SideFiltersButtonPopoverName.map((item) => (
        <Popover
          key={item.id}
          onOpenChange={(isOpen) => handlePopoverChange(isOpen, item.name)}
        >
          <PopoverTrigger className="flex justify-between bg-muted rounded-lg py-2 px-4 border hover:border-black">
            <span className="font-semibold text-md">{item.name}</span>
            <ChevronRight size={24} />
          </PopoverTrigger>
          <PopoverContent
            side="right"
            align="start"
            sideOffset={16}
            className="w-[420px] h-[400px] flex flex-col space-y-3 border-black"
          >
            <h1 className="font-semibold">{item.name}</h1>
            <div className="relative focus:bg-inherit">
              <Input
                type="text"
                className="pl-6"
                placeholder={item.name}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                size={12}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <ScrollArea className="">
              <div className="focus:bg-muted grid grid-cols-2 gap-2">
                {activePopover === "Type de véhicule" &&
                  renderPopoverItems(filteredCategories, "category")}
                {activePopover === "Marque" &&
                  renderPopoverItems(filteredMarques, "marque")}
                {activePopover === "Modèle" &&
                  renderPopoverItems(filteredModeles, "modele")}
              </div>
            </ScrollArea>
          </PopoverContent>
        </Popover>
      ))}
    </section>
  );
}
