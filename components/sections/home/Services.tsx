import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowOrbs from "@/components/ui/GlowOrbs";
import { services } from "@/lib/data/services";
import { Rocket, Palette, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={40} />,
  Palette: <Palette size={40} />,
  TrendingUp: <TrendingUp size={40} />,
};

const accentColors = [
  { bg: "rgba(255,140,0,0.08)", border: "rgba(255,140,0,0.15)", glow: "rgba(255,140,0,0.1)", text: "#FF8C00" },
  { bg: "rgba(129,40,110,0.08)", border: "rgba(129,40,110,0.15)", glow: "rgba(129,40,110,0.1)", text: "#81286e" },
  { bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.15)", glow: "rgba(59,130,246,0.1)", text: "#3B82F6" },
];

interface ServicesProps {
  locale?: "ar" | "en";
}

export default function Services({ locale = "ar" }: ServicesProps) {
  const isRTL = locale === "ar";

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <GlowOrbs variant="section" />
      <div className="absolute inset-0 bg-section-glow-orange pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          badge={isRTL ? "خدماتنا" : "Our Services"}
          title={isRTL ? "نتائج تتحدث، لا مجرد مخرجات" : "Results that speak, not just deliverables"}
          description={isRTL
            ? "نركز على النتائج التي تحققها، لا على المخرجات التي نسلمها"
            : "We focus on the outcomes you achieve, not the deliverables we hand over"
          }
        />

        {/* Asymmetric layout: first card large, other two stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large card */}
          <ScrollReveal className="lg:col-span-2 lg:row-span-2">
            <div
              className="group relative p-10 rounded-2xl border h-full card-hover overflow-hidden"
              style={{
                background: accentColors[0].bg,
                borderColor: accentColors[0].border,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 50%, ${accentColors[0].glow}, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: accentColors[0].bg, color: accentColors[0].text }}
                >
                  {iconMap[services[0].icon]}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {services[0].title[locale]}
                </h3>
                <p className="text-sm font-medium mb-6" style={{ color: accentColors[0].text }}>
                  {services[0].outcome[locale]}
                </p>
                <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg">
                  {services[0].description[locale]}
                </p>
                <Link
                  href={isRTL ? `/services#${services[0].id}` : `/en/services#${services[0].id}`}
                  className="text-sm font-medium hover:underline"
                  style={{ color: accentColors[0].text }}
                >
                  {isRTL ? "اكتشف المزيد ←" : "Learn more →"}
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Two stacked cards */}
          {services.slice(1).map((service, i) => {
            const accent = accentColors[i + 1];
            return (
              <ScrollReveal key={service.id} delay={(i + 1) * 0.15}>
                <div
                  className="group relative p-8 rounded-2xl border card-hover overflow-hidden h-full"
                  style={{
                    background: accent.bg,
                    borderColor: accent.border,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${accent.glow}, transparent 70%)` }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: accent.bg, color: accent.text }}
                    >
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title[locale]}
                    </h3>
                    <p className="text-sm font-medium mb-4" style={{ color: accent.text }}>
                      {service.outcome[locale]}
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      {service.description[locale]}
                    </p>
                    <Link
                      href={isRTL ? `/services#${service.id}` : `/en/services#${service.id}`}
                      className="text-sm font-medium hover:underline"
                      style={{ color: accent.text }}
                    >
                      {isRTL ? "اكتشف المزيد ←" : "Learn more →"}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
