import { render, screen } from "@testing-library/react";
import RenderWrapper from "../../mocks/RenderWrapper";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the 404 Not Found message", () => {
      const expected = "404 Not Found :(";
      render(<NotFoundPage />, { wrapper: RenderWrapper });

      const text = screen.getByText(expected);

      expect(text).toBeInTheDocument();
    });

    test("Then it should show the Back to home link", () => {
      const expected = "Back to home";
      render(<NotFoundPage />, { wrapper: RenderWrapper });

      const link = screen.getByRole("link", { name: expected });

      expect(link).toBeInTheDocument();
    });
  });
});
