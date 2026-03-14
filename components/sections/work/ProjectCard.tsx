import type { Project } from "@/lib/types";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProjectCardProps {
  project: Project;
  locale?: "ar" | "en";
  index?: number;
}

export default function ProjectCard({ project, locale = "ar", index = 0 }: ProjectCardProps) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-[#FF8C00]/20 transition-all duration-300 card-hover">
        <div className="aspect-[16/10] bg-gradient-to-br from-[#001F3F] to-[#001229] flex items-center justify-center">
          <span className="text-white/10 text-5xl font-bold">azr</span>
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
  );
}
