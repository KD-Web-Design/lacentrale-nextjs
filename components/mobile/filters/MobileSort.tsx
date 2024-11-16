import { XIcon } from "lucide-react";
import React from "react";
import { sortOptions } from "@/data/navigationData";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";

export default function MobileSort({ onClose }: { onClose: () => void }) {
  return (
    <div className="inset-0 fixed bg-white lg:hidden overflow-y-scroll px-1 z-20">
      <div
        className="border-b-2 relative flex items-center justify-center py-4 mb-2"
        id="topbar"
      >
        <h1 className="font-semibold text-lg">Trier</h1>
        <XIcon
          size={42}
          strokeWidth={1}
          className="cursor-pointer absolute right-0 hover:scale-110"
          onClick={onClose}
        />
      </div>
      <RadioGroup
        defaultValue={`option-${sortOptions[0].id}`}
        className="flex flex-col justify-between p-6 gap-0"
      >
        {sortOptions.map(({ id, option }) => (
          <Label
            key={id}
            className="flex justify-between hover:bg-gray-100 cursor-pointer p-2 rounded"
            htmlFor={`option-${id}`}
          >
            <span>{option}</span>
            <RadioGroupItem
              value={`option-${id}`}
              id={`option-${id}`}
            ></RadioGroupItem>
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
}
