import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Service } from "@/lib/types";
import { Rocket, Palette, TrendingUp, Check } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={32} />,
  Palette: <Palette size={32} />,
  TrendingUp: <TrendingUp size={32} />,
};

interface ServiceDetailProps {
  service: Service;
  locale?: "ar" | "en";
  index?: number;
  reversed?: boolean;
}

export default function ServiceDetail({ service, locale = "ar", index = 0, reversed }: ServiceDetailProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        id={service.id}
        className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center py-16 ${
          index > 0 ? "border-t border-white/5" : ""
        }`}
      >
        {/* Icon side */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-2xl bg-[#FF8C00]/10 flex items-center justify-center text-[#FF8C00]">
            {iconMap[service.icon]}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {service.title[locale]}
          </h2>
          <p className="text-[#FF8C00] font-medium mb-4">
            {service.outcome[locale]}
          </p>
          <p className="text-white/60 leading-relaxed mb-6">
            {service.description[locale]}
          </p>
          <ul className="space-y-3">
            {service.features[locale].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                <Check size={16} className="text-[#FF8C00] mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
