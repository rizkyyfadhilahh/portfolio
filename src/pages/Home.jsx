import { HeroSection } from "../components/HeroSection";
import { Achievements } from "../components/Achievements";
import { FeaturedWork } from "../components/FeaturedWork";
import { WhatIDo } from "../components/WhatIDo";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Achievements />
      <FeaturedWork />
      <WhatIDo />
    </>
  );
};
