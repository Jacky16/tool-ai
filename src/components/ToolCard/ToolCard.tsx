import { Tool } from "../../types/types";
import { Link } from "react-router-dom";

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool: { name, description, link } }: ToolCardProps) => {
  return (
    <article className="w-full flex flex-col items-center gap-2 bg-primary max-w-sm text-background p-2 border-2 border-background rounded-sm shadow-lg">
      <h3 className="font-bold text-3xl">{name}</h3>
      <p className="text-center">{description}</p>

      <Link
        to={`/${link}`}
        className={
          "border-2 border-background rounded-md py-0.5 px-7 font-semibold hover:bg-tertiary"
        }
      >
        Try it
      </Link>
    </article>
  );
};

export default ToolCard;
