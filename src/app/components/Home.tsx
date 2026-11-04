"use client";

import { siteConfig, waLink } from "@/config/site";
import type { PortfolioContent } from "@/content/types";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { LuArrowDown, LuMail } from "react-icons/lu";

export default function Home({ content }: { content: PortfolioContent }) {
  const social = [
    { href: siteConfig.linkedin, label: `LinkedIn de Leandro Alves (${content.interface.external})`, icon: FaLinkedinIn },
    { href: siteConfig.github, label: `GitHub de Leandro Alves (${content.interface.external})`, icon: FaGithub },
    { href: `mailto:${siteConfig.email}`, label: content.locale === "pt" ? "Enviar e-mail para Leandro Alves" : "Email Leandro Alves", icon: LuMail },
    { href: siteConfig.instagram, label: `Instagram de Leandro Alves (${content.interface.external})`, icon: FaInstagram },
  ];
  return (
    <section id="inicio" aria-labelledby="inicio-title" className="hero-section section-shell">
      <div className="section-container grid items-center gap-12 lg:grid-cols-[1fr_22rem]">
        <div>
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1 id="inicio-title" className="mt-3 max-w-4xl">{content.hero.title}</h1>
          <p className="mt-4 font-heading text-xl font-semibold text-primary sm:text-2xl">{content.hero.subtitle}</p>
          <p className="mt-5 max-w-[70ch] text-lg text-muted">{content.hero.description}</p>
          <div className="mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
            <article className="path-card border-primary/60">
              <h2 className="card-title">{content.hero.recruiterTitle}</h2><p>{content.hero.recruiterText}</p>
              <div className="mt-5 flex flex-wrap gap-3"><a className="button-primary" href="#experiencia">{content.hero.recruiterCta}</a>{siteConfig.cvAvailable && <a className="button-outline" href={siteConfig.cvPath} download>{content.interface.downloadCv}</a>}</div>
            </article>
            <article className="path-card border-accent/60">
              <h2 className="card-title text-accent">{content.hero.businessTitle}</h2><p>{content.hero.businessText}</p>
              <div className="mt-5 flex flex-wrap gap-3"><a className="button-accent" href="#landing-pages">{content.hero.businessCta}</a><a className="button-whatsapp" href={waLink(siteConfig.whatsappMsgNegocio)} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" />{content.hero.whatsappCta}</a></div>
            </article>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">{social.map(({ href, label, icon: Icon }) => <a key={href} className="social-link" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label}><Icon aria-hidden="true" /></a>)}</div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" aria-hidden="true" />
          <Image src="/leandro-alves.webp" width={640} height={640} priority sizes="(min-width:1024px) 22rem, 75vw" alt="Foto de Leandro Alves" className="relative aspect-square rounded-[2rem] border border-border object-cover shadow-2xl" />
          {/* TODO(confirmar): a foto continua atual? */}
        </div>
      </div>
      <a href="#sobre" className="scroll-cue" aria-label={content.locale === "pt" ? "Ir para Sobre mim" : "Go to About me"}><LuArrowDown aria-hidden="true" /></a>
    </section>
  );
}
