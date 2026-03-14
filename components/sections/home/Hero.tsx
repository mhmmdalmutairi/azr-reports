"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GlowOrbs from "@/components/ui/GlowOrbs";
import Particles from "@/components/ui/Particles";
import ClientLogos from "@/components/ui/ClientLogos";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  locale?: "ar" | "en";
}

export default function Hero({ locale = "ar" }: HeroProps) {
  const isRTL = locale === "ar";

  const titleWords = isRTL
    ? ["نحن", "استوديو", "ابتكار", "يصنع", "المستقبل"]
    : ["We", "are", "an", "innovation", "studio", "building", "the", "future"];

  const orangeWords = isRTL ? ["المستقبل"] : ["future"];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Layer 1: Grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Layer 2: Glow Orbs */}
      <GlowOrbs variant="hero" />

      {/* Layer 3: Rotating rings */}
      <div
        className="rotating-ring w-[400px] h-[400px] animate-rotate-ring hidden md:block"
        aria-hidden="true"
      />
      <div
        className="rotating-ring w-[600px] h-[600px] animate-rotate-ring-slow hidden md:block"
        aria-hidden="true"
      />

      {/* Layer 4: Particles */}
      <Particles />

      {/* Layer 5: Top radial gradient */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20">
        {/* Word-by-word title */}
        <h1 className="text-display font-bold text-white mb-8 leading-tight flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={orangeWords.includes(word) ? "text-[#FF8C00]" : ""}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {isRTL
            ? "نحوّل الأفكار الجريئة إلى تجارب واقعية، ومبادرات مبتكرة، وفعاليات تترك أثراً مستداماً"
            : "We transform bold ideas into real experiences, innovative initiatives, and events that leave a lasting impact"
          }
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <Link
            href={isRTL ? "/contact" : "/en/contact"}
            className="cta-breath px-10 py-4 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-semibold rounded-lg transition-colors text-lg"
          >
            {isRTL ? "ابدأ مشروعك" : "Start Your Project"}
          </Link>
          <Link
            href={isRTL ? "/work" : "/en/work"}
            className="px-10 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-colors text-lg"
          >
            {isRTL ? "شاهد أعمالنا" : "View Our Work"}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="text-white/30 text-xs mb-6 tracking-widest uppercase">
            {isRTL ? "شركاؤنا في النجاح" : "Our Success Partners"}
          </p>
          <ClientLogos />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown size={24} className="text-white/30 animate-scroll-hint" />
      </motion.div>
    </section>
  );
}
