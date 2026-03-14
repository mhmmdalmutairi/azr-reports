interface GlowOrbsProps {
  variant?: "hero" | "section" | "cta";
}

const configs = {
  hero: [
    { color: "rgba(255,140,0,0.15)", size: "400px", top: "-10%", right: "-5%", delay: "0s" },
    { color: "rgba(129,40,110,0.12)", size: "350px", bottom: "-10%", left: "-5%", delay: "2s" },
    { color: "rgba(59,130,246,0.08)", size: "300px", top: "40%", left: "40%", delay: "4s" },
  ],
  section: [
    { color: "rgba(255,140,0,0.06)", size: "300px", top: "-15%", right: "10%", delay: "0s" },
    { color: "rgba(129,40,110,0.05)", size: "250px", bottom: "-10%", left: "15%", delay: "3s" },
  ],
  cta: [
    { color: "rgba(255,140,0,0.2)", size: "450px", top: "0%", right: "-10%", delay: "0s" },
    { color: "rgba(129,40,110,0.15)", size: "400px", bottom: "-15%", left: "-10%", delay: "2s" },
    { color: "rgba(255,140,0,0.1)", size: "300px", top: "30%", left: "30%", delay: "4s" },
  ],
};

export default function GlowOrbs({ variant = "section" }: GlowOrbsProps) {
  const orbs = configs[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="glow-orb absolute rounded-full animate-pulse-bg"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            top: orb.top,
            bottom: orb.bottom,
            left: orb.left,
            right: orb.right,
            filter: "blur(80px)",
            animationDelay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
