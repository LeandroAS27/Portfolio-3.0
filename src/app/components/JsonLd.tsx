import { siteConfig } from "@/config/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.siteUrl,
    email: `mailto:${siteConfig.email}`,
    address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Impacta Tecnologia" },
    knowsAbout: ["Java", "Spring Boot", "C#", ".NET", "SQL Server", "APIs REST"],
    sameAs: [siteConfig.linkedin, siteConfig.github, siteConfig.instagram], // TODO(confirmar): manter o Instagram no site e no JSON-LD?
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
