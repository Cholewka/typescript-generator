export enum Preset {
  RECOMMENDED = "recommended",
  NODE10 = "node10",
  NODE12 = "node12",
  DENO = "deno",
  REACT_NATIVE = "reactnative",
  SVELTE = "svelte",
  STARTING_FROM_SCRATCH = "scratch",
}

export interface QuestionsPresets {
  [Preset.RECOMMENDED]: string;
  [Preset.NODE10]: string;
  [Preset.NODE12]: string;
  [Preset.DENO]: string;
  [Preset.REACT_NATIVE]: string;
  [Preset.SVELTE]: string;
  [Preset.STARTING_FROM_SCRATCH]: string;
}

export type InputTypes = "multipleChoice" | "singleChoice";

export interface Question {
  name: string;
  description: string;
  inputType: InputTypes;
  values: string[];
  defaultValue: string;
  presets: QuestionsPresets;
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

export type Presets = {
  name: string;
  description: string;
  presetEnum: Preset;
}[];

export enum StepEnum {
  CHOOSING_PRESET = 0,
  SELECTIONS = 1,
  STRICT_CHECKS = 2,
  MODULE_RESOLUTIONS = 3,
  ADVANCED = 4,
  ENDING = 5,
}

export type Step = {
  step: StepEnum;
  stepName: string;
  stepDescription: string;
};

export type Steps = Step[];
