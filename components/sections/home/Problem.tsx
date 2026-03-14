import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProblemProps {
  locale?: "ar" | "en";
}

export default function Problem({ locale = "ar" }: ProblemProps) {
  const isRTL = locale === "ar";

  return (
    <section className="section-padding bg-[#001229]">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#81286e]/10 text-[#81286e] border border-[#81286e]/20 mb-6">
            {isRTL ? "التحدي" : "The Challenge"}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {isRTL ? (
              <>في عالم يغرق في <span className="text-[#81286e]">طوفان التقليد</span><br />والحلول المعلّبة</>
            ) : (
              <>In a world drowning in <span className="text-[#81286e]">conventional thinking</span><br />and cookie-cutter solutions</>
            )}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            {isRTL
              ? "تحتاج المؤسسات الطموحة إلى شريك يفهم السياق المحلي، يتقن الابتكار، ويقدم حلولاً مصممة خصيصاً لتحدياتهم — لا نسخاً مكررة من حلول جاهزة."
              : "Ambitious organizations need a partner who understands the local context, masters innovation, and delivers solutions designed specifically for their challenges — not recycled templates."
            }
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[#FF8C00] text-lg font-semibold">
            {isRTL ? "هنا يبدأ دور أزر." : "This is where AZR comes in."}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
