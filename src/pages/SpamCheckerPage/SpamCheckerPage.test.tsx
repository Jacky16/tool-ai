import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderWrapper from "../../mocks/RenderWrapper";
import SpamCheckerPage from "./SpamCheckerPage";

const mockCheckEmailSpam = jest.fn();

jest.mock("../../hooks/useApi/useApi", () => {
  return () => ({
    checkEmailSpam: mockCheckEmailSpam,
  });
});

describe("Given the SpamCheckerPage", () => {
  describe("When the user type 'This is spam'", () => {
    test("Then the function checkEmailSpam should be called with 'This is spam'", async () => {
      const inputText = "This is spam";
      const buttonCheckName = "Check";

      render(<SpamCheckerPage />, { wrapper: RenderWrapper });

      const textArea = screen.getByRole("textbox");
      const buttonCheck = screen.getByRole("button", { name: buttonCheckName });

      await userEvent.type(textArea, inputText);
      await userEvent.click(buttonCheck);

      expect(mockCheckEmailSpam).toHaveBeenCalledWith(inputText);
    });
  });

  describe("When the user click on the button 'Check' without type anything", () => {
    test("Then the function checkEmailSpam should not be called", async () => {
      const buttonCheckName = "Check";

      render(<SpamCheckerPage />, { wrapper: RenderWrapper });

      const buttonCheck = screen.getByRole("button", { name: buttonCheckName });

      await userEvent.click(buttonCheck);

      expect(mockCheckEmailSpam).not.toHaveBeenCalled();
    });
  });
});
