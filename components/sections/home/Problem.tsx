import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProblemProps {
  locale?: "ar" | "en";
}

export default function Problem({ locale = "ar" }: ProblemProps) {
  const isRTL = locale === "ar";

  return (
    <section className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-[#001229] overflow-hidden">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Purple glow from bottom */}
      <div className="absolute inset-0 bg-section-glow-purple pointer-events-none" />

      {/* Decorative quote mark */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 text-[200px] font-serif text-white/[0.03] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#81286e]/10 text-[#81286e] border border-[#81286e]/20 mb-8">
            {isRTL ? "التحدي" : "The Challenge"}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-headline font-bold text-white mb-10 leading-tight">
            {isRTL ? (
              <>في عالم يغرق في <span className="text-[#81286e]">طوفان التقليد</span><br />والحلول المعلّبة</>
            ) : (
              <>In a world drowning in <span className="text-[#81286e]">conventional thinking</span><br />and cookie-cutter solutions</>
            )}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            {isRTL
              ? "تحتاج المؤسسات الطموحة إلى شريك يفهم السياق المحلي، يتقن الابتكار، ويقدم حلولاً مصممة خصيصاً لتحدياتهم — لا نسخاً مكررة من حلول جاهزة."
              : "Ambitious organizations need a partner who understands the local context, masters innovation, and delivers solutions designed specifically for their challenges — not recycled templates."
            }
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[#FF8C00] text-xl font-semibold relative inline-block">
            {isRTL ? "هنا يبدأ دور أزر." : "This is where AZR comes in."}
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF8C00]/60 to-transparent" />
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
