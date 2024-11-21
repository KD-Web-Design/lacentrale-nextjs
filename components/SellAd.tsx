import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export default function SellAd() {
  return (
    <Card className="flex flex-col space-y-2 p-4 mt-2">
      <CardHeader className="font-semibold flex-row p-0">
        <div className="w-[4px] h-5 bg-accent mx-2 my-auto"></div>
        Vous avez un véhicule à vendre ?
      </CardHeader>
      <CardContent className="py-0 px-2">
        Estimez votre véhicule et vendez rapidement à un professionnel.
      </CardContent>
      <CardFooter className="py-0 px-2">
        <a
          href="#"
          className="font-semibold underline w-full hover:text-accent"
        >
          Faire racheter mon véhicule
        </a>
      </CardFooter>
    </Card>
  );
}
