import HeroBadge from "@/components/HeroBadge";
import Navbar from "../components/Navbar";
import MainSection from "@/components/MainSection";
import FilterBtn from "@/components/mobile/MobileFilterBtn";
import SortBtn from "@/components/mobile/MobileSortBtn";
import MobileMainSection from "@/components/mobile/MobileMainSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <HeroBadge />
        <MainSection />
        <div className="grid grid-cols-2 gap-2 lg:hidden mt-4">
          <FilterBtn />
          <SortBtn />
        </div>
        <MobileMainSection />
      </main>
    </>
  );
}
