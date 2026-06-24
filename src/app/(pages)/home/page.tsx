import { BrandHighlightSection } from "@/app/components/modules/home/BrandHighlightSection";
import { HeroSection } from "@/app/components/modules/home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center sfont-sans">
      <HeroSection />
      <BrandHighlightSection />
    </div>
  );
}
