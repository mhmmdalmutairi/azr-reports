"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Counter from "@/components/ui/Counter";
import type { Stat } from "@/lib/types";

interface StatsProps {
  locale?: "ar" | "en";
}

const stats: Stat[] = [
  { value: 8, suffix: { ar: "+", en: "+" }, label: { ar: "سنوات خبرة", en: "Years of Experience" } },
  { value: 150, suffix: { ar: "+", en: "+" }, label: { ar: "مشروع منجز", en: "Completed Projects" } },
  { value: 85, suffix: { ar: "+", en: "+" }, label: { ar: "عميل وشريك", en: "Clients & Partners" } },
  { value: 3, suffix: { ar: "", en: "" }, label: { ar: "قطاعات رئيسية", en: "Major Sectors" } },
];

export default function Stats({ locale = "ar" }: StatsProps) {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Floating gradient band */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001229]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.12} className="text-center group">
              <div className="relative py-6">
                {/* Vertical divider between items (not first on mobile, not first on desktop) */}
                {i > 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/5" />
                )}

                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#FF8C00] mb-4 group-hover:scale-[1.08] group-hover:brightness-125 transition-all duration-300">
                  <Counter end={stat.value} suffix={stat.suffix[locale]} />
                </div>
                <p className="text-white/50 text-sm md:text-base">{stat.label[locale]}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
