import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data/projects";

interface FeaturedWorkProps {
  locale?: "ar" | "en";
}

const categoryGradients: Record<string, string> = {
  campaigns: "from-[#FF8C00]/20 via-[#FF8C00]/5 to-[#001229]",
  "social-impact": "from-[#22C55E]/15 via-[#22C55E]/5 to-[#001229]",
  strategy: "from-[#81286e]/15 via-[#81286e]/5 to-[#001229]",
  hospitality: "from-[#3B82F6]/15 via-[#3B82F6]/5 to-[#001229]",
  business: "from-[#F59E0B]/15 via-[#F59E0B]/5 to-[#001229]",
};

export default function FeaturedWork({ locale = "ar" }: FeaturedWorkProps) {
  const isRTL = locale === "ar";
  const featured = projects.slice(0, 3);

  return (
    <section className="relative section-padding bg-[#001229] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge={isRTL ? "أعمالنا" : "Our Work"}
          title={isRTL ? "مشاريع صنعت الفرق" : "Projects that made a difference"}
          description={isRTL
            ? "نتائج حقيقية مع أرقام ملموسة — لا وعود فارغة"
            : "Real results with tangible numbers — not empty promises"
          }
        />

        {/* Magazine layout: first full-width, next two side-by-side */}
        <div className="space-y-6">
          {/* Featured project - full width */}
          <ScrollReveal>
            <Link
              href={isRTL ? `/work` : `/en/work`}
              className="group block rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#FF8C00]/20 transition-all duration-500 card-hover"
            >
              <div className="relative aspect-[21/9] md:aspect-[21/8]">
                <div className={`absolute inset-0 bg-gradient-to-b ${categoryGradients[featured[0].categorySlug] || categoryGradients.campaigns}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/[0.06] text-[120px] md:text-[180px] font-bold select-none">azr</span>
                  </div>
                </div>
                {/* Text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001229] via-[#001229]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#FF8C00] text-sm font-medium">{featured[0].client[locale]}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-white/40 text-sm">{featured[0].category[locale]}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#FF8C00] transition-colors">
                    {featured[0].title[locale]}
                  </h3>
                  <p className="text-white/50 text-base mb-4 max-w-2xl">
                    {featured[0].description[locale]}
                  </p>
                  <p className="text-[#FF8C00] font-semibold">
                    {featured[0].result[locale]}
                  </p>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Two side-by-side projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.slice(1).map((project, i) => (
              <ScrollReveal key={project.id} delay={(i + 1) * 0.15}>
                <Link
                  href={isRTL ? `/work` : `/en/work`}
                  className="group block rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#FF8C00]/20 transition-all duration-500 card-hover"
                >
                  <div className="relative aspect-[4/3]">
                    <div className={`absolute inset-0 bg-gradient-to-b ${categoryGradients[project.categorySlug] || categoryGradients.campaigns}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/[0.06] text-[80px] md:text-[100px] font-bold select-none group-hover:scale-105 transition-transform duration-500">azr</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001229] via-[#001229]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[#FF8C00] text-xs font-medium">{project.client[locale]}</span>
                        <span className="text-white/20">·</span>
                        <span className="text-white/40 text-xs">{project.category[locale]}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#FF8C00] transition-colors">
                        {project.title[locale]}
                      </h3>
                      <p className="text-white/50 text-sm mb-3 line-clamp-2">
                        {project.description[locale]}
                      </p>
                      <p className="text-[#FF8C00] text-sm font-semibold">
                        {project.result[locale]}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
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
