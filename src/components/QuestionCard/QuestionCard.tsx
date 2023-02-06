import { Question } from "../../types/types";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({
  question: { question, answer },
}: QuestionCardProps) => {
  return (
    <article className="flex flex-col gap-2 md:gap-4 bg-primary p-2 md:p-4 border-2 border-background rounded-sm shadow-md max-w-xl">
      <h3 className="text-lg font-semibold ">{question}</h3>
      {!answer ? (
        <button className="border-2 p-1 px-4 border-background md:self-center hover:bg-background hover:text-white rounded-xl">
          Show answer
        </button>
      ) : (
        <p>{answer}</p>
      )}
    </article>
  );
};

export default QuestionCard;
