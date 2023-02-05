export interface Tool {
  name: string;
  description: string;
  link: string;
}

export interface EmailClassificationDataResponse {
  classifications: [
    {
      prediction: string;
      confidence: number;
    }
  ];
}

export interface Question {
  id: string;
  question: string;
  answer?: string;
}
