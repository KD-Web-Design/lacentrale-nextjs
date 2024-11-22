import React from "react";

import {
  BadgeEuro,
  CalendarDays,
  CircleGauge,
  Heart,
  MapPin,
  Settings,
  Wrench,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MobileVehicleCardProps } from "./mobile/MobileVehicleCard";

export default function VehicleCard({ index }: MobileVehicleCardProps) {
  return (
    <main>
      <Card className="flex overflow-hidden cursor-pointer border border-black">
        <CardHeader className="p-0 relative">
          <Image
            src="/images/bmw-m3-competition-touring-hd-02.jpg"
            alt="BMW SERIE 3 G21 TOURING"
            width={400}
            height={200}
            className="h-full w-full object-cover"
          />
          {index === 0 && (
            <Badge id="currently" className="absolute top-0 left-2 rounded">
              En ce moment
            </Badge>
          )}
        </CardHeader>
        <CardContent className="p-2">
          <h1 className="font-semibold text-sm">BMW SERIE 3 G21 TOURING</h1>
          <span className="text-gray-400 text-xs">2.0 330I 258 M SPORT</span>
          <div className="inline-flex gap-4 overflow-x-hidden whitespace-nowrap">
            <span className="inline-flex items-center text-sm gap-0.5 ">
              <CalendarDays size={16} className="text-gray-500" />
              2023
            </span>
            <span className="inline-flex items-center text-sm gap-0.5 ">
              <Settings size={16} className="text-gray-500" />
              Auto
            </span>
            <span className="inline-flex items-center text-sm gap-0.5 ">
              <CircleGauge size={16} className="text-gray-500" />
              11 858 km
            </span>
            <span className="inline-flex items-center text-sm gap-0.5">
              <Wrench size={16} className="text-gray-500" />
              Essence
            </span>
          </div>
          <div className="inline-flex gap-2 border-b-2 w-full pb-2">
            <h1 className="font-semibold text-xl">53 490 €</h1>
            <Badge
              variant="outline"
              className="rounded text-green-500 border-green-500"
            >
              <BadgeEuro size={16} className="text-green-500 mr-1" />
              Très bonne affaire
            </Badge>
          </div>
          <div className="flex w-full items-center justify-between pt-1 ">
            <div className="flex flex-col gap-1 whitespace-nowrap">
              <span className="text-xs">NEUBAUER BMW BOULOGNE</span>
              <span className="inline-flex items-center p-1 text-xs w-fit bg-muted rounded">
                <MapPin size={16} className="mr-1" />
                92
              </span>
            </div>
            <Button
              variant="secondary"
              size="icon"
              className="bg-white border group"
            >
              <Heart className="group-hover:text-accent" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
