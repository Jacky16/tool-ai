import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a header with the header level 1 'ToolAI'", () => {
      const expectedText = "ToolAI";

      render(<Header />);

      const headerTitle = screen.getByRole("heading", { name: expectedText });

      expect(headerTitle).toBeInTheDocument();
    });
  });
});
