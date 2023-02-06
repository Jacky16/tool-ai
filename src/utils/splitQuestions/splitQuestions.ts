import { Question } from "../../types/types";

const splitQuestions = (questions: string): Question[] => {
  return questions
    .split("\n")
    .map(
      (textQuestion): Question => ({
        question: textQuestion.replace(/\b\d+\./g, ""),
      })
    )
    .filter((question) => question.question !== "");
};

export default splitQuestions;
