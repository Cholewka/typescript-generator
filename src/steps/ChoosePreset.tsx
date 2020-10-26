import React from "react";
import { Settings, Preset } from "../typings";

export const ChoosePresetSettings: Settings = {
  description:
    "Do you want to start creating a configuration file from a preset?",
};

type ChoosePresetProps = {
  nextStep: () => void;
  setPreset: (preset: Preset) => void;
};

function ChoosePreset({ nextStep, setPreset }: ChoosePresetProps) {
  const presets = [
    {
      name: "Recommended",
      description: "The recommended base for TSConfig.",
      presetCode: Preset.RECOMMENDED,
    },
    {
      name: "Node 10",
      description: "A base TSConfig for working with Node 10.",
      presetCode: Preset.NODE10,
    },
    {
      name: "Node 12",
      description: "A base TSConfig for working with Node 12.",
      presetCode: Preset.NODE12,
    },
    {
      name: "Deno",
      description: "A base TSConfig for working with Deno.",
      presetCode: Preset.DENO,
    },
    {
      name: "React Native",
      description: "A base TSConfig for working with React Native.",
      presetCode: Preset.REACT_NATIVE,
    },
    {
      name: "Svelte",
      description: "A base TSConfig for working with Svelte.",
      presetCode: Preset.SVELTE,
    },
    {
      name: "Starting from scratch",
      description: "I want to set all the options by myself.",
      presetCode: Preset.FROM_SCRATCH,
    },
  ];

  return (
    <section className="app-grid-item">
      {presets.map(({ name, description, presetCode }) => (
        <div
          key={name}
          className="section-block"
          onClick={() => {
            nextStep();
            setPreset(presetCode);
          }}
        >
          <h2 className="block-heading">{name}</h2>
          <p className="block-paragraph">{description}</p>
        </div>
      ))}
    </section>
  );
}

export default ChoosePreset;
