import { siteConfig, waLink } from "@/config/site";
import type { PortfolioContent } from "@/content/types";
import { FaWhatsapp } from "react-icons/fa6";
import { LuArrowRight, LuCheck } from "react-icons/lu";

export default function Services({ content }: { content: PortfolioContent }) {
  return <section id="landing-pages" aria-labelledby="landing-title" className="section-shell bg-surface-2"><div className="section-container"><p className="section-kicker">{content.locale === "pt" ? "Para negócios locais" : "For local businesses"}</p><h2 id="landing-title">{content.services.title}</h2><p className="mt-5 max-w-[70ch] text-lg text-muted">{content.services.intro}</p>{content.services.brazilNote && <p className="mt-3 font-semibold text-primary">{content.services.brazilNote}</p>}
    <div className="mt-10 grid gap-6 lg:grid-cols-2"><article className="card"><h3>{content.services.includesTitle}</h3><ul className="mt-5 space-y-3">{content.services.includes.map((item) => <li key={item} className="flex gap-3 text-muted"><LuCheck className="mt-1 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}</ul></article><article className="card"><h3>{content.services.processTitle}</h3><ol className="mt-5 space-y-4">{content.services.process.map((step, index) => <li key={step.title} className="flex gap-4"><span className="step-number">{index + 1}</span><p className="text-muted"><strong className="text-text">{step.title}:</strong> {step.text}</p></li>)}</ol></article></div>
    <div className="mt-6 rounded-2xl border border-accent/50 bg-surface p-6"><h3>{content.services.investmentTitle}</h3><p className="mt-2 text-muted">{content.services.investment}</p><div className="mt-5 flex flex-wrap gap-3"><a className="button-whatsapp" href={waLink(siteConfig.whatsappMsgNegocio)} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" />{content.services.cta}</a><a className="button-outline" href="#demonstracoes">{content.services.examples}<LuArrowRight aria-hidden="true" /></a></div></div>
    {/* TODO(confirmar): dizer que está começando agora no trabalho autônomo? Bairro ou região de atendimento? */}
  </div></section>;
}
