import Hero from "@/components/sections/home/Hero";
import Problem from "@/components/sections/home/Problem";
import Services from "@/components/sections/home/Services";
import FeaturedWork from "@/components/sections/home/FeaturedWork";
import Methodology from "@/components/sections/home/Methodology";
import SocialProof from "@/components/sections/home/SocialProof";
import Stats from "@/components/sections/home/Stats";
import CTA from "@/components/sections/home/CTA";

export default function Home() {
  return (
    <>
      <Hero locale="ar" />
      <Problem locale="ar" />
      <Services locale="ar" />
      <FeaturedWork locale="ar" />
      <Methodology locale="ar" />
      <SocialProof locale="ar" />
      <Stats locale="ar" />
      <CTA locale="ar" />
    </>
  );
}
