import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowOrbs from "@/components/ui/GlowOrbs";

interface CTAProps {
  locale?: "ar" | "en";
}

export default function CTA({ locale = "ar" }: CTAProps) {
  const isRTL = locale === "ar";

  return (
    <section className="relative py-40 md:py-48 px-6 md:px-12 lg:px-24 bg-[#001229] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Strong glow orbs */}
      <GlowOrbs variant="cta" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-display font-bold text-white mb-8">
            {isRTL ? (
              <>نصنع معاً<br /><span className="shimmer-text">أثراً يبقى</span></>
            ) : (
              <>Together we create<br /><span className="shimmer-text">lasting impact</span></>
            )}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-xl mx-auto">
            {isRTL
              ? "لديك فكرة جريئة؟ تحدٍّ معقد؟ رؤية طموحة؟ نحن مستعدون."
              : "Have a bold idea? A complex challenge? An ambitious vision? We're ready."
            }
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Link
            href={isRTL ? "/contact" : "/en/contact"}
            className="cta-breath inline-flex px-12 py-5 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-semibold rounded-xl transition-colors text-xl"
          >
            {isRTL ? "ابدأ مشروعك الآن" : "Start Your Project Now"}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
