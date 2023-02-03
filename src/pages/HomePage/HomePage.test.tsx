import { render, screen } from "@testing-library/react";
import RenderWrapper from "../../mocks/RenderWrapper";
import HomePage from "./HomePage";

describe("Given the HomePage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 with text 'Tools'", () => {
      const expectedText = "Tools";

      render(<HomePage />, { wrapper: RenderWrapper });

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
