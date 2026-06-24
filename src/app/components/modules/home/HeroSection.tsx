import Image from "next/image";
import { Button } from "../../ui/Button";

export const HeroSection = () => {
  return (
    <div className="bg-[url('/hero-model.png')] bg-cover h-200 overflow-hidden rounded-xl w-full scale-90 grid grid-cols-2">
      <div className="bg-transparent" />
      <HeroText />
    </div>
  );
};

const HeroText = () => {
  return (
    <div className="flex flex-col justify-center gap-10 p-8 px-12">
      <h1 className="text-8xl text-primary whitespace-pre-line">
        South Korean Innovation. Rooted {"\n"} in Sustainability. {"\n"}{" "}
        <span className="font-semibold">Now in India</span>
      </h1>
      <p className="text-3xl leading-8 text-primary">
        From breathable wall panels to restorat 764×240 and eco-conscious
        materials, ECDS delivers patented solutions for a cleaner, healthier
        future in India
      </p>
      {/* buttons */}
      <div className="flex items-center gap-10">
        <Button className="w-fit p-2 text-lg">EXPLORE OUR BRAND</Button>
        <Button className="w-fit p-2 text-lg">LEARN MORE ABOUT ECDS</Button>
      </div>
    </div>
  );
};
