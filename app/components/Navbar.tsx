import React from "react";
import Image from "next/image";
import { CircleUserIcon, HeartIcon, MenuIcon, SearchIcon } from "lucide-react";

const navigation = [
  { name: "Acheter", href: "#" },
  { name: "Vendre", href: "#" },
  { name: "La Cote", href: "#" },
  { name: "Vous conseiller", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="w-full h-14 lg:h-16 px-3 shadow-md">
      <div className="flex h-full justify-between max-w-6xl m-auto">
        <div className="inline-flex items-center gap-2">
          <MenuIcon size={24} className="cursor-pointer lg:hidden" />
          <Image
            src="/logos/lacentrale.svg"
            alt="logo"
            width={170}
            height={170}
            className="lg:w-[200px] cursor-pointer"
          />
        </div>
        <div className="lg:flex lg:gap-4">
          <ul className="hidden lg:inline-flex items-center h-full">
            {navigation.map((item) => (
              <li
                key={item.name}
                className="relative group inline-block px-4 py-2"
              >
                <a
                  href={item.href}
                  className="font-semibold hover:text-red-500"
                >
                  {item.name}
                </a>
                <div className="h-[2px] bg-red-500 w-0 group-hover:w-3/4 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
              </li>
            ))}
            <div className="w-[2px] h-6 bg-red-500 mx-4"></div>
          </ul>
          <ul className="gap-4 lg:gap-6 inline-flex items-center h-full">
            {[SearchIcon, HeartIcon, CircleUserIcon].map((Icon, index) => (
              <li key={index}>
                <Icon size={18} className="cursor-pointer hover:text-red-500" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
