import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import {
  BadgeEuro,
  CalendarDays,
  CircleGauge,
  Heart,
  MapPin,
  Phone,
  Settings,
  Wrench,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";

export interface MobileVehicleCardProps {
  index: number;
}

export default function MobileVehicleCard({ index }: MobileVehicleCardProps) {
  return (
    <Card className="overflow-hidden cursor-pointer border border-black">
      <CardContent className="grid grid-cols-3 gap-1 p-0  aspect-[16/9] relative max-h-[208px] w-full">
        <div className="relative col-span-2 h-full max-h-[220px]">
          {index === 0 && (
            <Badge
              id="currently"
              className="absolute top-2 left-2 rounded z-10"
            >
              En ce moment
            </Badge>
          )}
          <Image
            src="/images/bmw-m3-competition-touring-hd-02.jpg"
            alt="bmw-m3-side"
            layout="fill"
            objectFit="cover"
            className="max-h-52"
            priority
          />
        </div>
        <div className="flex flex-col gap-1 col-span-1 h-full max-h-[208px] ">
          <div className="relative flex-1 min-h-0">
            <Image
              src="/images/bmw-m3-competition-touring-hd-01.jpg"
              alt="bmw-m3-rear"
              layout="fill"
              objectFit="cover"
              className="max-h-[108px]"
              priority
            />
          </div>
          <div className="relative flex-1 min-h-0">
            <Image
              src="/images/bmw-m3-competition-touring-hd-05.jpg"
              alt="bmw-m3-side"
              layout="fill"
              objectFit="cover"
              className="max-h-[108px]"
              priority
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1 px-3 py-2">
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
              BOULOGNE-BILLANCOURT
            </span>
          </div>
          <div className="flex gap-4">
            <Button
              variant="secondary"
              size="icon"
              className="bg-white border group"
            >
              <Heart className="group-hover:text-accent" />
            </Button>
            <Button size="icon">
              <Phone />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
