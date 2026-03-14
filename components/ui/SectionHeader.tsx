import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({ badge, title, description, center = true }: SectionHeaderProps) {
  return (
    <ScrollReveal className={`mb-16 ${center ? "text-center" : ""}`}>
      <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF8C00]/10 text-[#FF8C00] border border-[#FF8C00]/20 mb-4">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
