import { render, screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("Given the ProgressBar component", () => {
  describe("When it receives a value of 10", () => {
    test("Then it should display the value of 10%", () => {
      const value = 10;
      const expectedValue = `${value}%`;

      render(<ProgressBar value={value} />);

      const valueProgressBar = screen.getByText(expectedValue);

      expect(valueProgressBar).toBeInTheDocument();
    });
  });
});
