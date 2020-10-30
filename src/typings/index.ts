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

export enum Preset {
  RECOMMENDED = "recommended",
  NODE10 = "node10",
  NODE12 = "node12",
  DENO = "deno",
  REACT_NATIVE = "reactnative",
  SVELTE = "svelte",
  STARTING_FROM_SCRATCH = "scratch",
}

export type Presets = {
  name: string;
  description: string;
  presetEnum: Preset;
}[];

export enum StepEnum {
  CHOOSING_PRESET = 0,
}

export type Step = {
  step: StepEnum;
  stepName: string;
  stepDescription: string;
};

export type Steps = Step[];
