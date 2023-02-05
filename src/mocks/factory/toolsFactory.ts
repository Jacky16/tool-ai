import { Question, Tool } from "../../types/types";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

const toolFactory = Factory.define<Tool>(() => ({
  name: faker.name.firstName(),
  description: faker.lorem.sentence(),
  link: faker.internet.url(),
}));

const questionWithoutAnswerFactory = Factory.define<Question>(() => ({
  id: faker.datatype.uuid(),
  question: faker.lorem.sentence(),
}));

export const getTools = (count: number) => toolFactory.buildList(count);

export const getQuestionsWithoutAnswer = (count: number) =>
  questionWithoutAnswerFactory.buildList(count);
