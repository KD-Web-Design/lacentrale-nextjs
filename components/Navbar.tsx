"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  CirclePlus,
  CircleUserIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
} from "lucide-react";
import { navigation } from "@/data/navigationData";
import NavbarMobileOverlay from "./mobile/MobileNavbarOverlay";
import { NavbarHoverCard } from "./NavbarHoverCard";
import { Button } from "./ui/button";

const useScrollDirection = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px correspond à lg: dans Tailwind
    };

    // Check initial screen size
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    const handleScroll = () => {
      if (!isMobile) {
        setIsVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [lastScrollY, isMobile]);

  return isVisible;
};

export default function Navbar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const isVisible = useScrollDirection();

  return (
    <>
      <nav
        className={`w-full h-14 lg:h-[4.5rem] px-3 shadow-md fixed top-0 bg-white z-10 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-full justify-between max-w-6xl m-auto">
          <div className="flex gap-1">
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
            <ul className="hidden lg:inline-flex items-center h-full">
              {navigation.map((item) => (
                <NavbarHoverCard
                  key={item.name}
                  categories={item.categories}
                  tableImage={item.tableImage}
                >
                  <li
                    className={`relative group inline-block mx-3 py-2 ${
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
            </ul>
          </div>
          <div className="flex gap-2 items-center">
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
            <div className="w-[2px] h-6 bg-accent mx-4 my-auto hidden lg:block"></div>
            <Button className=" font-semibold hidden lg:inline-flex">
              <CirclePlus size={24} />
              Déposer mon annonce
            </Button>
          </div>
        </div>
      </nav>
      {isOverlayOpen && (
        <NavbarMobileOverlay onClose={() => setIsOverlayOpen(false)} />
      )}
    </>
  );
}
