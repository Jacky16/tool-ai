import { Tool } from "../types/types";

export const tools: Tool[] = [
  {
    name: "Spam checker",
    description: "Check if a email is spam with one click",
    link: "tools/spam-checker",
  },
  {
    name: "Language questions",
    description: "Generate questions about your programming language",
    link: "tools/language-questions",
  },
];

export enum Language {
  None = "None",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  Python = "Python",
  Java = "Java",
  C = "C",
  Cpp = "C++",
  CSharp = "C#",
  Go = "Go",
  PHP = "PHP",
  Ruby = "Ruby",
  Swift = "Swift",
  Kotlin = "Kotlin",
  Rust = "Rust",
  Scala = "Scala",
  Dart = "Dart",
  Haskell = "Haskell",
  Lua = "Lua",
  Perl = "Perl",
  R = "R",
  SQL = "SQL",
  ObjectiveC = "Objective-C",
}

export const getPromptLanguageQuestions = (
  language: Language,
  questionsNumber: number
) => {
  return `Give me a list of ${questionsNumber} questions about ${language} without of number of list`;
};
