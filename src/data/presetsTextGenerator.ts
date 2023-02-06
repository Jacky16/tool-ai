import { OptionsTextGenerator } from "../hooks/types/types";

export const presetQuestionGenerator: OptionsTextGenerator = {
  maxTokens: 200,
  model: "command-xlarge-nightly",
  temperature: 2,
  k: 1,
  p: 1,
  frequencyPenalty: 0,
  presencePenalty: 0,
};

export const presetAnswerGenerator: OptionsTextGenerator = {
  maxTokens: 80,
  model: "medium",
  temperature: 0.1,
  k: 1,
  p: 1,
  frequencyPenalty: 0.5,
  presencePenalty: 0.5,
};
