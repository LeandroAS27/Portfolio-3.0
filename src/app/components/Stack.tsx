import type { PortfolioContent } from "@/content/types";
export default function Stack({ content }: { content: PortfolioContent }) {
  return <section id="stack" aria-labelledby="stack-title" className="section-shell bg-surface-2"><div className="section-container"><p className="section-kicker">Tech</p><h2 id="stack-title">{content.stack.title}</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{content.stack.groups.map((group) => <article key={group.title} className="card"><h3>{group.title}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span className="chip" key={item}>{item}</span>)}</div></article>)}</div></div></section>;
}
