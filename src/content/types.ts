export type Locale = "pt" | "en";

export type Project = {
  title: string;
  description: string;
  technologies?: string[];
  code?: string;
  demo?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  demonstration?: boolean;
};

export type PortfolioContent = {
  locale: Locale;
  lang: "pt-BR" | "en";
  nav: Record<"about" | "experience" | "projects" | "services" | "contact", string>;
  interface: {
    skip: string;
    menuOpen: string;
    menuClose: string;
    themeDark: string;
    themeLight: string;
    language: string;
    external: string;
    copyEmail: string;
    copied: string;
    code: string;
    demo: string;
    downloadCv: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    recruiterTitle: string;
    recruiterText: string;
    recruiterCta: string;
    businessTitle: string;
    businessText: string;
    businessCta: string;
    whatsappCta: string;
  };
  about: { title: string; paragraphs: string[] };
  experience: {
    title: string;
    workTitle: string;
    items: Array<{ title: string; period: string; bullets: string[]; tags: string[] }>;
    educationTitle: string;
    education: string;
    coursesTitle: string;
    courses: string[];
    certificationsTitle: string;
    certifications: string[];
    languagesTitle: string;
    languages: string[];
  };
  stack: { title: string; groups: Array<{ title: string; items: string[] }> };
  projects: {
    title: string;
    backendTitle: string;
    backend: Project[];
    demosTitle: string;
    demosIntro: string;
    demoBadge: string;
    demos: Project[];
    othersTitle: string;
    others: Project[];
    inProgress: string;
  };
  services: {
    title: string;
    intro: string;
    includesTitle: string;
    includes: string[];
    processTitle: string;
    process: Array<{ title: string; text: string }>;
    investmentTitle: string;
    investment: string;
    cta: string;
    examples: string;
    brazilNote?: string;
  };
  contact: { title: string; intro: string; email: string; whatsapp: string; linkedin: string; github: string };
  footer: { copyright: string; demos: string };
};
