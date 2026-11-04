"use client";
import { siteConfig, waLink } from "@/config/site";
import type { PortfolioContent } from "@/content/types";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { LuCheck, LuCopy, LuMail } from "react-icons/lu";

export default function Contact({ content }: { content: PortfolioContent }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => { await navigator.clipboard.writeText(siteConfig.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); };
  const links = [
    { href: `mailto:${siteConfig.email}`, label: content.contact.email, detail: siteConfig.email, icon: LuMail },
    { href: waLink(siteConfig.whatsappMsgGeral), label: content.contact.whatsapp, detail: content.hero.whatsappCta, icon: FaWhatsapp, external: true },
    { href: siteConfig.linkedin, label: content.contact.linkedin, detail: "/in/leandro-alves-dev", icon: FaLinkedinIn, external: true },
    { href: siteConfig.github, label: content.contact.github, detail: "LeandroAS27", icon: FaGithub, external: true },
  ];
  return <section id="contato" aria-labelledby="contato-title" className="section-shell"><div className="section-container"><p className="section-kicker">Contact</p><h2 id="contato-title">{content.contact.title}</h2><p className="mt-4 max-w-[70ch] text-lg text-muted">{content.contact.intro}</p><div className="mt-9 grid gap-4 sm:grid-cols-2">{links.map(({ href, label, detail, icon: Icon, external }) => <div key={href} className="contact-card"><a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="flex min-w-0 flex-1 items-center gap-4"><span className="contact-icon"><Icon aria-hidden="true" /></span><span className="min-w-0"><strong className="block text-text">{label}</strong><span className="block truncate text-sm text-muted">{detail}</span>{external && <span className="sr-only"> ({content.interface.external})</span>}</span></a>{label === content.contact.email && <button className="icon-button shrink-0" type="button" onClick={copy} aria-label={copied ? content.interface.copied : content.interface.copyEmail}>{copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}</button>}</div>)}</div>{siteConfig.cvAvailable && <a href={siteConfig.cvPath} download className="button-primary mt-6">{content.interface.downloadCv}</a>}</div></section>;
}
