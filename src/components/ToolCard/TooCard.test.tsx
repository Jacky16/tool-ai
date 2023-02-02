import { render, screen } from "@testing-library/react";
import RenderWrapper from "../../mocks/RenderWrapper";
import { Tool } from "../../types/types";
import ToolCard from "./ToolCard";

describe("Given the ToolCard component", () => {
  describe("When it receives a tool prop with name 'Spam', description 'This is an description' and link 'spam'", () => {
    test("Then it should display a heading level 3 with the text 'Spam' with a paragraph 'This is an description' and link with name 'Try it'", () => {
      const expectedTitle = "Spam";
      const expectedDescription = "This is an description";

      const tool: Tool = {
        name: expectedTitle,
        description: expectedDescription,
        link: "spam",
      };
      render(
        <RenderWrapper>
          <ToolCard tool={tool} />
        </RenderWrapper>
      );

      const title = screen.getByRole("heading", { level: 3 });
      const description = screen.getByText(expectedDescription);
      const link = screen.getByRole("link", { name: "Try it" });

      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent(expectedTitle);
      expect(description).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });
  });
});
