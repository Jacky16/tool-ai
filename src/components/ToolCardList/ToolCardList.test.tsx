import { render, screen } from "@testing-library/react";
import { getTools } from "../../mocks/factory/toolsFactory";
import RenderWrapper from "../../mocks/RenderWrapper";
import ToolCardList from "./ToolCardList";

describe("Given the ToolCardList component", () => {
  describe("When it receives a tools prop with 3 tools", () => {
    test("Then it should show 3 ToolCard components", () => {
      const expectedLength = 3;
      const tools = getTools(expectedLength);

      render(
        <RenderWrapper>
          <ToolCardList tools={tools} />
        </RenderWrapper>
      );
      const toolCards = screen.getAllByRole("article");

      expect(toolCards).toHaveLength(expectedLength);
    });
  });
});
