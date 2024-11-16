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
import Link from "next/link";

export default function MobileMainSection() {
  return (
    <section className="flex flex-col gap-4 p-4">
      <Card>
        <CardContent></CardContent>
        <CardFooter className="flex flex-col items-start gap-1">
          <h1 className="font-semibold text-sm">CITROEN C3 III phase 2</h1>
          <span className="text-gray-400 text-xs">
            1.2 PURETECH 83 C-SERIES
          </span>
          <div className="inline-flex gap-4">
            <span className="inline-flex items-center gap-1 text-sm">
              <CalendarDays size={16} className="text-gray-500" />
              2023
            </span>
            <span className="inline-flex items-center gap-1 text-sm">
              <Settings size={16} className="text-gray-500" />
              Manuelle
            </span>
            <span className="inline-flex items-center gap-1 text-sm">
              <CircleGauge size={16} className="text-gray-500" />
              11 858 km
            </span>
            <span className="inline-flex items-center gap-1 text-sm">
              <Wrench size={16} className="text-gray-500" />
              Essence
            </span>
          </div>
          <div className="inline-flex gap-2 border-b-2 w-full pb-3">
            <h1 className="font-semibold text-xl">12 980 €</h1>
            <Badge
              variant="outline"
              className="rounded font-bold text-green-500 border-green-500"
            >
              <BadgeEuro size={16} className="text-green-500 mr-1" />
              Très bonne affaire
            </Badge>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs">CITROEN MELUN</span>
              <span className="inline-flex items-center p-1 text-xs w-fit bg-gray-100 rounded">
                <MapPin size={16} />
                77
              </span>
            </div>
            <div className="flex gap-4">
              <Link href="#">
                <Heart />
              </Link>
              <Link href="#">
                <Phone />
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
