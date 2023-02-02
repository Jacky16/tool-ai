import { Tool } from "../../types/types";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

const toolFactory = Factory.define<Tool>(() => ({
  name: faker.name.firstName(),
  description: faker.lorem.sentence(),
  link: faker.internet.url(),
}));

export const getTools = (count: number) => toolFactory.buildList(count);
