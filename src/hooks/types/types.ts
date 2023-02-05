export interface OptionsTextGenerator {
  maxTokens: number;
  model: "command-xlarge-nightly" | "xlarge" | "medium";
  temperature: number;
  k: number;
  p: number;
  frequencyPenalty: number;
  presencePenalty: number;
}

export interface EmailClassificationDataResponse {
  classifications: [
    {
      prediction: string;
      confidence: number;
    }
  ];
}

export interface TextGeneratorDataResponse {
  generations: [
    {
      text: string;
    }
  ];
}
