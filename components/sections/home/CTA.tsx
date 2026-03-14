import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CTAProps {
  locale?: "ar" | "en";
}

export default function CTA({ locale = "ar" }: CTAProps) {
  const isRTL = locale === "ar";

  return (
    <section className="section-padding bg-[#001229]">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {isRTL ? (
              <>نصنع معاً<br /><span className="text-[#FF8C00]">أثراً يبقى</span></>
            ) : (
              <>Together we create<br /><span className="text-[#FF8C00]">lasting impact</span></>
            )}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            {isRTL
              ? "لديك فكرة جريئة؟ تحدٍّ معقد؟ رؤية طموحة؟ نحن مستعدون."
              : "Have a bold idea? A complex challenge? An ambitious vision? We're ready."
            }
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Link
            href={isRTL ? "/contact" : "/en/contact"}
            className="inline-flex px-10 py-4 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-semibold rounded-lg transition-colors text-lg"
          >
            {isRTL ? "ابدأ مشروعك الآن" : "Start Your Project Now"}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
