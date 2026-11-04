import PortfolioPage from "../components/PortfolioPage";
import { getContent } from "@/content";
export default function Page() { return <PortfolioPage content={getContent("pt")} />; }
