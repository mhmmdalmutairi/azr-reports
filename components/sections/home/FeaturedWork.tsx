import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data/projects";

interface FeaturedWorkProps {
  locale?: "ar" | "en";
}

export default function FeaturedWork({ locale = "ar" }: FeaturedWorkProps) {
  const isRTL = locale === "ar";
  const featured = projects.slice(0, 3);

  return (
    <section className="section-padding bg-[#001229]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge={isRTL ? "أعمالنا" : "Our Work"}
          title={isRTL ? "مشاريع صنعت الفرق" : "Projects that made a difference"}
          description={isRTL
            ? "نتائج حقيقية مع أرقام ملموسة — لا وعود فارغة"
            : "Real results with tangible numbers — not empty promises"
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <div className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-[#FF8C00]/20 transition-all duration-300 card-hover">
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-[#001F3F] to-[#001229] flex items-center justify-center">
                  <span className="text-white/10 text-6xl font-bold">azr</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#FF8C00] text-xs font-medium">{project.client[locale]}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-white/40 text-xs">{project.category[locale]}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF8C00] transition-colors">
                    {project.title[locale]}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-2">
                    {project.description[locale]}
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[#FF8C00] text-sm font-semibold">
                      {project.result[locale]}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="text-center mt-12">
          <Link
            href={isRTL ? "/work" : "/en/work"}
            className="inline-flex px-8 py-3 border border-white/20 hover:border-[#FF8C00]/40 text-white font-medium rounded-lg transition-colors"
          >
            {isRTL ? "شاهد كل الأعمال" : "View All Work"}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
