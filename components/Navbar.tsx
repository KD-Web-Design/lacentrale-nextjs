"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CircleUserIcon, HeartIcon, MenuIcon, SearchIcon } from "lucide-react";
import { navigation } from "@/data/navigationData";
import NavbarMobileOverlay from "./mobile/MobileNavbarOverlay";
import { NavbarHoverCard } from "./NavbarHoverCard";

export default function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <>
      <nav className="w-full h-14 lg:h-[4.5rem] px-3 shadow-md fixed">
        <div className="flex h-full justify-between max-w-6xl m-auto">
          <div className="inline-flex items-center gap-2">
            <MenuIcon
              size={24}
              className="cursor-pointer lg:hidden"
              onClick={() => setIsOverlayOpen(true)}
            />
            <Image
              src="/logos/lacentrale.svg"
              alt="logo"
              width={170}
              height={170}
              className="lg:w-[200px] cursor-pointer"
            />
          </div>
          <div className="lg:flex lg:gap-4">
            <ul className="hidden lg:inline-flex items-center gap-2 h-full">
              {navigation.map((item) => (
                <NavbarHoverCard
                  key={item.name}
                  categories={item.categories}
                  tableImage={item.tableImage}
                >
                  <li
                    className={`relative group inline-block mx-4 py-2 ${
                      item.current ? "text-accent" : "hover:text-accent"
                    }`}
                  >
                    <a href={item.href} className="font-semibold">
                      {item.name}
                    </a>
                    <div
                      className={`h-[2px] bg-accent ${
                        item.current ? "w-full" : "w-0 group-hover:w-full"
                      } absolute bottom-0 left-0`}
                    />
                  </li>
                </NavbarHoverCard>
              ))}
              <div className="w-[2px] h-6 bg-accent mx-4 my-auto"></div>
            </ul>
            <ul className="gap-4 lg:gap-6 inline-flex items-center h-full">
              {[SearchIcon, HeartIcon, CircleUserIcon].map((Icon, index) => (
                <li key={index}>
                  <Icon
                    size={18}
                    className="cursor-pointer hover:text-accent"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {isOverlayOpen && (
        <NavbarMobileOverlay onClose={() => setIsOverlayOpen(false)} />
      )}
    </>
  );
}
