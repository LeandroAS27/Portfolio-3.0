import type { PortfolioContent } from "@/content/types";

export default function About({ content }: { content: PortfolioContent }) {
  return <section id="sobre" aria-labelledby="sobre-title" className="section-shell bg-surface-2"><div className="section-container grid gap-8 lg:grid-cols-[.6fr_1.4fr]"><div><p className="section-kicker">{content.locale === "pt" ? "Trajetória" : "Background"}</p><h2 id="sobre-title">{content.about.title}</h2></div><div className="space-y-5 text-lg text-muted">{content.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>;
}
