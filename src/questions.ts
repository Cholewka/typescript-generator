import { Question } from "./typings";

interface Questions {
  [key: string]: Question[];
}

// prettier-ignore
const questions: Questions = {
  compilerOptions: [
    {
      name: "target",
      description: "Specify ECMAScript target version.",
      values: ["ES3", "ES5", "ES2015", "ES2016", "ES2017", "ES2018", "ES2019", "ES2020", "ESNext"],
      defaultValue: "ES3",
      presets: {
        undefined: "ES3",
        recommended: "ES2015",
        node10: "ES2018",
        node12: "ES2019",
        deno: "ES3",
        reactnative: "ES3",
        svelte: "ES2017",
        scratch: "ES3",
      },
    },
    {
      name: "module",
      description: "Specify module code generation. Only 'AMD' and 'System' can be used in conjunction with --outFile.",
      values: ["CommonJS", "AMD", "System", "UMD", "ES6", "ES2015", "ES2020", "ESNext"],
      defaultValue: "CommonJS or ES6/ES2015",
      presets: {
        undefined: "CommonJS",
        recommended: "CommonJS",
        node10: "CommonJS",
        node12: "CommonJS",
        deno: "CommonJS",
        reactnative: "CommonJS",
        svelte: "CommonJS",
        scratch: "CommonJS"
      }
    },
    {
      name: "strict",
      description: "Enable all strict type checking options. Requires TypeScript version 2.3 or later.",
      values: ["true", "false"],
      defaultValue: "false",
      presets: {
        undefined: "false",
        recommended: "true",
        node10: "true",
        node12: "true",
        deno: "true",
        reactnative: "false",
        svelte: "false",
        scratch: "false"
      }
    },
    {
      name: "esModuleInterop",
      description: "No short description available. Important: if this option is turn on, the %MONOSPACE%allowSynthethicDefaultImports%STOPMONOSPACE% option will be turn on, too.",
      values: ["true", "false"],
      defaultValue: "false",
      presets: {
        undefined: "false",
        recommended: "true",
        node10: "true",
        node12: "true",
        deno: "false",
        reactnative: "false",
        svelte: "true",
        scratch: "false"
      }
    },
  ],
};

export default questions;
