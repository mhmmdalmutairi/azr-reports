"use client";

import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowOrbs from "@/components/ui/GlowOrbs";
import { testimonials } from "@/lib/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";

interface SocialProofProps {
  locale?: "ar" | "en";
}

export default function SocialProof({ locale = "ar" }: SocialProofProps) {
  const isRTL = locale === "ar";
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="relative section-padding bg-[#001229] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <GlowOrbs variant="section" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeader
          badge={isRTL ? "شهادات عملائنا" : "Client Testimonials"}
          title={isRTL ? "ماذا يقول شركاؤنا" : "What our partners say"}
        />

        {/* Single large testimonial */}
        <ScrollReveal>
          <div className="relative text-center px-4 md:px-16 py-12">
            {/* Large quote mark */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] font-serif text-[#FF8C00]/[0.08] leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <p className="text-white/80 text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
                  &ldquo;{t.quote[locale]}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-lg">{t.author[locale]}</p>
                  <p className="text-white/40 text-sm mt-1">{t.role[locale]}</p>
                  <p className="text-[#FF8C00] text-sm mt-2 font-medium">{t.project[locale]}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`dot-pill h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-[#FF8C00]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
