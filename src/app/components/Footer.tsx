import type { PortfolioContent } from "@/content/types";
export default function Footer({ content }: { content: PortfolioContent }) {
  return <footer className="border-t border-border bg-surface"><div className="section-container flex flex-col gap-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between"><p>© {new Date().getFullYear()} {content.footer.copyright}</p><p>{content.footer.demos}</p><nav aria-label={content.locale === "pt" ? "Links do rodapé" : "Footer links"} className="flex flex-wrap gap-4"><a href="#inicio">{content.locale === "pt" ? "Início" : "Home"}</a><a href="#projetos">{content.nav.projects}</a><a href="#contato">{content.nav.contact}</a></nav></div></footer>;
}
