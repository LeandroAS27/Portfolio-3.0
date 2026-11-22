import type { PortfolioContent } from "./types";

// TODO(revisar-EN): revisar todos os textos em inglês com Leandro.
export const enContent: PortfolioContent = {
  locale: "en", lang: "en",
  nav: { about: "About", experience: "Experience", projects: "Projects", services: "Landing pages", contact: "Contact" },
  interface: {
    skip: "Skip to content", menuOpen: "Open menu", menuClose: "Close menu",
    themeDark: "Enable dark theme", themeLight: "Enable light theme", language: "Português",
    external: "opens in a new tab", copyEmail: "Copy email", copied: "Email copied",
    code: "Code", demo: "View demo", downloadCv: "Download CV",
  },
  hero: {
    eyebrow: "Hi, I'm Leandro 👋", title: "Leandro Alves | Backend Developer", subtitle: "Java · C#/.NET · SQL",
    description: "Backend developer with production experience in C#/.NET Core and SQL Server, now focused on Java and Spring Boot. I also build landing pages for small local businesses.",
    recruiterTitle: "I'm a recruiter", recruiterText: "See my experience, stack, and backend projects.", recruiterCta: "View experience",
    businessTitle: "I have a business", businessText: "I want a landing page to attract customers.", businessCta: "See how it works", whatsappCta: "Message me on WhatsApp",
  },
  about: { title: "About me", paragraphs: [
    "I am a backend developer based in São Paulo, Brazil. At Olos Tecnologia, from May 2025 to July 2026, I worked as a Programmer Analyst, developing and maintaining C#/.NET Core and SQL Server applications for automated customer service solutions (IVR/VXML) in the telecommunications sector.",
    "Today I study and develop projects with Java and Spring Boot, the stack I want to work with, while keeping C#/.NET as my second stack. I hold a degree in Cybersecurity from Impacta Tecnologia, which makes me pay close attention to security and data integrity.",
    "Before software development, I was a professional esports athlete.",
    "I also create landing pages for small local businesses: simple pages that are fast on mobile and designed to help customers get in touch through WhatsApp.",
  ] },
  experience: {
    title: "Experience and education", workTitle: "Experience",
    items: [
      { title: "Olos Tecnologia | Programmer Analyst", period: "May 2025 – Jul 2026", tags: ["C#", ".NET Core", "SQL Server", "REST APIs", "JavaScript"], bullets: [
        "Developed and maintained C#/.NET Core and SQL Server backend applications for automated customer service solutions (IVR/VXML) in the telecommunications sector.",
        "Created and maintained REST APIs for systems integration and operational process automation.",
        "Developed integrations between corporate platforms with .NET and .NET Core.",
        "Built and optimized database procedures and routines for high-volume workflows.",
        "Developed JavaScript bots with NLP to automate customer service steps.",
        "Worked on analysis, bug fixes, and evolutionary maintenance of production systems.",
      ] },
      { title: "Independent projects | Web development", period: "Nov 2024 – present", tags: ["React", "TypeScript", "Next.js", "Firebase"], bullets: ["Personal projects for study and practice, with no clients: applications and demonstration landing pages using React, TypeScript, and Next.js, REST API and Firebase integrations, and deployment on Vercel."] },
    ],
    educationTitle: "Education", education: "Associate degree in Cybersecurity, Impacta Tecnologia, Apr 2021 – Jun 2023.",
    coursesTitle: "Additional courses", courses: ["Entrepreneurship and Digital Marketing.", "Python."],
    certificationsTitle: "Certifications", certifications: ["Network Security", "Introduction to Cybersecurity", "React from Zero to Mastery (Hooks, Router, API, and Projects)"],
    languagesTitle: "Languages", languages: ["Portuguese: native", "English: upper-intermediate"],
  },
  stack: { title: "Tech stack", groups: [
    { title: "Used in production (Olos)", items: ["C#", ".NET Core", "SQL Server", "REST APIs", "JavaScript"] },
    { title: "Backend projects", items: ["Java", "Spring Boot", "Maven"] },
    { title: "Also listed on my résumé", items: ["ASP.NET Core", "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Git/GitHub", "CI/CD", "Postman"] },
    { title: "Front end", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sass", "Redux", "Chakra UI", "Framer Motion", "Firebase"] },
    { title: "Practices", items: ["SOLID", "Clean Code", "Design Patterns", "Scrum", "Kanban"] },
  ] },
  projects: {
    title: "Projects", backendTitle: "Featured backend projects",
    backend: [
      { title: "TaskManager: REST API with Spring Boot", description: "Task REST API in Java with Spring Boot. It exposes GET /tasks, GET /tasks/{id}, POST /tasks, PUT /tasks/{id}, and DELETE /tasks/{id}; it is organized into controller, service, and model layers, uses records as input DTOs, and has centralized 404 error handling with @RestControllerAdvice. In this version, data is stored in memory.", technologies: ["Java", "Spring Boot", "REST API", "Maven"], code: "https://github.com/LeandroAS27/TaskManagerSpringBoot", featured: true },
      { title: "Order System (Modern Java)", description: "Java order system for practicing modern language features: customers, products and orders, total calculation, lookup by ID and customer, paid order filtering, and sales reporting with Streams, Lambdas, Optional, Records, and functional interfaces.", technologies: ["Java", "Streams", "OOP"], code: "https://github.com/LeandroAS27/OrderSystemJavaProject" },
      { title: "Library System (Java)", description: "Pure Java library system organized into layers (model, repository, and service): user and book registration, listing, loans, and returns, with user and book validation.", technologies: ["Java", "OOP"], code: "https://github.com/LeandroAS27/LibraryJavaProject" },
    ],
    demosTitle: "Landing page demonstrations", demosIntro: "Demonstration projects created for study and portfolio purposes. They are not clients.", demoBadge: "Demonstration",
    demos: [
      { title: "BarberCase", description: "Demonstration landing page for a barbershop: featured services, Framer Motion animations, and a contact form integrated with Firebase.", technologies: ["Next.js", "React", "TypeScript", "Sass", "Framer Motion", "Firebase"], demo: "https://barber-case.vercel.app", code: "https://github.com/LeandroAS27/BarberCase", image: "/barbearia-image.png", imageAlt: "BarberCase demonstration home page", demonstration: true },
      { title: "EstéticaCaseOne", description: "Demonstration landing page for an aesthetics clinic, focused on presenting services and making contact easier.", technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"], demo: "https://estetica-case.vercel.app", code: "https://github.com/LeandroAS27/esteticaCase", image: "/estetica-image.png", imageAlt: "EstéticaCaseOne demonstration home page", demonstration: true },
      { title: "Maria Farofa (concept)", description: "Landing page concept for a Northeastern Brazilian food bar and restaurant. Demonstration only: it is neither a client nor the restaurant's official website.", technologies: ["Next.js", "React", "TypeScript", "Chakra UI", "Framer Motion", "Tailwind CSS"], demo: "https://mariafarofa.vercel.app/", image: "/restaurante-image.png", imageAlt: "Maria Farofa concept home page", demonstration: true },
    ],
    othersTitle: "Other projects", others: [
      { title: "Delivery Processing (front-end challenge)", description: "Displays delivery data from JSON, using Redux for global state, modular Sass, and a custom hook with useMemo for price calculations.", technologies: ["React", "Redux", "Sass"], code: "https://github.com/LeandroAS27/TratamentoEntregas" },
      { title: "CommerceComics", description: "Study e-commerce app in React that lists and displays comic book details using the official Marvel API.", demo: "https://comics-commerce.vercel.app", code: "https://github.com/LeandroAS27/ComicsCommerce" },
    ], inProgress: "In development: Raia Progress Tracker (personal project).",
  },
  services: {
    title: "Landing pages for local businesses",
    intro: "A custom single page that helps customers find your business, understand what you offer, and contact you on WhatsApp. Before proposing anything, I want to understand your business and what you need.",
    includesTitle: "What your page can include", includes: ["Menu or product and service catalog", "WhatsApp button with a ready-to-send message", "Map and directions", "Business hours", "Links to delivery apps and social media", "Basic local SEO (title, description, and business information for search engines)", "Cookie-free click measurement"],
    processTitle: "How it works", process: [
      { title: "Discovery conversation", text: "I learn about the business, its audience, and what visitors should do on the page." },
      { title: "Proposal", text: "scope and price in writing." }, { title: "Demonstration", text: "a first version for you to view on mobile." },
      { title: "Adjustments", text: "we review together what needs to change." }, { title: "Publication", text: "the page goes live." },
    ], investmentTitle: "Investment and timeline", investment: "Quoted individually. The timeline is agreed in the quote after the discovery conversation.",
    cta: "Talk on WhatsApp", examples: "See demonstration examples", brazilNote: "Currently serving businesses in Brazil.",
  },
  contact: { title: "Let's talk", intro: "For job opportunities, use email or LinkedIn. For landing pages, WhatsApp is faster.", email: "Email", whatsapp: "WhatsApp", linkedin: "LinkedIn", github: "GitHub" },
  footer: { copyright: "Leandro Alves.", demos: "Projects marked as Demonstration are not clients." },
};

// TODO(revisar-EN): revisar a tradução do título "Programmer Analyst".
// TODO(confirmar): confirmar "English: upper-intermediate"; o CV diz "Profissional".
// TODO(confirmar): confirmar a observação "Currently serving businesses in Brazil."
// TODO(confirmar): a mensagem do WhatsApp na versão EN continua em português.
