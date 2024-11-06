"use client";

import { ChevronRight, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";
import { SideFiltersButtonPopoverName } from "@/data/navigationData";
import { ScrollArea } from "./ui/scroll-area";

interface Category {
  id: number;
  nom: string;
  nombre_de_vehicules: number;
}

interface Marque {
  id: number;
  nom: string;
  nombre_de_vehicules: number;
}

interface Modele {
  id: number;
  nom: string;
  marque_id: number;
  nombre_de_vehicules: number;
}

export default function SideFiltersButton() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [marques, setMarques] = useState<Marque[]>([]);
  const [modeles, setModeles] = useState<Modele[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activePopover, setActivePopover] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchMarques = async () => {
      const response = await fetch("/api/marques");
      const data = await response.json();
      setMarques(data);
    };

    fetchMarques();
  }, []);

  useEffect(() => {
    const fetchModeles = async () => {
      const response = await fetch("/api/modeles");
      const data = await response.json();
      setMarques(data);
    };

    fetchModeles();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMarques = marques.filter((marque) =>
    marque.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredModeles = modeles.filter((modele) =>
    marque.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePopoverChange = (isOpen: boolean, popoverName: string) => {
    if (isOpen) {
      setActivePopover(popoverName);
    } else {
      setSearchTerm("");
      setActivePopover(null);
    }
  };

  return (
    <section className="flex flex-col gap-4">
      {SideFiltersButtonPopoverName.map((item) => (
        <Popover
          key={item.id}
          onOpenChange={(isOpen) => handlePopoverChange(isOpen, item.name)}
        >
          <PopoverTrigger className="flex justify-between bg-slate-100 rounded-lg py-2 px-4 border hover:border-black">
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
                placeholder={`Rechercher ${item.name.toLowerCase()}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                size={12}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <ScrollArea className="">
              <div className="focus:bg-gray-100 grid grid-cols-2 gap-2">
                {activePopover === "Type de véhicule" &&
                  filteredCategories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-1 rounded-sm"
                    >
                      <Checkbox id={`category-${category.id}`} />
                      <Label
                        htmlFor={`category-${category.id}`}
                        className="cursor-pointer"
                      >
                        {category.nom}{" "}
                        <span className="text-gray-400 text-xs ml-1">
                          ({category.nombre_de_vehicules})
                        </span>
                      </Label>
                    </div>
                  ))}
                {activePopover === "Marque" &&
                  filteredMarques.map((marque) => (
                    <div
                      key={marque.id}
                      className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-1 rounded-sm"
                    >
                      <Checkbox id={`marque-${marque.id}`} />
                      <Label
                        htmlFor={`marque-${marque.id}`}
                        className="cursor-pointer"
                      >
                        {marque.nom}{" "}
                        <span className="text-gray-400 text-xs ml-1">
                          ({marque.nombre_de_vehicules})
                        </span>
                      </Label>
                    </div>
                  ))}
              </div>
            </ScrollArea>
          </PopoverContent>
        </Popover>
      ))}
    </section>
  );
}
