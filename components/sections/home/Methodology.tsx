"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { phases } from "@/lib/data/methodology";
import { useInView } from "react-intersection-observer";

interface MethodologyProps {
  locale?: "ar" | "en";
}

export default function Methodology({ locale = "ar" }: MethodologyProps) {
  const isRTL = locale === "ar";
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          badge={isRTL ? "منهجيتنا" : "Our Methodology"}
          title={isRTL ? "نموذج العمل الرباعي 4D" : "The 4D Working Model"}
          description={isRTL
            ? "منهجية مجرّبة في أكثر من 150 مشروع — من الاكتشاف إلى التطوير المستمر"
            : "A proven methodology across 150+ projects — from discovery to continuous development"
          }
        />

        {/* Desktop: Horizontal timeline */}
        <div ref={timelineRef} className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-white/5">
            <div
              className="h-full timeline-line transition-all duration-[2s] ease-out"
              style={{ width: timelineInView ? "100%" : "0%" }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.id} delay={i * 0.2}>
                <div className="relative text-center pt-4">
                  {/* Timeline dot */}
                  <div className="relative mx-auto mb-8">
                    <div className={`w-5 h-5 rounded-full bg-[#FF8C00] mx-auto ${timelineInView ? 'timeline-dot-active' : 'timeline-dot'} transition-all duration-500`}
                      style={{ transitionDelay: `${i * 0.3 + 0.5}s` }}
                    />
                  </div>

                  {/* Phase number watermark */}
                  <div className="text-7xl font-bold text-white/[0.06] absolute top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none">
                    {phase.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pt-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {phase.title[locale]}
                    </h3>
                    <p className="text-[#FF8C00] text-sm mb-4">
                      {phase.subtitle[locale]}
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {phase.description[locale]}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-4 w-[2px] bg-white/5">
            <div
              className="w-full timeline-line transition-all duration-[2s] ease-out"
              style={{ height: timelineInView ? "100%" : "0%" }}
            />
          </div>

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.id} delay={i * 0.15}>
                <div className="relative flex gap-6">
                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-[#FF8C00] timeline-dot ml-0.5" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <span className="text-5xl font-bold text-white/[0.06] absolute -top-4 -right-2 select-none pointer-events-none">
                      {phase.number}
                    </span>
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {phase.title[locale]}
                      </h3>
                      <p className="text-[#FF8C00] text-sm mb-3">
                        {phase.subtitle[locale]}
                      </p>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {phase.description[locale]}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.4} className="text-center mt-12">
          <Link
            href={isRTL ? "/methodology" : "/en/methodology"}
            className="text-[#FF8C00] text-sm font-medium hover:underline"
          >
            {isRTL ? "اكتشف المنهجية كاملة ←" : "Explore the full methodology →"}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
