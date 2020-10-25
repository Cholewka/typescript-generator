import React, { useState } from "react";
import { Question, Preset } from "../typings";

import Input from "../components/Input";

type CompilerOptionProps = {
  item: Question;
  preset: Preset;
};

function randomizedValue(value: string): string {
  return `${value}_${Math.random().toString(36).substr(2, 9)}`;
}

function CompilerOption({ item, preset }: CompilerOptionProps) {
  const { name, description, values, defaultValue, presets } = item;
  const [selectedValue, setSelectedValue] = useState<string>(presets[preset]);
  const [hasChanged, setHasChanged] = useState<boolean>(false);
  return (
    <div key={name} className="section-block input-block">
      <h2 className="block-heading">{name}</h2>
      <p className="block-headline">
        Default: <span className="monospace">{defaultValue}</span> &bull;{" "}
        <a
          href={"https://www.typescriptlang.org/tsconfig#" + name}
          target="blank"
          title="TypeScript reference"
          className="block-referencelink"
        >
          Get the reference
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
      <button onClick={() => console.log(selectedValue)}>get value</button>
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
              />
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default CompilerOption;
