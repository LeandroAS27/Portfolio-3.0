export const siteConfig = {
  // TODO(confirmar): trocar pelo domínio próprio quando existir
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://portfolio-leandro-alves.vercel.app",
  name: "Leandro Alves",
  fullName: "Leandro Alves de Souza",
  role: "Desenvolvedor Backend", // TODO(confirmar): se quiser exibir nível (Júnior/Pleno)
  location: "São Paulo – SP",
  email: "leandroasdev@gmail.com",
  whatsappNumber: "5511985964520",
  whatsappMsgNegocio:
    "Olá, Leandro! Vi seu portfólio e quero conversar sobre uma landing page para o meu negócio.",
  whatsappMsgGeral:
    "Olá, Leandro! Vi seu portfólio e gostaria de conversar.",
  linkedin: "https://www.linkedin.com/in/leandro-alves-dev/",
  github: "https://github.com/LeandroAS27",
  instagram: "https://www.instagram.com/leandroasdev", // TODO(confirmar): manter o Instagram no site?
  cvPath: "/cv-leandro-alves.pdf",
  cvAvailable: false, // TODO(confirmar): colocar o PDF em public/cv-leandro-alves.pdf e mudar para true
} as const;

export const waLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
