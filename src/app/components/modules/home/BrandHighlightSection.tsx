import React from "react";

import { Play } from "lucide-react";
import Image from "next/image";

type VideoSectionProps = {
  thumbnail: string;
};

export type CardData = {
  heading: string;
  desc: string;
};

export const rightCardData: CardData[] = [
  {
    heading: "Innovation with Purpose",
    desc: "Our patents and R&D aren't just for progress—they're for impact.",
  },
  {
    heading: "Global Standards, Local Relevance",
    desc: "Technology born in South Korea, adapted for India's unique needs.",
  },
  {
    heading: "Wellness Beyond Self",
    desc: "Products that improve not only personal health, but the health of the spaces we live in.",
  },
];

export const leftCardData: CardData[] = [
  {
    heading: "Sustainability at Root",
    desc: "Every decision, from materials to manufacturing, is made with environmental responsibility in mind.",
  },
  {
    heading: "Design Meets Function",
    desc: "We believe beauty and performance should never be separate.",
  },
  {
    heading: "Wellness Beyond Self",
    desc: "Products that improve not only personal health, but the health of the spaces we live in.",
  },
];

export const BrandHighlightSection = () => {
  return (
    <div className="min-h-screen w-full p-20 flex flex-col items-center gap-10">
      <h2 className="text-5xl font-semibold">Brand Highlights Value</h2>
      <p className="text-2xl text-center max-w-5xl">
        Rooted in South Korea's culture of precision, wellness, and respect for
        nature, ECDS was founded with one clear mission to reduce carbon
        emissions & create solutions that are as kind to the planet as they are
        effective for people
      </p>
      {/* highlight section */}
      <HighlightSection />
    </div>
  );
};

const HighlightSection = () => {
  return (
    <div className="grid grid-cols-3 gap-10 py-10">
      {/* left-Cards section */}
      <div className="flex flex-col items-stretch justify-center gap-7 ">
        {leftCardData.map((data) => (
          <Card {...data} />
        ))}
      </div>
      {/* video section */}
      <VideoSection thumbnail="/thumbnail.png" />
      {/* right-Cards section */}
      <div className="flex flex-col items-stretch justify-center gap-7 ">
        {rightCardData.map((data) => (
          <Card {...data} />
        ))}
      </div>
    </div>
  );
};

export const VideoSection = ({ thumbnail }: VideoSectionProps) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="rounded-[24px] bg-gradient-to-b from-secondary to-primary p-2">
        <div className="relative overflow-hidden rounded-[20px]">
          <Image
            src={thumbnail}
            alt="ECDS Video Thumbnail"
            width={320}
            height={560}
            className="h-[560px] w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Play Button */}
          <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:scale-105">
            <Play size={28} fill="currentColor" className="ml-1 text-primary" />
          </button>

          {/* Duration */}
          <div className="absolute bottom-4 right-4 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
            0:10
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ heading, desc }: { heading: string; desc: string }) => {
  return (
    <div className="rounded-lg bg-linear-to-t from-primary to-secondary space-y-3 p-4 h-30">
      <h3 className="font-semibold text-white">{heading}</h3>
      <p className="text-white">{desc}</p>
    </div>
  );
};
