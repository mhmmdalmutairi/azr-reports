import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { partners } from "@/lib/data/partners";

interface PartnersProps {
  locale?: "ar" | "en";
}

export default function Partners({ locale = "ar" }: PartnersProps) {
  const isRTL = locale === "ar";

  return (
    <section className="section-padding bg-[#001229]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge={isRTL ? "شركاؤنا" : "Our Partners"}
          title={isRTL ? "شركاء النجاح" : "Success Partners"}
        />

        {/* Government */}
        <ScrollReveal className="mb-12">
          <h3 className="text-white/40 text-sm font-medium tracking-widest uppercase text-center mb-6">
            {isRTL ? "القطاع الحكومي" : "Government Sector"}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.government.map((p) => (
              <div key={p.name[locale]} className="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-white/50 text-sm font-medium">{p.name[locale]}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Private */}
        <ScrollReveal delay={0.1}>
          <h3 className="text-white/40 text-sm font-medium tracking-widest uppercase text-center mb-6">
            {isRTL ? "القطاع الخاص" : "Private Sector"}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.private.map((p) => (
              <div key={p.name[locale]} className="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-white/50 text-sm font-medium">{p.name[locale]}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
