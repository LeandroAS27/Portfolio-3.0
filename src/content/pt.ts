import type { PortfolioContent } from "./types";

export const ptContent: PortfolioContent = {
  locale: "pt",
  lang: "pt-BR",
  nav: { about: "Sobre", experience: "Experiência", projects: "Projetos", services: "Landing pages", contact: "Contato" },
  interface: {
    skip: "Pular para o conteúdo", menuOpen: "Abrir menu", menuClose: "Fechar menu",
    themeDark: "Ativar tema escuro", themeLight: "Ativar tema claro", language: "English",
    external: "abre em nova aba", copyEmail: "Copiar e-mail", copied: "E-mail copiado",
    code: "Código", demo: "Ver demonstração", downloadCv: "Baixar CV",
  },
  hero: {
    eyebrow: "Olá, eu sou o Leandro 👋", title: "Leandro Alves | Desenvolvedor Backend",
    subtitle: "Java · C#/.NET · SQL",
    description: "Desenvolvedor backend com experiência em produção em C#/.NET Core e SQL Server. Hoje meu foco é Java e Spring Boot. Também crio landing pages para pequenos negócios locais.",
    recruiterTitle: "Sou recrutador(a)", recruiterText: "Veja minha experiência, stack e projetos backend.", recruiterCta: "Ver experiência",
    businessTitle: "Tenho um negócio", businessText: "Quero uma landing page para atrair clientes.", businessCta: "Ver como funciona", whatsappCta: "Chamar no WhatsApp",
  },
  about: {
    title: "Sobre mim",
    paragraphs: [
      "Sou desenvolvedor backend em São Paulo (SP). Na Olos Tecnologia, entre maio de 2025 e julho de 2026, atuei como Analista Programador, desenvolvendo e mantendo aplicações em C#/.NET Core e SQL Server para soluções de atendimento automatizado (URA/VXML) no setor de telecomunicações.",
      "Hoje estudo e desenvolvo projetos em Java e Spring Boot, a stack em que quero atuar, e sigo com C#/.NET como segunda stack. Sou tecnólogo em Defesa Cibernética pela Impacta Tecnologia, o que me faz olhar com atenção para segurança e integridade de dados.",
      "Antes da programação, fui atleta profissional de e-sports.",
      "Também crio landing pages para pequenos negócios locais: páginas simples, rápidas no celular e pensadas para o cliente chamar no WhatsApp.",
    ],
  },
  experience: {
    title: "Experiência e formação", workTitle: "Experiência",
    items: [
      { title: "Olos Tecnologia | Analista Programador", period: "mai/2025 – jul/2026", tags: ["C#", ".NET Core", "SQL Server", "APIs REST", "JavaScript"], bullets: [
        "Desenvolvi e mantive aplicações backend em C#/.NET Core e SQL Server para soluções de atendimento automatizado (URA/VXML) no setor de telecomunicações.",
        "Criei e mantive APIs REST para integração de sistemas e automação de processos operacionais.",
        "Desenvolvi integrações entre plataformas corporativas com .NET e .NET Core.",
        "Construí e otimizei procedures e rotinas de banco de dados para fluxos de alto volume.",
        "Desenvolvi bots em JavaScript com NLP para automatizar etapas do atendimento.",
        "Atuei na análise, correção de bugs e manutenção evolutiva de sistemas em produção.",
      ] },
      { title: "Projetos independentes | Desenvolvimento web", period: "nov/2024 – atual", tags: ["React", "TypeScript", "Next.js", "Firebase"], bullets: [
        "Projetos próprios para estudo e prática, sem clientes: aplicações e landing pages de demonstração com React, TypeScript e Next.js, integração com APIs REST e Firebase e publicação na Vercel.",
      ] },
    ],
    educationTitle: "Formação", education: "Tecnólogo em Defesa Cibernética, Impacta Tecnologia, abr/2021 – jun/2023.",
    coursesTitle: "Cursos complementares", courses: ["Empreendedorismo e Marketing Digital.", "Python."],
    certificationsTitle: "Certificações", certifications: ["Network Security", "Introduction to Cybersecurity", "React do Zero a Maestria (Hooks, Router, API e Projetos)"],
    languagesTitle: "Idiomas", languages: ["Português: nativo", "Inglês: intermediário-avançado"],
  },
  stack: {
    title: "Stack", groups: [
      { title: "Usei em produção (Olos)", items: ["C#", ".NET Core", "SQL Server", "APIs REST", "JavaScript"] },
      { title: "Backend em projetos", items: ["Java", "Spring Boot", "Maven"] },
      { title: "Também no meu currículo", items: ["ASP.NET Core", "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Git/GitHub", "CI/CD", "Postman"] },
      { title: "Front-end", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sass", "Redux", "Chakra UI", "Framer Motion", "Firebase"] },
      { title: "Práticas", items: ["SOLID", "Clean Code", "Design Patterns", "Scrum", "Kanban"] },
    ],
  },
  projects: {
    title: "Projetos", backendTitle: "Backend em destaque",
    backend: [
      { title: "TaskManager: API REST com Spring Boot", description: "API REST de tarefas em Java com Spring Boot. Expõe GET /tasks, GET /tasks/{id}, POST /tasks, PUT /tasks/{id} e DELETE /tasks/{id}, organizada em controller, service e model, com records como DTOs de entrada e tratamento centralizado de erro (404) com @RestControllerAdvice. Nesta versão, os dados ficam em memória.", technologies: ["Java", "Spring Boot", "API REST", "Maven"], code: "https://github.com/LeandroAS27/TaskManagerSpringBoot", featured: true },
      { title: "Sistema de Pedidos (Java moderno)", description: "Sistema de pedidos em Java para praticar recursos modernos da linguagem: clientes, produtos e pedidos, cálculo do total, busca por ID e por cliente, filtro de pedidos pagos e relatório de vendas, com Streams, Lambdas, Optional, Records e interfaces funcionais.", technologies: ["Java", "Streams", "POO"], code: "https://github.com/LeandroAS27/OrderSystemJavaProject" },
      { title: "Sistema de Biblioteca (Java)", description: "Sistema de biblioteca em Java puro, organizado em camadas (model, repository e service): cadastro de usuários e livros, listagem, empréstimo e devolução, com verificação de usuário e livro.", technologies: ["Java", "POO"], code: "https://github.com/LeandroAS27/LibraryJavaProject" },
    ],
    demosTitle: "Landing pages: demonstrações", demosIntro: "Projetos de demonstração criados para estudo e portfólio. Não são clientes.", demoBadge: "Demonstração",
    demos: [
      { title: "BarberCase", description: "Landing page de demonstração para uma barbearia: serviços em destaque, animações com Framer Motion e formulário de contato integrado ao Firebase.", technologies: ["Next.js", "React", "TypeScript", "Sass", "Framer Motion", "Firebase"], demo: "https://barber-case.vercel.app", code: "https://github.com/LeandroAS27/BarberCase", image: "/barbearia-image.png", imageAlt: "Tela inicial da demonstração BarberCase", demonstration: true },
      { title: "EstéticaCaseOne", description: "Landing page de demonstração para uma clínica de estética, com foco em apresentar serviços e facilitar o contato.", technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"], demo: "https://estetica-case.vercel.app", code: "https://github.com/LeandroAS27/esteticaCase", image: "/estetica-image.png", imageAlt: "Tela inicial da demonstração EstéticaCaseOne", demonstration: true },
      { title: "Maria Farofa (conceito)", description: "Conceito de landing page para um bar e restaurante de comida nordestina. Demonstração: não é cliente nem o site oficial do restaurante.", technologies: ["Next.js", "React", "TypeScript", "Chakra UI", "Framer Motion", "Tailwind CSS"], demo: "https://mariafarofa.vercel.app/", image: "/restaurante-image.png", imageAlt: "Tela inicial do conceito Maria Farofa", demonstration: true },
    ],
    othersTitle: "Outros projetos", others: [
      { title: "Tratamento de Entregas (desafio front-end)", description: "Exibição de dados de entregas a partir de um JSON, com Redux para estado global, Sass modular e um hook com useMemo para cálculo de preços.", technologies: ["React", "Redux", "Sass"], code: "https://github.com/LeandroAS27/TratamentoEntregas" },
      { title: "CommerceComics", description: "E-commerce de estudo em React que lista e detalha quadrinhos usando a API oficial da Marvel.", demo: "https://comics-commerce.vercel.app", code: "https://github.com/LeandroAS27/ComicsCommerce" },
    ], inProgress: "Em desenvolvimento: Raia Progress Tracker (projeto pessoal).",
  },
  services: {
    title: "Landing pages para negócios locais",
    intro: "Uma página única, feita sob medida, para o cliente encontrar o seu negócio, entender o que você oferece e chamar no WhatsApp. Antes de propor qualquer coisa, eu quero entender o seu negócio e o que você precisa.",
    includesTitle: "O que a sua página pode incluir", includes: ["Cardápio ou catálogo de produtos e serviços", "Botão de WhatsApp com mensagem pronta", "Mapa e como chegar", "Horário de funcionamento", "Links para apps de delivery e redes sociais", "SEO local básico (título, descrição e informações do negócio para buscadores)", "Medição de cliques sem cookies"],
    processTitle: "Como funciona", process: [
      { title: "Conversa de diagnóstico", text: "entendo o negócio, o público e o que o cliente deve fazer na página." },
      { title: "Proposta", text: "escopo e valor por escrito." }, { title: "Demonstração", text: "uma primeira versão para você ver no celular." },
      { title: "Ajustes", text: "revisamos juntos o que precisa mudar." }, { title: "Publicação", text: "a página vai para o ar." },
    ],
    investmentTitle: "Investimento e prazo", investment: "Sob orçamento. O prazo é combinado no orçamento, depois da conversa de diagnóstico.",
    cta: "Conversar no WhatsApp", examples: "Veja exemplos de demonstração",
  },
  contact: { title: "Vamos conversar", intro: "Para vagas, use o e-mail ou o LinkedIn. Para landing pages, o WhatsApp é mais rápido.", email: "E-mail", whatsapp: "WhatsApp", linkedin: "LinkedIn", github: "GitHub" },
  footer: { copyright: "Leandro Alves.", demos: "Projetos marcados como Demonstração não são clientes." },
};

// TODO(confirmar): exibir idade? (24 anos em nov/2026). Se sim, prefira calcular pela data de nascimento em vez de deixar fixo.
// TODO(confirmar): período ou time de e-sports, se quiser detalhar.
// TODO(confirmar): Empreendedorismo e Marketing Digital é um curso ou são dois? Emissor e ano.
// TODO(confirmar): emissor e ano do curso de Python.
// TODO(confirmar): emissor e data de cada certificação.
// TODO(confirmar): o CV lista "Discover", que parece incompleto. Fica oculto até confirmar o nome.
// TODO(confirmar): nível exato de inglês; o CV diz "Profissional".
// TODO(confirmar): manter todos os itens da seção "Também no meu currículo"? Hoje não há projeto público que mostre Docker, CI/CD, MongoDB ou PostgreSQL.
// TODO(confirmar): JPA, H2 e Validation estão no pom.xml do TaskManager mas ainda não são usados no código. Não citar persistência nem Bean Validation até isso existir. Nada de "testes": só há o teste padrão.
// TODO(confirmar): Tratamento de Entregas é o "Sistema de Entregas" do CV?
// TODO(confirmar): linkar github.com/LeandroAS27/ProgressTrackerProject? É o Raia?
// TODO(confirmar): dizer que está começando agora no trabalho autônomo? Bairro ou região de atendimento?
