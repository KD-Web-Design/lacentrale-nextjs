import HeroBadge from "@/components/HeroBadge";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <HeroBadge />
      </main>
    </>
  );
}
