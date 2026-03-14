"use client";

export default function Particles() {
  const particles = Array.from({ length: 18 }, () => ({
    left: `${Math.random() * 100}%`,
    size: `${2 + Math.random() * 3}px`,
    duration: `${8 + Math.random() * 12}s`,
    delay: `${Math.random() * 10}s`,
    opacity: 0.15 + Math.random() * 0.25,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: p.left,
            bottom: "-5%",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particleFloat ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: var(--particle-opacity, 0.2);
          }
          90% {
            opacity: var(--particle-opacity, 0.2);
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
