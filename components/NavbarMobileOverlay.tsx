import { navigation } from "@/data/navigationData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface NavbarMobileOverlayProps {
  onClose: () => void;
}

export default function NavbarMobileOverlay({
  onClose,
}: NavbarMobileOverlayProps) {
  return (
    <div className="h-screen w-full fixed bg-white lg:hidden">
      <div className="w-full h-14 p-1 inline-flex items-center border border-b-2 border-b-gray-200">
        <XIcon
          size={42}
          strokeWidth={1}
          className="cursor-pointer"
          onClick={onClose}
        />
        <Image
          src="/logos/lacentrale.svg"
          alt="logo"
          width={130}
          height={130}
          className=" cursor-pointer"
        />
      </div>
      <div className="p-4">
        <Accordion type="single" collapsible className="w-full divide-y-2">
          {navigation.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="py-3">
              <AccordionTrigger className="font-semibold hover:text-red-500">
                {item.name}
              </AccordionTrigger>
              <AccordionContent>
                <p>empty</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
