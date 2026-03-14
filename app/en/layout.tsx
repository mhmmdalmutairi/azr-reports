import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "AZR | Innovation Studio",
  description: "We transform bold ideas into real experiences, innovative initiatives, and events that leave a lasting impact",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="ltr" lang="en" className="font-inter">
      <Header locale="en" />
      <main className="relative z-10">{children}</main>
      <Footer locale="en" />
    </div>
  );
}
