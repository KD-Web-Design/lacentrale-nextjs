import HeroBadge from "@/components/HeroBadge";
import Navbar from "../components/Navbar";
import SideFilters from "@/components/SideFilters";
import FilterBtn from "@/components/mobile/MobileFilterBtn";
import SortBtn from "@/components/mobile/MobileSortBtn";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <HeroBadge />
        <SideFilters />
        <div className="grid grid-cols-2 gap-2 lg:hidden mt-4">
          <FilterBtn />
          <SortBtn />
        </div>
      </main>
    </>
  );
}
