import PageHero from "@/components/layout/PageHero";
import Story from "@/components/sections/about/Story";
import Values from "@/components/sections/about/Values";
import Team from "@/components/sections/about/Team";
import Partners from "@/components/sections/about/Partners";
import Stats from "@/components/sections/home/Stats";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="من نحن"
        title="نبتكر.. لننمو"
        description="منذ 2018، ننطلق من الرياض لنبني منظومة تشغيل نمو متكاملة — نبدأ بالاكتشاف، ونصل لتحقيق نمو مستدام وأثر ملموس."
      />
      <Story locale="ar" />
      <Values locale="ar" />
      <Stats locale="ar" />
      <Team locale="ar" />
      <Partners locale="ar" />
    </>
  );
}
