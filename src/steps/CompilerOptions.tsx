import React, { useState } from "react";
import { Preset, Settings } from "../typings";

import questions from "../questions";

import CompilerOption from "../components/CompilerOption";

export const CompilerOptionsSettings: Settings = {
  description:
    'Let\'s set the "compilerOptions" values. Hover over the options to get more informations about them.',
};

type CompilerOptionsProps = {
  preset: Preset;
};

function randomizedValue(value: string): string {
  return `${value}_${Math.random().toString(36).substr(2, 9)}`;
}

function CompilerOptions({ preset }: CompilerOptionsProps) {
  return (
    <section className="app-grid-item">
      {questions.compilerOptions.map(
        ({
          name,
          description,
          values,
          defaultValue,
          presets,
          linkToReference,
        }) => {
          const [value, setValue] = useState<string | boolean | null>(null);
          return (
            <div key={name} className="section-block input-block">
              <h2 className="block-heading">{name}</h2>
              <p className="block-headline">
                Default: <span className="monospace">{defaultValue}</span>{" "}
                {linkToReference ? (
                  <React.Fragment>
                    &bull;{" "}
                    <a
                      href={"https://www.typescriptlang.org/tsconfig#" + name}
                      target="blank"
                      title="TypeScript reference"
                      className="block-referencelink"
                    >
                      Get the reference
                    </a>
                  </React.Fragment>
                ) : null}
              </p>
              <p
                className="block-paragraph"
                dangerouslySetInnerHTML={{
                  __html: description
                    .replace("%MONOSPACE%", `<span class="monospace">`)
                    .replace("%STOPMONOSPACE%", "</span>"),
                }}
              />
              <button onClick={() => console.log(value)}>get value</button>
              <form className="block-form">
                <div className="block-grid">
                  {values.map((value) => {
                    const key = randomizedValue(value);
                    return (
                      <CompilerOption
                        key={key}
                        keyString={key}
                        presetValue={presets[preset]}
                        value={value}
                        setValue={setValue}
                      />
                    );
                  })}
                </div>
              </form>
            </div>
          );
        }
      )}
    </section>
  );
}

export default CompilerOptions;
