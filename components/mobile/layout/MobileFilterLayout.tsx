import React from "react";

type MobileFilterLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export function MobileFilterLayout({
  children,
  title,
}: MobileFilterLayoutProps) {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-gray-100 w-full h-9 px-4 flex items-center">
          <span className="font-semibold">{title}</span>
        </header>
        <div className="w-full flex flex-col gap-3 space-y-2 p-4 border">
          {children}
        </div>
      </div>
    </main>
  );
}
