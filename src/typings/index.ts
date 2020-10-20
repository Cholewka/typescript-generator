export interface Settings {
  description: string;
}

export enum Preset {
  UNDEFINED = "undefined",
  RECOMMENDED = "recommended",
  NODE10 = "node10",
  NODE12 = "node12",
  DENO = "deno",
  REACT_NATIVE = "reactnative",
  SVELTE = "svelte",
  FROM_SCRATCH = "scratch",
}

export interface Question {
  name: string;
  description: string;
  values: string[];
  defaultValue: string;
  presets: {
    undefined: string;
    recommended: string;
    node10: string;
    node12: string;
    deno: string;
    reactnative: string;
    svelte: string;
    scratch: string;
  };

  // optionals
  linkToReference?: boolean;
}
