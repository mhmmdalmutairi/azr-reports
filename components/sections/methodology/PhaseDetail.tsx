"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { MethodologyPhase } from "@/lib/types";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PhaseDetailProps {
  phase: MethodologyPhase;
  locale?: "ar" | "en";
  index?: number;
}

export default function PhaseDetail({ phase, locale = "ar", index = 0 }: PhaseDetailProps) {
  const [open, setOpen] = useState(index === 0);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="border border-white/[0.06] rounded-2xl overflow-hidden mb-4">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-6 md:p-8 text-start hover:bg-white/[0.02] transition-colors"
        >
          <div className="flex items-center gap-4 md:gap-6">
            <span className="text-3xl md:text-4xl font-bold text-[#FF8C00]/30">
              {phase.number}
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {phase.title[locale]}
              </h3>
              <p className="text-[#FF8C00] text-sm mt-1">
                {phase.subtitle[locale]}
              </p>
            </div>
          </div>
          <ChevronDown
            size={20}
            className={`text-white/40 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 pt-2">
                <p className="text-white/60 leading-relaxed mb-6">
                  {phase.description[locale]}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                      {locale === "ar" ? "الأنشطة الرئيسية" : "Key Activities"}
                    </h4>
                    <ul className="space-y-3">
                      {phase.activities[locale].map((a, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                          <Check size={14} className="text-[#FF8C00] mt-0.5 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                      {locale === "ar" ? "المخرجات" : "Outputs"}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                      {phase.outputs[locale]}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}
