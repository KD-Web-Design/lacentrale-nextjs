import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  navigation,
  acheterCategories,
  vendreCategories,
  laCoteCategories,
  vousConseillerCategories,
} from "@/data/navigationData";
import Image from "next/image";
import Link from "next/link";

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
          <AccordionContent className="">
            {item.name === "Acheter" && (
              <div className="flex flex-col gap-1">
                {acheterCategories.map((category, catIndex) => (
                  <Link
                    key={catIndex}
                    href="#"
                    className="flex flex-col my-2 px-6 gap-1 w-fit"
                  >
                    {category.Icon && (
                      <div
                        className={`flex items-center ${
                          category.name === "Voitures occasions"
                            ? "text-red-500"
                            : "hover:text-gray-600"
                        }`}
                      >
                        <category.Icon className="mr-2 h-4 w-4" />
                        <h3 className="font-semibold">{category.name}</h3>
                      </div>
                    )}

                    <span className="text-xs text-gray-500">
                      {category.description}
                    </span>
                  </Link>
                ))}
                <Image
                  src="/images/acheter-image.png"
                  alt="acheter-image"
                  width={700}
                  height={700}
                  className="my-2 w-full"
                />
              </div>
            )}
            {item.name === "Vendre" && (
              <div className="flex flex-col gap-1">
                {vendreCategories.map((category, catIndex) => (
                  <Link
                    key={catIndex}
                    href="#"
                    className="flex flex-col my-2 gap-1 w-fit"
                  >
                    {category.Icon && (
                      <div
                        className={`flex items-center ${
                          category.name === "Voitures occasions"
                            ? "text-red-500"
                            : "hover:text-gray-600"
                        }`}
                      >
                        <category.Icon className="mr-2 h-4 w-4" />
                        <h3 className="font-semibold">{category.name}</h3>
                      </div>
                    )}

                    <span className="text-xs text-gray-500">
                      {category.description}
                    </span>
                  </Link>
                ))}
                <Image
                  src="/images/vendre-image.png"
                  alt="vendre-image"
                  width={700}
                  height={700}
                  className="my-2 w-full"
                />
              </div>
            )}
            {item.name === "La Cote" && (
              <div className="flex flex-col gap-1">
                {laCoteCategories.map((category, catIndex) => (
                  <Link
                    key={catIndex}
                    href="#"
                    className="flex flex-col my-2 gap-1 w-fit"
                  >
                    {category.Icon && (
                      <div
                        className={`flex items-center ${
                          category.name === "Voitures occasions"
                            ? "text-red-500"
                            : "hover:text-gray-600"
                        }`}
                      >
                        <category.Icon className="mr-2 h-4 w-4" />
                        <h3 className="font-semibold">{category.name}</h3>
                      </div>
                    )}

                    <span className="text-xs text-gray-500">
                      {category.description}
                    </span>
                  </Link>
                ))}
                <Image
                  src="/images/lacote-image.png"
                  alt="lacote-image"
                  width={700}
                  height={700}
                  className="my-2 w-full"
                />
              </div>
            )}
            {item.name === "Vous conseiller" && (
              <div className="flex flex-col gap-1">
                {vousConseillerCategories.map((category, catIndex) => (
                  <Link
                    key={catIndex}
                    href="#"
                    className="flex flex-col my-2 gap-1 w-fit"
                  >
                    {category.Icon && (
                      <div
                        className={`flex items-center ${
                          category.name === "Voitures occasions"
                            ? "text-red-500"
                            : "hover:text-gray-600"
                        }`}
                      >
                        <category.Icon className="mr-2 h-4 w-4" />
                        <h3 className="font-semibold">{category.name}</h3>
                      </div>
                    )}

                    <span className="text-xs text-gray-500">
                      {category.description}
                    </span>
                  </Link>
                ))}
                <Image
                  src="/images/vous-conseiller-image.png"
                  alt="vous-conseiller-image"
                  width={700}
                  height={700}
                  className="my-2 w-full"
                />
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
