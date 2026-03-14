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
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF8C00] mb-2">
                <Counter end={stat.value} suffix={stat.suffix[locale]} />
              </div>
              <p className="text-white/50 text-sm">{stat.label[locale]}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
