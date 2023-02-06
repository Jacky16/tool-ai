import { useDispatch } from "react-redux";
import emailExamples from "../../data/emailExamples";
import environment from "../../environment";
import {
  loadAnswerActionCreator,
  loadQuestionsActionCreator,
  loadSpamCheckerActionCreator,
} from "../../redux/toolsSlice/toolsSlice";
import { setIsLoadingActionCreator } from "../../redux/uiSlice/uiSlice";
import apiEndpoints from "../../routes/apiEndpoints";
import { Question } from "../../types/types";
import splitQuestions from "../../utils/splitQuestions/splitQuestions";
import {
  EmailClassificationDataResponse,
  OptionsTextGenerator,
} from "../types/types";

const useApi = () => {
  const { apiBearer } = environment;

  const dispatch = useDispatch();

  const checkEmailSpam = async (emailContent: string) => {
    dispatch(setIsLoadingActionCreator(true));

    const response = await fetch(apiEndpoints.classify, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `BEARER ${apiBearer}`,
      },
      body: JSON.stringify({
        inputs: [emailContent],
        examples: emailExamples,
        truncate: "END",
      }),
    });

    const data = await response.json();

    const { classifications } = data as EmailClassificationDataResponse;

    const [emailClassification] = classifications;

    const { confidence, prediction } = emailClassification;

    dispatch(
      loadSpamCheckerActionCreator({
        confidence,
        prediction,
      })
    );

    dispatch(setIsLoadingActionCreator(false));
  };

  const generateText = async (preset: OptionsTextGenerator, prompt: string) => {
    dispatch(setIsLoadingActionCreator(true));

    const response = await fetch(apiEndpoints.generate, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `BEARER ${apiBearer}`,
      },

      body: JSON.stringify({
        prompt,
        max_tokens: preset.maxTokens,
        model: preset.model,
        temperature: preset.temperature,
        k: preset.k,
        p: preset.p,
        frequency_penalty: preset.frequencyPenalty,
        presence_penalty: preset.presencePenalty,
        Truncate: "END",
        return_likelihoods: "NONE",
      }),
    });

    const { text } = await response.json();

    dispatch(loadQuestionsActionCreator(splitQuestions(text)));

    dispatch(setIsLoadingActionCreator(false));
  };

  const answerQuestion = async (
    preset: OptionsTextGenerator,
    question: Question
  ) => {
    const response = await fetch(apiEndpoints.generate, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `BEARER ${apiBearer}`,
      },
      body: JSON.stringify({
        prompt: question.question,
        max_tokens: preset.maxTokens,
        model: preset.model,
        temperature: preset.temperature,
        k: preset.k,
        p: preset.p,
        frequency_penalty: preset.frequencyPenalty,
        presence_penalty: preset.presencePenalty,
        Truncate: "END",
        return_likelihoods: "NONE",
      }),
    });

    const { text } = await response.json();

    question.answer = text;
    dispatch(loadAnswerActionCreator(question));
  };
  return {
    checkEmailSpam,
    generateText,
    answerQuestion,
  };
};

export default useApi;
