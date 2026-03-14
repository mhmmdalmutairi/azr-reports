import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["var(--font-ibm-plex-arabic)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3rem, 7vw, 5.5rem)", { lineHeight: "1.1", fontWeight: "700" }],
        headline: ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.2", fontWeight: "700" }],
      },
      colors: {
        azr: {
          navy: "#001F3F",
          "navy-deep": "#001229",
          orange: "#FF8C00",
          "orange-hover": "#E67E00",
          purple: "#81286e",
          card: "rgba(255,255,255,0.04)",
          border: "rgba(255,255,255,0.08)",
        },
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,140,0,0.12), transparent)",
        "section-glow": "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,140,0,0.06), transparent)",
        "section-glow-purple": "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(129,40,110,0.08), transparent)",
        "section-glow-orange": "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,140,0,0.06), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "pulse-bg": "pulseBg 8s ease-in-out infinite",
        "rotate-ring": "rotateRing 60s linear infinite",
        "rotate-ring-slow": "rotateRing 80s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "cta-breath": "ctaBreath 3s ease-in-out infinite",
        "scroll-hint": "scrollHint 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseBg: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        rotateRing: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        ctaBreath: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,140,0,0)" },
          "50%": { boxShadow: "0 0 30px 8px rgba(255,140,0,0.25)" },
        },
        scrollHint: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5)",
        "glow-orange": "0 0 40px rgba(255,140,0,0.15)",
        "glow-purple": "0 0 40px rgba(129,40,110,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
