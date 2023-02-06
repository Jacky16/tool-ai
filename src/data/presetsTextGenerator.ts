import { OptionsTextGenerator } from "../hooks/types/types";

export const presetQuestionGenerator: OptionsTextGenerator = {
  maxTokens: 300,
  model: "command-xlarge-nightly",
  temperature: 2,
  k: 0,
  p: 0,
  frequencyPenalty: 0,
  presencePenalty: 0,
};

export const presetAnswerGenerator: OptionsTextGenerator = {
  maxTokens: 80,
  model: "command-xlarge-nightly",
  temperature: 0,
  k: 0,
  p: 0,
  frequencyPenalty: 0,
  presencePenalty: 0,
};
