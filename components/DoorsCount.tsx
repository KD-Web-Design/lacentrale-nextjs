"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

interface DoorsCountProps {
  max: number;
}

export default function DoorsCount({ max }: DoorsCountProps) {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center space-x-4">
      <Button
        variant="myvariant"
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
        className="relative overflow-hidden rounded-lg flex items-center justify-center h-fit group w-12 border"
      >
        <span className="relative z-10 font-medium">-</span>
        <span className="absolute inset-0 bg-gray-100 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
      </Button>

      <span className="text-lg font-medium">{count}</span>

      <Button
        variant="myvariant"
        onClick={() => setCount(count + 1)}
        disabled={count === max}
        className="relative overflow-hidden rounded-lg flex items-center justify-center h-fit group w-12 border"
      >
        <span className="relative z-10 font-medium">+</span>
        <span className="absolute inset-0 bg-gray-100 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
      </Button>
    </div>
  );
}
