import { Question } from "../../types/types";
import QuestionCard from "../QuestionCard/QuestionCard";

interface QuestionListProps {
  questions: Question[];
}

const QuestionCardList = ({ questions }: QuestionListProps) => {
  return (
    <ul className="flex flex-col gap-6 md:grid md:grid-cols-3">
      {questions.map((question) => (
        <li key={question.question}>
          <QuestionCard question={question} />
        </li>
      ))}
    </ul>
  );
};

export default QuestionCardList;
