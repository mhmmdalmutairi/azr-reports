import Link from "next/link";
import { siteConfig } from "@/lib/data/site";
import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  locale?: "ar" | "en";
}

export default function Footer({ locale = "ar" }: FooterProps) {
  const isRTL = locale === "ar";
  const prefix = isRTL ? "" : "/en";

  const sections = isRTL
    ? {
        links: { title: "روابط سريعة", items: [
          { label: "أعمالنا", href: "/work" },
          { label: "خدماتنا", href: "/services" },
          { label: "منهجيتنا", href: "/methodology" },
          { label: "من نحن", href: "/about" },
        ]},
        services: { title: "خدماتنا", items: [
          { label: "بناء المشاريع", href: "/services#build" },
          { label: "تصميم الخدمات", href: "/services#design" },
          { label: "استشارات النمو", href: "/services#growth" },
        ]},
      }
    : {
        links: { title: "Quick Links", items: [
          { label: "Our Work", href: "/en/work" },
          { label: "Services", href: "/en/services" },
          { label: "Methodology", href: "/en/methodology" },
          { label: "About", href: "/en/about" },
        ]},
        services: { title: "Services", items: [
          { label: "Building Projects", href: "/en/services#build" },
          { label: "Service Design", href: "/en/services#design" },
          { label: "Growth Consulting", href: "/en/services#growth" },
        ]},
      };

  return (
    <footer className="bg-[#001229] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href={prefix || "/"} className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">azr</span>
              <span className="text-white/30 mx-2">|</span>
              <span className="text-white/50 text-sm">
                {isRTL ? "استوديو الابتكار" : "innovation studio"}
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {siteConfig.description[locale]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{sections.links.title}</h4>
            <ul className="space-y-3">
              {sections.links.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-[#FF8C00] transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{sections.services.title}</h4>
            <ul className="space-y-3">
              {sections.services.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-[#FF8C00] transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {isRTL ? "تواصل معنا" : "Contact Us"}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={16} className="text-[#FF8C00] flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#FF8C00] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3 text-white/50 text-sm">
                  <Phone size={16} className="text-[#FF8C00] flex-shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-[#FF8C00] transition-colors" dir="ltr">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin size={16} className="text-[#FF8C00] flex-shrink-0" />
                <span>{siteConfig.location[locale]}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            {isRTL
              ? `© ${new Date().getFullYear()} أزر استوديو الابتكار. جميع الحقوق محفوظة.`
              : `© ${new Date().getFullYear()} AZR Innovation Studio. All rights reserved.`
            }
          </p>
          <p className="text-white/20 text-xs">
            {isRTL ? "نبتكر.. لننمو" : "Innovate to Grow"}
          </p>
        </div>
      </div>
    </footer>
  );
}
