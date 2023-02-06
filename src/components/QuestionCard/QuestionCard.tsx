import { useState } from "react";
import { presetAnswerGenerator } from "../../data/presetsTextGenerator";
import useApi from "../../hooks/useApi/useApi";
import { Question } from "../../types/types";
import { Bars } from "react-loader-spinner";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({
  question: { question, answer },
}: QuestionCardProps) => {
  const { answerQuestion } = useApi();

  const [isLoading, setIsLoading] = useState(false);

  const handleShowAnswer = () => {
    if (answer) return;

    setIsLoading(true);
    answerQuestion(presetAnswerGenerator, {
      question,
    });
  };

  if (isLoading && answer) {
    setIsLoading(false);
  }

  const buttonElement = isLoading ? (
    <Bars
      wrapperClass="flex justify-center"
      height="28"
      width="28"
      color="#19121C"
      ariaLabel="bars-loading"
    />
  ) : (
    <button
      className="border-2 p-1 px-4 border-background md:self-center hover:bg-background hover:text-white rounded-xl"
      onClick={handleShowAnswer}
    >
      Show answer
    </button>
  );

  return (
    <article className="flex flex-col gap-2 md:gap-4 bg-primary p-2 md:p-4 border-2 border-background rounded-sm shadow-md">
      <h3 className="text-lg font-semibold ">{question}</h3>

      {!answer ? buttonElement : <p>{answer}</p>}
    </article>
  );
};

export default QuestionCard;
