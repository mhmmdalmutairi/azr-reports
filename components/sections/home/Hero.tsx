"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ClientLogos from "@/components/ui/ClientLogos";

interface HeroProps {
  locale?: "ar" | "en";
}

export default function Hero({ locale = "ar" }: HeroProps) {
  const isRTL = locale === "ar";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {isRTL ? (
              <>نحن استوديو ابتكار<br /><span className="text-[#FF8C00]">يصنع المستقبل</span></>
            ) : (
              <>We are an innovation studio<br /><span className="text-[#FF8C00]">building the future</span></>
            )}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {isRTL
            ? "نحوّل الأفكار الجريئة إلى تجارب واقعية، ومبادرات مبتكرة، وفعاليات تترك أثراً مستداماً"
            : "We transform bold ideas into real experiences, innovative initiatives, and events that leave a lasting impact"
          }
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href={isRTL ? "/contact" : "/en/contact"}
            className="px-8 py-3.5 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-medium rounded-lg transition-colors text-base"
          >
            {isRTL ? "ابدأ مشروعك" : "Start Your Project"}
          </Link>
          <Link
            href={isRTL ? "/work" : "/en/work"}
            className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-colors text-base"
          >
            {isRTL ? "شاهد أعمالنا" : "View Our Work"}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-white/30 text-xs mb-6 tracking-widest uppercase">
            {isRTL ? "شركاؤنا في النجاح" : "Our Success Partners"}
          </p>
          <ClientLogos />
        </motion.div>
      </div>
    </section>
  );
}
