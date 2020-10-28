export interface Question {
  name: string;
  description: string;
}

export type Questions = {
  key: string;
  values: Question[];
}[];

export interface Answer {
  name: string;
  value: string | boolean;
}

export type Answers = Answer[][];

export type ParsedAnswer = {
  [key: string]: {
    [key: string]: string | boolean;
  };
};
