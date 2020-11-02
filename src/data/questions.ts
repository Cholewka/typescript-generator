import { Questions } from "../typings";

const questions: Questions = [
  {
    // Selections
    key: "compilerOptions",
    values: [
      {
        name: "target",
        description:
          "Sets the JavaScript language version for emitted JavaScript and includes compatible library declarations.",
        inputType: "multipleChoice",
        values: [
          "ES3",
          "ES5",
          "ES2015",
          "ES2016",
          "ES2017",
          "ES2018",
          "ES2019",
          "ES2020",
          "ESNext",
        ],
        defaultValue: "ES3",
        presets: {
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
        description: "Module code generation.",
        inputType: "multipleChoice",
        values: [
          "CommonJS",
          "AMD",
          "System",
          "UMD",
          "ES6",
          "ES2015",
          "ES2020",
          "ESNext",
        ],
        defaultValue: "CommonJS or ES6/ES2015",
        presets: {
          recommended: "CommonJS",
          node10: "CommonJS",
          node12: "CommonJS",
          deno: "CommonJS",
          reactnative: "CommonJS",
          svelte: "CommonJS",
          scratch: "CommonJS",
        },
      },
    ],
  },
  {
    // Strict Checks
    key: "compilerOptions",
    values: [
      {
        name: "strict",
        description:
          "Enable all strict type checking options. Requires TypeScript version 2.3 or later.",
        inputType: "singleChoice",
        values: ["true", "false"],
        defaultValue: "false",
        presets: {
          recommended: "true",
          node10: "true",
          node12: "true",
          deno: "true",
          reactnative: "false",
          svelte: "false",
          scratch: "false",
        },
      },
    ],
  },
  {
    // Module Resolutions
    key: "compilerOptions",
    values: [
      {
        name: "esModuleInterop",
        description:
          "Emit additional JS to ease support for importing CommonJS modules, and enables `allowSyntheticDefaultImports` for type compatibility.",
        inputType: "singleChoice",
        values: ["true", "false"],
        defaultValue: "false",
        presets: {
          recommended: "true",
          node10: "true",
          node12: "true",
          deno: "false",
          reactnative: "false",
          svelte: "true",
          scratch: "false",
        },
      },
    ],
  },
  {
    // Advanced
    key: "compilerOptions",
    values: [
      {
        name: "skipLibCheck",
        description: "Skip type checking all .d.ts files.",
        inputType: "singleChoice",
        values: ["true", "false"],
        defaultValue: "false",
        presets: {
          recommended: "true",
          node10: "true",
          node12: "true",
          deno: "false",
          reactnative: "false",
          svelte: "true",
          scratch: "false",
        },
      },
    ],
  },
];

export default questions;
