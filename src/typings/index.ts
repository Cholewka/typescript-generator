export interface Settings {
  description: string;
}

export enum Preset {
  UNDEFINED = 0,
  RECOMMENDED = 1,
  NODE10 = 2,
  NODE12 = 3,
  DENO = 4,
  REACT_NATIVE = 5,
  SVELTE = 6,
  FROM_SCRATCH = 7,
}
