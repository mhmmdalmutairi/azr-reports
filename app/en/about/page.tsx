import PageHero from "@/components/layout/PageHero";
import Story from "@/components/sections/about/Story";
import Values from "@/components/sections/about/Values";
import Team from "@/components/sections/about/Team";
import Partners from "@/components/sections/about/Partners";
import Stats from "@/components/sections/home/Stats";

export default function AboutPageEN() {
  return (
    <>
      <PageHero badge="About Us" title="Innovate to Grow" description="Since 2018, building from Riyadh an integrated growth operating system — from discovery to sustainable growth and tangible impact." />
      <Story locale="en" />
      <Values locale="en" />
      <Stats locale="en" />
      <Team locale="en" />
      <Partners locale="en" />
    </>
  );
}
