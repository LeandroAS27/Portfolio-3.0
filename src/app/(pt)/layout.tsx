import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import { siteConfig } from "@/config/site";
import AppProviders from "../components/AppProviders";
import JsonLd from "../components/JsonLd";
import "../globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-montserrat", display: "swap" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato", display: "swap" });
const description = "Desenvolvedor backend com experiência em C#/.NET Core e SQL Server, hoje com foco em Java e Spring Boot. Também crio landing pages para pequenos negócios locais.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "Leandro Alves | Desenvolvedor Backend Java e C#/.NET", template: "%s | Leandro Alves" },
  description,
  alternates: { canonical: "/", languages: { "pt-BR": "/", en: "/en/" } },
  openGraph: { type: "website", locale: "pt_BR", url: "/", title: "Leandro Alves | Desenvolvedor Backend Java e C#/.NET", description, siteName: siteConfig.name, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Leandro Alves, Desenvolvedor Backend — Java, C#/.NET e SQL" }] },
  twitter: { card: "summary_large_image", title: "Leandro Alves | Desenvolvedor Backend Java e C#/.NET", description, images: ["/og-image.png"] },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};

export default function PortugueseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" suppressHydrationWarning><body className={`${montserrat.variable} ${lato.variable}`}><AppProviders>{children}</AppProviders><JsonLd /></body></html>;
}
