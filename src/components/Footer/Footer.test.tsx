import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given the Footer component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a link to midudev hackaton with href 'https://github.com/midudev/midu-cohere-hackathon'https://github.com/midudev/midu-cohere-hackathon", () => {
      const expectedLink = "https://github.com/midudev/midu-cohere-hackathon";

      render(<Footer />);

      const link = screen.getByRole("link", { name: "midudev hackaton" });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", expectedLink);
    });

    test("Then it should display a link to Adrià Martínez with href 'https://github.com/Jacky16')", () => {
      const expectedLink = "https://github.com/Jacky16";

      render(<Footer />);

      const link = screen.getByRole("link", { name: "Adrià Martínez" });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", expectedLink);
    });
  });
});
