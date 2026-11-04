import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import { siteConfig } from "@/config/site";
import AppProviders from "../components/AppProviders";
import CloudflareAnalytics from "../components/CloudflareAnalytics";
import JsonLd from "../components/JsonLd";
import "../globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-montserrat", display: "swap" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato", display: "swap" });
// TODO(revisar-EN): revisar a description em inglês.
const description = "Backend developer with production experience in C#/.NET Core and SQL Server, now focused on Java and Spring Boot. I also build landing pages for small local businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl), title: "Leandro Alves | Backend Developer (Java, C#/.NET)", description,
  alternates: { canonical: "/en/", languages: { "pt-BR": "/", en: "/en/" } },
  openGraph: { type: "website", locale: "en_US", url: "/en/", title: "Leandro Alves | Backend Developer (Java, C#/.NET)", description, siteName: siteConfig.name, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Leandro Alves, Backend Developer — Java, C#/.NET and SQL" }] },
  twitter: { card: "summary_large_image", title: "Leandro Alves | Backend Developer (Java, C#/.NET)", description, images: ["/og-image.png"] },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};
export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${montserrat.variable} ${lato.variable}`}><AppProviders>{children}</AppProviders><JsonLd /><CloudflareAnalytics /></body></html>;
}
