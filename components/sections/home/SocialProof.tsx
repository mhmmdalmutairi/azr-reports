"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data/testimonials";
import { Quote } from "lucide-react";

interface SocialProofProps {
  locale?: "ar" | "en";
}

export default function SocialProof({ locale = "ar" }: SocialProofProps) {
  const isRTL = locale === "ar";

  return (
    <section className="section-padding bg-[#001229]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge={isRTL ? "شهادات عملائنا" : "Client Testimonials"}
          title={isRTL ? "ماذا يقول شركاؤنا" : "What our partners say"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] h-full flex flex-col">
                <Quote size={24} className="text-[#FF8C00]/30 mb-4 flex-shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                  &ldquo;{t.quote[locale]}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-white font-medium text-sm">{t.author[locale]}</p>
                  <p className="text-white/40 text-xs">{t.role[locale]}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
