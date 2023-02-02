import { tools } from "../../data/tools";
import Container from "../Container/Container";
import ToolCardList from "../ToolCardList/ToolCardList";

const ToolsSection = () => {
  return (
    <section className="flex flex-col items-center bg-tertiary py-10">
      <Container>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold text-background">Tools</h2>
          <ToolCardList tools={tools} />
        </div>
      </Container>
    </section>
  );
};

export default ToolsSection;
