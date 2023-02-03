import { render, screen } from "@testing-library/react";
import RenderWrapper from "../../mocks/RenderWrapper";
import ToolsNavBar from "./ToolsNavBar";

describe("Given the ToolsNavBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a link with the text 'Spam Checker' with href 'tools/spam-checker'", () => {
      const expectedText = "Spam Checker";
      const expectedHref = "/tools/spam-checker";

      render(
        <RenderWrapper>
          <ToolsNavBar />
        </RenderWrapper>
      );

      const link = screen.getByRole("link", { name: expectedText });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", expectedHref);
    });
  });
});
