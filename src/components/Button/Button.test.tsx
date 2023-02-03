import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives 'Check' as a text", () => {
    test("Then it should display a text", () => {
      const text = "Check";

      render(<Button text={text} onClick={() => {}} />);
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  describe("When the user clicks the button", () => {
    test("Then it should call the onClick function", async () => {
      const text = "Check";
      const onClick = jest.fn();

      render(<Button text={text} onClick={onClick} />);
      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
