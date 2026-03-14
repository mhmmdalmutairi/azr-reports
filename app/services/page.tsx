import PageHero from "@/components/layout/PageHero";
import ServiceDetail from "@/components/sections/services/ServiceDetail";
import CTA from "@/components/sections/home/CTA";
import { services } from "@/lib/data/services";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="خدماتنا"
        title="نتائج تتحدث، لا مجرد مخرجات"
        description="نركز على النتائج التي تحققها، لا على المخرجات التي نسلمها. ثلاث خدمات أساسية تغطي رحلة النمو كاملة."
      />
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ServiceDetail
              key={service.id}
              service={service}
              locale="ar"
              index={i}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </section>
      <CTA locale="ar" />
    </>
  );
}
