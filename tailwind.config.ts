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
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
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
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
