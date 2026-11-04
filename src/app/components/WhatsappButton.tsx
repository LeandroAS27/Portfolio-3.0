"use client";
import { siteConfig, waLink } from "@/config/site";
import type { PortfolioContent } from "@/content/types";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
export default function WhatsappButton({ content }: { content: PortfolioContent }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const hero = document.getElementById("inicio"); if (!hero) return; const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.08 }); observer.observe(hero); return () => observer.disconnect(); }, []);
  if (!visible) return null;
  return <a className="floating-whatsapp" href={waLink(siteConfig.whatsappMsgGeral)} target="_blank" rel="noopener noreferrer" aria-label={content.locale === "pt" ? "Conversar no WhatsApp (abre em nova aba)" : "Talk on WhatsApp (opens in a new tab)"}><FaWhatsapp aria-hidden="true" /></a>;
}
