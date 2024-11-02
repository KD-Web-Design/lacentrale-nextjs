import HeroBadge from "@/components/HeroBadge";
import Navbar from "../components/Navbar";
import { NavbarHoverCard } from "@/components/NavbarHoverCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <HeroBadge />
        <NavbarHoverCard />
      </main>
    </>
  );
}
