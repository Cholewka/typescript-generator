import { Questions } from "../typings";

const questions: Questions = [
  {
    key: "compilerOptions",
    values: [
      {
        name: "target",
        description: "Specify ECMAScript target version.",
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
    ],
  },
];

export default questions;
