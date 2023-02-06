import { render, screen } from "@testing-library/react";
import { getQuestionsWithoutAnswer } from "../../mocks/factory/toolsFactory";
import QuestionCardList from "./QuestionCardList";

describe("Given the QuestionCardList component", () => {
  describe("When is rendered with a list of 5 questions", () => {
    test("Then it should show a list of questions", () => {
      const expectedQuestions = 5;
      const questions = getQuestionsWithoutAnswer(expectedQuestions);

      render(<QuestionCardList questions={questions} />);

      const questionsArticles = screen.getAllByRole("article");

      expect(questionsArticles).toHaveLength(expectedQuestions);
    });
  });
});
