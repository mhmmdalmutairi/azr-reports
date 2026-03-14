"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ContactFormProps {
  locale?: "ar" | "en";
}

export default function ContactForm({ locale = "ar" }: ContactFormProps) {
  const isRTL = locale === "ar";
  const [submitted, setSubmitted] = useState(false);

  return (
    <ScrollReveal>
      {submitted ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-full bg-[#FF8C00]/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-[#FF8C00] text-3xl">✓</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            {isRTL ? "شكراً لتواصلك!" : "Thank you!"}
          </h3>
          <p className="text-white/60">
            {isRTL ? "سنتواصل معك في أقرب وقت." : "We'll get back to you soon."}
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="space-y-6 max-w-xl mx-auto"
        >
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              {isRTL ? "الاسم" : "Name"}
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/30 focus:border-[#FF8C00]/40 focus:outline-none transition-colors"
              placeholder={isRTL ? "اسمك الكامل" : "Your full name"}
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              {isRTL ? "البريد الإلكتروني" : "Email"}
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/30 focus:border-[#FF8C00]/40 focus:outline-none transition-colors"
              placeholder={isRTL ? "example@email.com" : "example@email.com"}
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              {isRTL ? "نوع المشروع" : "Project Type"}
            </label>
            <select
              required
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white focus:border-[#FF8C00]/40 focus:outline-none transition-colors"
            >
              <option value="" className="bg-[#001F3F]">{isRTL ? "اختر نوع المشروع" : "Select project type"}</option>
              <option value="build" className="bg-[#001F3F]">{isRTL ? "بناء مشروع" : "Build a project"}</option>
              <option value="design" className="bg-[#001F3F]">{isRTL ? "تصميم خدمة" : "Service design"}</option>
              <option value="growth" className="bg-[#001F3F]">{isRTL ? "استشارات نمو" : "Growth consulting"}</option>
              <option value="other" className="bg-[#001F3F]">{isRTL ? "أخرى" : "Other"}</option>
            </select>
          </div>
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              {isRTL ? "رسالتك" : "Your Message"}
            </label>
            <textarea
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/30 focus:border-[#FF8C00]/40 focus:outline-none transition-colors resize-none"
              placeholder={isRTL ? "أخبرنا عن مشروعك أو فكرتك..." : "Tell us about your project or idea..."}
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-semibold rounded-xl transition-colors text-base"
          >
            {isRTL ? "أرسل رسالتك" : "Send Your Message"}
          </button>
        </form>
      )}
    </ScrollReveal>
  );
}
