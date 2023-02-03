import { render, screen } from "@testing-library/react";
import RenderWrapper from "../../mocks/RenderWrapper";
import NavLinkTool from "./NavLinkTool";

describe("Given the NavLinkTool component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a link with the text 'Spam Checker' with href 'tools/spam-checker'", () => {
      const expectedText = "Spam Checker";
      const expectedHref = "/tools/spam-checker";

      render(
        <RenderWrapper>
          <NavLinkTool to={expectedHref}>{expectedText}</NavLinkTool>
        </RenderWrapper>
      );

      const link = screen.getByRole("link", { name: expectedText });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", expectedHref);
    });
  });
});
