import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import path from "path";
import App from "./App";
import RenderWrapper from "./mocks/RenderWrapper";

describe("Given the app", () => {
  describe("When the app is rendered", () => {
    test("Then it matches the snapshot", () => {
      const view = render(<App />, {
        wrapper: RenderWrapper,
      });
      expect(view).toMatchSnapshot();
    });
  });

  describe("When click on button 'Try' of Spam checker tool", () => {
    test("Then it should show a heading level 2 with text 'Spam checker'", async () => {
      const expectedText = "Spam Checker";
      const expectedPath = "/tools/spam-checker";
      const nameLinkTool = "Try it";

      render(<App />, {
        wrapper: RenderWrapper,
      });

      const tryItLinks = screen.getAllByRole("link", { name: nameLinkTool });

      const linkTryIt = tryItLinks.find((link) => {
        return link.getAttribute("href") === expectedPath;
      });

      await userEvent.click(linkTryIt!);

      const heading = screen.getByRole("heading", {
        level: 2,
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When click on button 'Try' of Question", () => {
    test("Then it should show a heading level 2 with text 'Question'", async () => {
      const expectedText = "Questions";
      const expectedPath = "/tools/language-questions";
      const nameLinkTool = "Questions";

      render(<App />, {
        wrapper: RenderWrapper,
      });

      const tryItLinks = screen.getAllByRole("link", { name: nameLinkTool });

      const linkTryIt = tryItLinks.find((link) => {
        return link.getAttribute("href") === expectedPath;
      });

      await userEvent.click(linkTryIt!);

      const heading = screen.getByRole("heading", {
        level: 2,
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
