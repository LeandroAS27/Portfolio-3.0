import type { PortfolioContent } from "@/content/types";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";
import Stack from "./Stack";
import WhatsappButton from "./WhatsappButton";

export default function PortfolioPage({ content }: { content: PortfolioContent }) {
  return (
    <>
      <a className="skip-link" href="#conteudo">{content.interface.skip}</a>
      <Header content={content} />
      <main id="conteudo">
        <Home content={content} />
        <About content={content} />
        <Experience content={content} />
        <Stack content={content} />
        <Projects content={content} />
        <Services content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
      <WhatsappButton content={content} />
    </>
  );
}
