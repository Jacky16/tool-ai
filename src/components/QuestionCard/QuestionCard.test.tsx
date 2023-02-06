import { render, screen } from "@testing-library/react";
import { Question } from "../../types/types";
import QuestionCard from "./QuestionCard";

describe("Given the QuestionCard component", () => {
  describe("When is rendered with a question without answer", () => {
    test("Then it should show the answer inside a heading level 3 and the button 'Show answer'", () => {
      const nameButton = "Show answer";
      const question: Question = {
        question: "What is the difference between var and let?",
      };
      render(<QuestionCard question={question} />);

      const questionHeading = screen.getByRole("heading", {
        name: question.question,
      });
      const button = screen.getByRole("button", {
        name: nameButton,
      });

      expect(questionHeading).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When is rendered with a question with answer", () => {
    test("Then it should show the answer but not the button 'Show answer'", () => {
      const question: Question = {
        question: "What is the difference between var and let?",
        answer: "var is function scoped and let is block scoped",
      };
      render(<QuestionCard question={question} />);

      const questionHeading = screen.getByRole("heading", {
        name: question.question,
      });
      const answer = screen.getByText(question.answer as string);

      expect(questionHeading).toBeInTheDocument();
      expect(answer).toBeInTheDocument();
    });
  });
});
