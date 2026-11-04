"use client";

import { siteConfig } from "@/config/site";
import type { PortfolioContent } from "@/content/types";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";

const ids = ["sobre", "experiencia", "projetos", "landing-pages", "contato"] as const;

export default function Header({ content }: { content: PortfolioContent }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const languageHref = content.locale === "pt" ? "/en/" : "/";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusable?.[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab" && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; };
  }, [open]);

  const labels = [content.nav.about, content.nav.experience, content.nav.projects, content.nav.services, content.nav.contact];
  const closeMenu = () => setOpen(false);
  const isDark = resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#inicio" className="font-heading text-lg font-bold tracking-tight text-text" onClick={closeMenu}>
          {siteConfig.name}<span className="text-primary">.</span>
        </a>
        <nav aria-label={content.locale === "pt" ? "Navegação principal" : "Main navigation"} className="hidden items-center gap-1 lg:flex">
          {ids.map((id, index) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "true" : undefined} className="nav-link">{labels[index]}</a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Link href={languageHref} hrefLang={content.locale === "pt" ? "en" : "pt-BR"} className="icon-button px-3 text-sm font-bold">
            {content.locale === "pt" ? "EN" : "PT"}<span className="sr-only"> — {content.interface.language}</span>
          </Link>
          <button
            type="button"
            className="icon-button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? content.interface.themeLight : content.interface.themeDark}
          >
            {mounted && isDark ? <LuSun aria-hidden="true" /> : <LuMoon aria-hidden="true" />}
          </button>
          {siteConfig.cvAvailable && <a href={siteConfig.cvPath} download className="button-primary hidden sm:inline-flex">{content.interface.downloadCv}</a>}
          <button ref={menuButtonRef} type="button" className="icon-button lg:hidden" aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? content.interface.menuClose : content.interface.menuOpen} onClick={() => setOpen((value) => !value)}>
            {open ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-x-0 top-[4.5rem] z-[60] h-[calc(100dvh-4.5rem)] bg-black/60 lg:hidden" onMouseDown={(event) => event.target === event.currentTarget && closeMenu()}>
          <nav ref={menuRef} id="menu-mobile" aria-label={content.locale === "pt" ? "Menu móvel" : "Mobile menu"} className="mobile-menu-panel ml-auto flex h-[calc(100dvh-4.5rem)] w-[min(22rem,88vw)] flex-col gap-3 overflow-y-auto border-l border-border p-5 shadow-2xl sm:p-6">
            <p className="mb-1 font-heading text-sm font-bold uppercase tracking-[0.16em] text-primary">
              {content.locale === "pt" ? "Navegação" : "Navigation"}
            </p>
            {ids.map((id, index) => <a key={id} href={`#${id}`} className="mobile-nav-link" aria-current={active === id ? "true" : undefined} onClick={closeMenu}>{labels[index]}</a>)}
            {siteConfig.cvAvailable && <a href={siteConfig.cvPath} download className="button-primary mt-3">{content.interface.downloadCv}</a>}
          </nav>
        </div>
      )}
    </header>
  );
}
