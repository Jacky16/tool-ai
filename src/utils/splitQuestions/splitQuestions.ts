import { Question } from "../../types/types";

const splitQuestions = (questions: string): Question[] => {
  return questions
    .split("\n")
    .map(
      (textQuestion): Question => ({
        question: textQuestion,
      })
    )
    .filter((question) => question.question !== "");
};

export default splitQuestions;
