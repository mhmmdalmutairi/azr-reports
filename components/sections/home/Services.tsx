import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data/services";
import { Rocket, Palette, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={28} />,
  Palette: <Palette size={28} />,
  TrendingUp: <TrendingUp size={28} />,
};

interface ServicesProps {
  locale?: "ar" | "en";
}

export default function Services({ locale = "ar" }: ServicesProps) {
  const isRTL = locale === "ar";

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge={isRTL ? "خدماتنا" : "Our Services"}
          title={isRTL ? "نتائج تتحدث، لا مجرد مخرجات" : "Results that speak, not just deliverables"}
          description={isRTL
            ? "نركز على النتائج التي تحققها، لا على المخرجات التي نسلمها"
            : "We focus on the outcomes you achieve, not the deliverables we hand over"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#FF8C00]/20 transition-all duration-300 card-hover h-full">
                <div className="w-14 h-14 rounded-xl bg-[#FF8C00]/10 flex items-center justify-center text-[#FF8C00] mb-6 group-hover:bg-[#FF8C00]/20 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title[locale]}
                </h3>
                <p className="text-[#FF8C00] text-sm font-medium mb-4">
                  {service.outcome[locale]}
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description[locale]}
                </p>
                <Link
                  href={isRTL ? `/services#${service.id}` : `/en/services#${service.id}`}
                  className="text-[#FF8C00] text-sm font-medium hover:underline"
                >
                  {isRTL ? "اكتشف المزيد ←" : "Learn more →"}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
