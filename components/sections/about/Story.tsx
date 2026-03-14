import ScrollReveal from "@/components/ui/ScrollReveal";
import { timeline } from "@/lib/data/partners";

interface StoryProps {
  locale?: "ar" | "en";
}

export default function Story({ locale = "ar" }: StoryProps) {
  const isRTL = locale === "ar";

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-white/60 text-lg leading-relaxed mb-16 text-center max-w-3xl mx-auto">
            {isRTL
              ? "منذ 2018، ننطلق من الرياض لنبني منظومة تشغيل نمو متكاملة — نبدأ بالاكتشاف، ونصل لتحقيق نمو مستدام وأثر ملموس عبر الابتكار والشراكة الاستراتيجية."
              : "Since 2018, we've been building from Riyadh an integrated growth operating system — starting with discovery and reaching sustainable growth and tangible impact through innovation and strategic partnership."
            }
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute top-0 bottom-0 right-1/2 md:right-1/2 w-px bg-gradient-to-b from-transparent via-[#FF8C00]/30 to-transparent" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1 text-end md:text-start">
                    {i % 2 === 0 && (
                      <div className="md:text-end">
                        <span className="text-[#FF8C00] font-bold text-lg">{item.year}</span>
                        <h3 className="text-white font-semibold mt-1">{item.title[locale]}</h3>
                        <p className="text-white/50 text-sm mt-1">{item.desc[locale]}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-[#FF8C00] border-4 border-[#001F3F] flex-shrink-0" />
                  <div className="flex-1">
                    {i % 2 !== 0 && (
                      <div>
                        <span className="text-[#FF8C00] font-bold text-lg">{item.year}</span>
                        <h3 className="text-white font-semibold mt-1">{item.title[locale]}</h3>
                        <p className="text-white/50 text-sm mt-1">{item.desc[locale]}</p>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
