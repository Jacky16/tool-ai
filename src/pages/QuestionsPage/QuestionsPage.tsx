import { useState } from "react";
import Button from "../../components/Button/Button";
import QuestionCardList from "../../components/QuestionCardList/QuestionCardList";
import { presetQuestionGenerator } from "../../data/presetsTextGenerator";
import { getPromptLanguageQuestions, Language } from "../../data/tools";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../redux/hooks";
import { Bars } from "react-loader-spinner";

interface FormState {
  language: Language;
  numberOfQuestions: number;
}

const QuestionsPage = () => {
  const {
    tools: { questions },
    ui: { isLoading },
  } = useAppSelector((state) => state);

  const { generateText } = useApi();
  const [formState, setFormState] = useState<FormState>({
    language: Language.None,
    numberOfQuestions: 0,
  });

  const maxQuestions = 10;

  const prompt = getPromptLanguageQuestions(
    formState.language,
    formState.numberOfQuestions
  );

  const canFormBeSubmitted =
    formState.language !== Language.None &&
    formState.numberOfQuestions <= maxQuestions &&
    formState.numberOfQuestions > 0;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canFormBeSubmitted) {
      return;
    }

    generateText(presetQuestionGenerator, prompt);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState({ ...formState, language: event.target.value as Language });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      numberOfQuestions: Number(event.target.value),
    });
  };

  return (
    <section className="flex flex-col gap-10">
      <article className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-left text-background">
          Questions
        </h2>
        <p>Generate questions about your programming language</p>

        <form
          className="flex flex-col gap-4 border-2 border-background/30 rounded-md p-4 shadow-md"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col gap-2">
            <span className="font-semibold">Language</span>

            <select
              className="p-1.5"
              onChange={handleSelectChange}
              defaultValue={"Languages"}
            >
              <option disabled={true}>Languages</option>
              {Object.values(Language).map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-semibold">Number of questions</span>
            <input
              type={"number"}
              max={maxQuestions}
              min={1}
              className="p-1.5"
              placeholder="Type an number between 1-10"
              onChange={handleInputChange}
            />
          </label>

          <Button
            text={"Generate"}
            onClick={() => {}}
            disabled={!canFormBeSubmitted || isLoading}
          ></Button>
        </form>
        <small className="self-center text-black/50">
          The answers are generated by AI, could be wrong
        </small>
      </article>
      <article className="flex flex-col gap-4">
        <div className="w-full h-0.5 bg-black/30 shadow-xl"></div>
        {isLoading ? (
          <Bars
            wrapperClass="flex justify-center"
            height="38"
            width="38"
            color="#19121C"
            ariaLabel="bars-loading"
          />
        ) : (
          <QuestionCardList questions={questions} />
        )}
      </article>
    </section>
  );
};

export default QuestionsPage;
