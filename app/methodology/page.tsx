import PageHero from "@/components/layout/PageHero";
import PhaseDetail from "@/components/sections/methodology/PhaseDetail";
import CTA from "@/components/sections/home/CTA";
import { phases } from "@/lib/data/methodology";

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        badge="منهجيتنا"
        title="نموذج العمل الرباعي 4D"
        description="أربع مراحل متكاملة تضمن الوصول من الاكتشاف إلى التطوير المستمر. منهجية مجرّبة في أكثر من 150 مشروع."
      />
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {phases.map((phase, i) => (
            <PhaseDetail key={phase.id} phase={phase} locale="ar" index={i} />
          ))}
        </div>
      </section>
      <CTA locale="ar" />
    </>
  );
}
