import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/services/ServiceDetail";
import CTA from "@/components/sections/home/CTA";
import { services } from "@/lib/data/services";

export default function ServicesPageEN() {
  return (
    <>
      <PageHero badge="Our Services" title="Results that speak, not just deliverables" description="We focus on the outcomes you achieve, not the deliverables we hand over. Three core services covering the full growth journey." />
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ServiceDetail key={service.id} service={service} locale="en" index={i} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>
      <CTA locale="en" />
    </>
  );
}
