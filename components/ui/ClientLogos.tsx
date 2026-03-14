import Image from "next/image";

const logos = [
  { name: "وزارة العدل", src: "/assets/logos/moj.svg" },
  { name: "مسك", src: "/assets/logos/misk.svg" },
  { name: "علم", src: "/assets/logos/elm.svg" },
  { name: "وزارة المالية", src: "/assets/logos/mof.svg" },
  { name: "وزارة الصحة", src: "/assets/logos/moh.svg" },
  { name: "LEAP", src: "/assets/logos/leap.svg" },
];

interface ClientLogosProps {
  className?: string;
}

export default function ClientLogos({ className = "" }: ClientLogosProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 ${className}`}>
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="h-8 md:h-10 flex items-center opacity-40 hover:opacity-70 transition-opacity duration-300"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={80}
            height={40}
            className="h-full w-auto object-contain brightness-0 invert"
          />
        </div>
      ))}
    </div>
  );
}
