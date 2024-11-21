import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Pagination() {
  return (
    <section className="flex flex-col gap-4 mx-auto py-6">
      <span className="text-center text-sm">
        Annonces <span className="font-semibold">1 à 23</span> sur 324 711
      </span>
      <div className="flex gap-1 items-center ">
        <Button
          variant="outline"
          className="border-gray-400 group h-8 w-8 mr-1"
          disabled
        >
          <ArrowLeft className="text-gray-400 group-hover:text-white" />
        </Button>
        <a
          href=""
          className="text-xs text-white bg-accent h-6 w-6 flex items-center justify-center rounded"
        >
          1
        </a>
        <a
          href=""
          className="text-xs  hover:bg-red-100 h-6 w-6 flex items-center justify-center rounded"
        >
          2
        </a>
        <a
          href=""
          className="text-xs  hover:bg-red-100 h-6 w-6 flex items-center justify-center rounded"
        >
          3
        </a>
        <a
          href=""
          className="text-xs  hover:bg-red-100 h-6 w-6 flex items-center justify-center rounded"
        >
          4
        </a>
        <a
          href=""
          className="text-xs  hover:bg-red-100 h-6 w-6 flex items-center justify-center rounded"
        >
          5
        </a>
        <a
          href=""
          className="text-xs  hover:bg-red-100 h-6 w-6 flex items-center justify-center rounded"
        >
          6
        </a>
        <a
          href=""
          className="text-xs  hover:bg-red-100 h-6 w-6 flex items-center justify-center rounded"
        >
          7
        </a>
        <a
          href=""
          className="text-xs  hover:bg-red-100 h-6 w-6 flex items-center justify-center rounded"
        >
          8
        </a>
        <div className="text-xs  hover:bg-red-100 h-6 w-6 flex items-center justify-center rounded">
          ...
        </div>
        <Button variant="outline" className="border-accent group h-8 w-8 ml-1">
          <ArrowRight className="text-accent group-hover:text-white" />
        </Button>
      </div>
    </section>
  );
}
