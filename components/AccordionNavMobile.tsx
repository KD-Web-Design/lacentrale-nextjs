import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navigation } from "@/data/navigationData";

export function AccordionNavMobile() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {navigation.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="">
          <AccordionTrigger
            className={`font-semibold text-md ${
              item.name === "Acheter" ? "text-red-500" : "hover:text-gray-600"
            }`}
          >
            {item.name}
          </AccordionTrigger>
          <AccordionContent>
            <p>empty</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
