import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { phases } from "@/lib/data/methodology";

interface MethodologyProps {
  locale?: "ar" | "en";
}

export default function Methodology({ locale = "ar" }: MethodologyProps) {
  const isRTL = locale === "ar";

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge={isRTL ? "منهجيتنا" : "Our Methodology"}
          title={isRTL ? "نموذج العمل الرباعي 4D" : "The 4D Working Model"}
          description={isRTL
            ? "منهجية مجرّبة في أكثر من 150 مشروع — من الاكتشاف إلى التطوير المستمر"
            : "A proven methodology across 150+ projects — from discovery to continuous development"
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.id} delay={i * 0.1}>
              <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#FF8C00]/20 transition-all duration-300 h-full">
                <span className="text-5xl font-bold text-[#FF8C00]/10 absolute top-4 left-4">
                  {phase.number}
                </span>
                <div className="relative z-10 pt-8">
                  <h3 className="text-xl font-bold text-white mb-1">
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

        <ScrollReveal delay={0.4} className="text-center mt-10">
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
