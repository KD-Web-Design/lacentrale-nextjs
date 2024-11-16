import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import { AccordionNavMobile } from "./MobileNavAccordion";

interface NavbarMobileOverlayProps {
  onClose: () => void;
}

export default function NavbarMobileOverlay({
  onClose,
}: NavbarMobileOverlayProps) {
  return (
    <div className="h-screen w-full fixed bg-white lg:hidden overflow-scroll z-20">
      <div className="w-full h-14 p-1 inline-flex items-center border border-b-2 border-b-gray-200">
        <ArrowLeft
          size={28}
          strokeWidth={1}
          className="cursor-pointer mr-2"
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
        <AccordionNavMobile />
      </div>
    </div>
  );
}
