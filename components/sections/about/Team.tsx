import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { team, experts } from "@/lib/data/team";

interface TeamProps {
  locale?: "ar" | "en";
}

export default function Team({ locale = "ar" }: TeamProps) {
  const isRTL = locale === "ar";

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge={isRTL ? "فريقنا" : "Our Team"}
          title={isRTL ? "فريق القيادة التنفيذية" : "Executive Leadership Team"}
        />

        {/* Leaders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF8C00]/20 to-[#81286e]/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white/30">
                    {member.name[locale].charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{member.name[locale]}</h3>
                <p className="text-[#FF8C00] text-sm mb-4">{member.role[locale]}</p>
                <p className="text-white/50 text-sm leading-relaxed">{member.bio[locale]}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Expert Network */}
        <ScrollReveal>
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-6">
              {isRTL ? "شبكة الخبراء" : "Expert Network"}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {experts.map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/60 text-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
