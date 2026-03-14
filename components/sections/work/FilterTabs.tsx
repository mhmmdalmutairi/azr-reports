"use client";

import { cn } from "@/lib/utils";
import { categories } from "@/lib/data/projects";

interface FilterTabsProps {
  active: string;
  onChange: (slug: string) => void;
  locale?: "ar" | "en";
}

export default function FilterTabs({ active, onChange, locale = "ar" }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onChange(cat.slug)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all",
            active === cat.slug
              ? "bg-[#FF8C00] text-white"
              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
          )}
        >
          {cat.label[locale]}
        </button>
      ))}
    </div>
  );
}
