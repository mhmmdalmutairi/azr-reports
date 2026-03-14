import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import { siteConfig } from "@/lib/data/site";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactPageEN() {
  return (
    <>
      <PageHero badge="Contact Us" title="Start Your Project" description="Have a bold idea or complex challenge? Get in touch and we'll help turn it into tangible results." />
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <ContactForm locale="en" />
            </div>
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-white font-semibold mb-4">Contact Information</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-white/60">
                        <Mail size={18} className="text-[#FF8C00] flex-shrink-0" />
                        <a href={`mailto:${siteConfig.email}`} className="hover:text-[#FF8C00] transition-colors">{siteConfig.email}</a>
                      </li>
                      {siteConfig.phones.map((phone) => (
                        <li key={phone} className="flex items-center gap-3 text-white/60">
                          <Phone size={18} className="text-[#FF8C00] flex-shrink-0" />
                          <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-[#FF8C00] transition-colors" dir="ltr">{phone}</a>
                        </li>
                      ))}
                      <li className="flex items-center gap-3 text-white/60">
                        <MapPin size={18} className="text-[#FF8C00] flex-shrink-0" />
                        <span>{siteConfig.location.en}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <h4 className="text-white font-semibold mb-2">Working Hours</h4>
                    <p className="text-white/50 text-sm">Sunday — Thursday</p>
                    <p className="text-white/50 text-sm">9:00 AM — 6:00 PM</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
