import { clientLogos } from "@/lib/data/site";

interface ClientLogosProps {
  className?: string;
}

export default function ClientLogos({ className = "" }: ClientLogosProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40 ${className}`}>
      {clientLogos.map((logo) => (
        <div key={logo.name} className="h-8 md:h-10 flex items-center">
          <span className="text-white/50 text-sm font-medium tracking-wider">{logo.name}</span>
        </div>
      ))}
    </div>
  );
}
