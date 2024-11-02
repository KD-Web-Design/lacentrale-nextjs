import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  navigation,
  acheterCategories,
  vendreCategories,
  laCoteCategories,
  vousConseillerCategories,
} from "@/data/navigationData";
import Link from "next/link";
import Image from "next/image";

export function NavbarHoverCard() {
  return (
    <div className="mx-auto max-w-sm p-10">
      <HoverCard>
        <HoverCardTrigger asChild>
          <ul className="hidden lg:inline-flex items-center gap-2 h-full">
            {navigation.map((item) => (
              <li
                key={item.name}
                className={`relative group inline-block mx-4 py-2 ${
                  item.current ? "text-accent" : "hover:text-accent"
                }`}
              >
                <a href={item.href} className="font-semibold">
                  {item.name}
                </a>
                <div
                  className={`h-[2px] bg-accent ${
                    item.current ? "w-full" : "w-0 group-hover:w-full"
                  } absolute bottom-0 left-0`}
                />
              </li>
            ))}
          </ul>
        </HoverCardTrigger>
        <HoverCardContent className="w-[700px] h-72">
          {navigation.map((item, index) => (
            <div key={index}>
              {item.id === 1 && (
                <div className="flex gap-1">
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
                                ? "text-accent"
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
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      src="/images/acheter-desktop.png"
                      alt="acheter-image"
                      width={700}
                      height={700}
                      className=""
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
