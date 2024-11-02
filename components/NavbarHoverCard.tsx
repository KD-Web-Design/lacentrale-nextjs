import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { navigation, NavigationItem } from "@/data/navigationData";
import Image from "next/image";
import Link from "next/link";

interface NavbarHoverCardProps {
  children: React.ReactNode;
  categories?: NavigationItem[];
}

export function NavbarHoverCard({
  children,
  categories,
}: NavbarHoverCardProps) {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="flex w-[550px] divide-x-2 p-3">
        <div className="w-7/12">
          {categories?.map((category, catIndex) => (
            <Link
              key={catIndex}
              href={category.href}
              className="flex flex-col px-4 py-2 gap-1 w-fit"
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
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                </div>
              )}
              <span className="text-xs text-gray-500">
                {category.description}
              </span>
            </Link>
          ))}
        </div>
        <div className="w-5/12 flex items-center justify-center p-4">
          {navigation.map((item) => (
            <Image
              key={item.name}
              src={item.image}
              alt="acheter-image"
              width={700}
              height={700}
              className="w-full"
            />
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
