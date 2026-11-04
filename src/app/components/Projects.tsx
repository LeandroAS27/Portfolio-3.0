import type { PortfolioContent, Project } from "@/content/types";
import Image from "next/image";
import { LuExternalLink, LuGithub } from "react-icons/lu";

function ProjectCard({ project, content }: { project: Project; content: PortfolioContent }) {
  return <article className={`project-card ${project.featured ? "md:col-span-2 lg:col-span-3" : ""}`}>
    {project.image && <div className="relative aspect-video overflow-hidden rounded-xl border border-border"><Image src={project.image} alt={project.imageAlt ?? ""} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" /></div>}
    <div className={project.image ? "pt-5" : ""}>{project.demonstration && <span className="demo-badge">{content.projects.demoBadge}</span>}<h3 className="mt-2">{project.title}</h3><p className="mt-3 text-muted">{project.description}</p>
      {project.technologies && <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div>}
      <div className="mt-5 flex flex-wrap gap-3">{project.code && <a className="button-outline" href={project.code} target="_blank" rel="noopener noreferrer" aria-label={`${content.interface.code}: ${project.title} (${content.interface.external})`}><LuGithub aria-hidden="true" />{content.interface.code}</a>}{project.demo && <a className="button-primary" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${content.interface.demo}: ${project.title} (${content.interface.external})`}><LuExternalLink aria-hidden="true" />{content.interface.demo}</a>}</div>
    </div>
  </article>;
}

export default function Projects({ content }: { content: PortfolioContent }) {
  return <section id="projetos" aria-labelledby="projetos-title" className="section-shell"><div className="section-container"><p className="section-kicker">Portfolio</p><h2 id="projetos-title">{content.projects.title}</h2>
    <h3 className="subsection-title">{content.projects.backendTitle}</h3><div className="project-grid">{content.projects.backend.map((project) => <ProjectCard key={project.title} project={project} content={content} />)}</div>
    <div id="demonstracoes" className="scroll-mt-24"><h3 className="subsection-title">{content.projects.demosTitle}</h3><p className="mt-3 max-w-[70ch] text-muted">{content.projects.demosIntro}</p><div className="project-grid">{content.projects.demos.map((project) => <ProjectCard key={project.title} project={project} content={content} />)}</div></div>
    <h3 className="subsection-title">{content.projects.othersTitle}</h3><div className="grid gap-4 md:grid-cols-2">{content.projects.others.map((project) => <ProjectCard key={project.title} project={project} content={content} />)}</div><p className="mt-6 border-l-4 border-accent pl-4 font-semibold text-muted">{content.projects.inProgress}</p>
  </div></section>;
}
