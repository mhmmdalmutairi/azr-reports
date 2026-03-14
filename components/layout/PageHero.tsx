import ScrollReveal from "@/components/ui/ScrollReveal";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF8C00]/10 text-[#FF8C00] border border-[#FF8C00]/20 mb-6">
            {badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
