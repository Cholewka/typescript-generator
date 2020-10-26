import React, { useState } from "react";
import { Question, Preset, Questions } from "../typings";

import Input from "./Input";

type OptionProps = {
  item: Question;
  preset: Preset;
  options: Questions;
  updateOptions: React.Dispatch<React.SetStateAction<Questions>>;
  currentStep: string;
  currentInput: number;
};

function randomizedValue(value: string): string {
  return `${value}_${Math.random().toString(36).substr(2, 9)}`;
}

function updateOption(
  options: Questions,
  updateOptions: React.Dispatch<React.SetStateAction<Questions>>,
  currentStep: string,
  currentInput: number,
  selectedValue: string,
  presetValue: string
) {
  const newArray = options;
  let newValue: string | boolean = selectedValue || presetValue;
  if (newValue === "true") newValue = true;
  if (newValue === "false") newValue = false;
  newArray[currentStep][currentInput].selectedValue = newValue;
  updateOptions(newArray);
}

function Option({
  item,
  options,
  updateOptions,
  preset,
  currentStep,
  currentInput,
}: OptionProps) {
  const { name, description, values, defaultValue, presets } = item;
  const [selectedValue, setSelectedValue] = useState<string>(presets[preset]);
  const [hasChanged, setHasChanged] = useState<boolean>(false);
  return (
    <div key={name} className="section-block input-block">
      <h2 className="block-heading">{name}</h2>
      <p className="block-headline">
        Default: <span className="monospace">{defaultValue}</span>
        <a
          href={"https://www.typescriptlang.org/tsconfig#" + name}
          target="blank"
          title="TypeScript reference"
          className="block-referencelink"
        >
          <span>REF</span>
        </a>
      </p>
      <p
        className="block-paragraph"
        dangerouslySetInnerHTML={{
          __html: description
            .replace("%MONOSPACE%", `<span class="monospace">`)
            .replace("%STOPMONOSPACE%", "</span>"),
        }}
      />
      <form className="block-form">
        <div className="block-grid">
          {values.map((value) => {
            const key = randomizedValue(value);
            return (
              <Input
                key={key}
                keyString={key}
                presetValue={presets[preset]}
                value={value}
                selectedValue={selectedValue}
                setValue={setSelectedValue}
                hasChanged={hasChanged}
                setHasChanged={setHasChanged}
                updateOption={updateOption}
                updateOptions={updateOptions}
                currentStep={currentStep}
                options={options}
                currentInput={currentInput}
              />
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default Option;
