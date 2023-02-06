import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { presetQuestionGenerator } from "../../data/presetsTextGenerator";
import RenderWrapper from "../../mocks/RenderWrapper";
import QuestionsPage from "./QuestionsPage";

const mockGenerateText = jest.fn();

jest.mock("../../hooks/useApi/useApi", () => {
  return () => ({
    generateText: mockGenerateText,
  });
});

describe("Given the QuestionPage", () => {
  describe("When select 'Typescript' and '5' questions", () => {
    test("Then the function 'generateText' should be called with the prompt 'Give me a list of 5 questions about TypeScript without of number of list'", async () => {
      const expectedPrompt =
        "Give me a list of 5 questions about TypeScript without of number of list";
      const languageToSelect = "TypeScript";

      render(<QuestionsPage />, { wrapper: RenderWrapper });

      const select = screen.getByRole("combobox");
      await userEvent.selectOptions(select, languageToSelect);

      const input = screen.getByRole("spinbutton");
      await userEvent.type(input, "5");

      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(mockGenerateText).toHaveBeenCalledWith(
        presetQuestionGenerator,
        expectedPrompt
      );
    });
  });

  describe("When the inputs are empty and click the button 'Generate0", () => {
    test("Then the function 'generateText' should not be called", async () => {
      render(<QuestionsPage />, { wrapper: RenderWrapper });

      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(mockGenerateText).not.toHaveBeenCalled();
    });
  });

  describe("When select 'TypesScript' but type 20 in the input", () => {
    test("Then the function 'generateText' should not be called", async () => {
      const languageToSelect = "TypeScript";

      render(<QuestionsPage />, { wrapper: RenderWrapper });

      const select = screen.getByRole("combobox");
      await userEvent.selectOptions(select, languageToSelect);

      const input = screen.getByRole("spinbutton");
      await userEvent.type(input, "20");

      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(mockGenerateText).not.toHaveBeenCalled();
    });
  });
});
