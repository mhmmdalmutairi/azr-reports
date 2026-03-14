"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  locale?: "ar" | "en";
}

const navItems = {
  ar: [
    { label: "أعمالنا", href: "/work" },
    { label: "خدماتنا", href: "/services" },
    { label: "منهجيتنا", href: "/methodology" },
    { label: "من نحن", href: "/about" },
  ],
  en: [
    { label: "Our Work", href: "/en/work" },
    { label: "Services", href: "/en/services" },
    { label: "Methodology", href: "/en/methodology" },
    { label: "About", href: "/en/about" },
  ],
};

export default function Header({ locale = "ar" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = navItems[locale];
  const isRTL = locale === "ar";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href={isRTL ? "/" : "/en"} className="flex items-center gap-3">
          <Image
            src="/assets/azr-logo-ar.svg"
            alt="azr"
            width={40}
            height={40}
            className="h-8 w-auto"
          />
          <span className="text-white/50 text-xs hidden sm:inline">
            {isRTL ? "استوديو الابتكار" : "innovation studio"}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA + Language + Mobile */}
        <div className="flex items-center gap-4">
          <Link
            href={isRTL ? "/en" : "/"}
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            {isRTL ? "EN" : "AR"}
          </Link>
          <Link
            href={isRTL ? "/contact" : "/en/contact"}
            className="hidden md:inline-flex px-5 py-2 bg-[#FF8C00] hover:bg-[#E67E00] text-white text-sm font-medium rounded-lg transition-colors"
          >
            {isRTL ? "ابدأ مشروعك" : "Start Your Project"}
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl p-6"
          >
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-white transition-colors text-base font-medium py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={isRTL ? "/contact" : "/en/contact"}
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 bg-[#FF8C00] hover:bg-[#E67E00] text-white text-center font-medium rounded-lg transition-colors"
              >
                {isRTL ? "ابدأ مشروعك" : "Start Your Project"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
