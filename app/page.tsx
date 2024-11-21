import HeroBadge from "@/components/HeroBadge";
import Navbar from "../components/Navbar";
import MainSection from "@/components/MainSection";
import FilterBtn from "@/components/mobile/MobileFilterBtn";
import SortBtn from "@/components/mobile/MobileSortBtn";
import MobileMainSection from "@/components/mobile/MobileMainSection";
import MobileFooter from "@/components/mobile/MobileFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="lg:p-4 lg:pb-0">
        <HeroBadge />
        <MainSection />
        <div className="sticky top-0 bg-white z-50 grid grid-cols-2 gap-2 lg:hidden mt-4 px-4 py-2">
          <FilterBtn />
          <SortBtn />
        </div>
        <MobileMainSection />
        <MobileFooter />
      </main>
    </>
  );
}
