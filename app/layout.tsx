import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أزر | استوديو الابتكار — AZR Innovation Studio",
  description: "نحوّل الأفكار الجريئة إلى تجارب واقعية، ومبادرات مبتكرة، وفعاليات تترك أثراً مستداماً",
  keywords: ["أزر", "AZR", "استوديو الابتكار", "innovation studio", "الرياض", "Saudi Arabia"],
  openGraph: {
    title: "أزر | استوديو الابتكار",
    description: "نحوّل الأفكار الجريئة إلى تجارب واقعية، ومبادرات مبتكرة، وفعاليات تترك أثراً مستداماً",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${ibmPlexArabic.variable} ${inter.variable} font-arabic bg-[#001F3F] text-white`}>
        <NoiseOverlay />
        <Header locale="ar" />
        <main className="relative z-10">{children}</main>
        <Footer locale="ar" />
      </body>
    </html>
  );
}
