import { XIcon } from "lucide-react";
import React from "react";
import MobileValidateBtn from "../MobileValidateBtn";

type MobileFilterOverlayProps = {
  isVisible: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function MobileFilterOverlay({
  isVisible,
  title,
  onClose,
  children,
}: MobileFilterOverlayProps) {
  if (!isVisible) return null;

  return (
    <main className="flex flex-col gap-4">
      <div
        id="overlay"
        className="inset-0 fixed bg-white z-50 lg:hidden px-1 flex flex-col"
      >
        <header className="p-4 relative">
          <h1 className="text-center font-semibold text-lg">{title}</h1>
          <XIcon
            size={42}
            strokeWidth={1}
            className="cursor-pointer absolute right-2 top-2"
            onClick={onClose}
          />
        </header>
        {children}
        <footer className="inline-flex w-full justify-between items-center px-2 py-4 mt-auto">
          <a
            className="font-semibold underline w-1/2 text-center hover:text-gray-400"
            href="#"
            onClick={onClose}
          >
            Annuler
          </a>
          <MobileValidateBtn />
        </footer>
      </div>
    </main>
  );
}
