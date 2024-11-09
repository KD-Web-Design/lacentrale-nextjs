import React, { useEffect, useState } from "react";

export default function MobileCardFilters() {
  const [carburants, setCarburants] = useState<string[]>([]);

  useEffect(() => {
    const fetchCarburants = async () => {
      try {
        const response = await fetch("/api/carburant");
        const data = await response.json();
        setCarburants(
          data.map((carburant: { type: string }) => carburant.type)
        );
      } catch (error) {
        console.error("Erreur lors de la récupération des carburants:", error);
      }
    };

    fetchCarburants();
  }, []);

  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col font-semibold text-lg rounded-lg border overflow-hidden">
        <header className="bg-gray-100 w-full h-9 px-4 flex items-center">
          <span className="font-semibold">Carburant</span>
        </header>
        <div className="w-full flex flex-wrap items-center gap-3 p-4 border">
          {carburants.map((type, index) => (
            <a
              key={index}
              href="#"
              className="relative overflow-hidden rounded-lg flex items-center justify-center border h-fit group"
            >
              <span
                id="carburants"
                className="font-light text-sm p-3 relative z-10"
              >
                {type}
              </span>
              <span className="absolute inset-0 bg-gray-100 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
