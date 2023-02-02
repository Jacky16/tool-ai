import { Tool } from "../../types/types";
import ToolCard from "../ToolCard/ToolCard";

interface ToolCardListProps {
  tools: Tool[];
}

const ToolCardList = ({ tools }: ToolCardListProps) => {
  return (
    <ul className="flex flex-col items-center gap-12 md:flex-row md:grid grid-cols-3">
      {tools.map((tool, index) => (
        <li key={index}>
          <ToolCard tool={tool} />
        </li>
      ))}
    </ul>
  );
};

export default ToolCardList;
