import { Preset, Presets } from "../typings";

const presets: Presets = [
  {
    name: "Recommended",
    description: "The recommended base for TSConfig.",
    presetEnum: Preset.RECOMMENDED,
  },
  {
    name: "Node 10",
    description: "A base TSConfig for working with Node 10.",
    presetEnum: Preset.NODE10,
  },
  {
    name: "Node 12",
    description: "A base TSConfig for working with Node 12.",
    presetEnum: Preset.NODE12,
  },
  {
    name: "Deno",
    description: "A base TSConfig for working with Deno.",
    presetEnum: Preset.DENO,
  },
  {
    name: "React Native",
    description: "A base TSConfig for working with React Native.",
    presetEnum: Preset.REACT_NATIVE,
  },
  {
    name: "Svelte",
    description: "A base TSConfig for working with Svelte.",
    presetEnum: Preset.SVELTE,
  },
  {
    name: "Starting from scratch",
    description: "I want to set all the options by myself.",
    presetEnum: Preset.STARTING_FROM_SCRATCH,
  },
];

export default presets;
