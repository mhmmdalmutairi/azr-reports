import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Lightbulb, Award, Target, Shield, Zap } from "lucide-react";

interface ValuesProps {
  locale?: "ar" | "en";
}

const values = [
  {
    icon: <Lightbulb size={24} />,
    title: { ar: "الابتكار", en: "Innovation" },
    desc: { ar: "نتجاوز الأساليب التقليدية لنبتكر حلولاً استثنائية وعملية", en: "We transcend traditional methods to create exceptional and practical solutions" },
  },
  {
    icon: <Award size={24} />,
    title: { ar: "التميز", en: "Excellence" },
    desc: { ar: "نلتزم بأعلى معايير الجودة والتطوير المستمر في كل تفصيل", en: "We commit to highest quality standards and continuous improvement in every detail" },
  },
  {
    icon: <Target size={24} />,
    title: { ar: "الأثر", en: "Impact" },
    desc: { ar: "نصنع عوائد اجتماعية وبيئية ملموسة توازي النتائج المالية", en: "We create tangible social and environmental returns that match financial results" },
  },
  {
    icon: <Shield size={24} />,
    title: { ar: "النزاهة", en: "Integrity" },
    desc: { ar: "نعمل بشفافية مطلقة والتزام أخلاقي كامل في جميع تعاملاتنا", en: "We work with absolute transparency and complete ethical commitment" },
  },
  {
    icon: <Zap size={24} />,
    title: { ar: "المرونة", en: "Agility" },
    desc: { ar: "نستجيب للمتغيرات بسرعة وكفاءة لنضمن استمرارية النمو", en: "We respond to changes quickly and efficiently to ensure continuous growth" },
  },
];

export default function Values({ locale = "ar" }: ValuesProps) {
  const isRTL = locale === "ar";

  return (
    <section className="section-padding bg-[#001229]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge={isRTL ? "قيمنا" : "Our Values"}
          title={isRTL ? "القيم الجوهرية التي تقودنا" : "Core values that guide us"}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-[#FF8C00]/10 flex items-center justify-center text-[#FF8C00] mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{v.title[locale]}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc[locale]}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
