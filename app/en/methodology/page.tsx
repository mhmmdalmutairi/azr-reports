import PageHero from "@/components/layout/PageHero";
import PhaseDetail from "@/components/sections/methodology/PhaseDetail";
import CTA from "@/components/sections/home/CTA";
import { phases } from "@/lib/data/methodology";

export default function MethodologyPageEN() {
  return (
    <>
      <PageHero badge="Our Methodology" title="The 4D Working Model" description="Four integrated phases ensuring the journey from discovery to continuous development. A proven methodology across 150+ projects." />
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {phases.map((phase, i) => (
            <PhaseDetail key={phase.id} phase={phase} locale="en" index={i} />
          ))}
        </div>
      </section>
      <CTA locale="en" />
    </>
  );
}
