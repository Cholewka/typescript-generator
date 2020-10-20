import React from "react";
import { Preset, Settings } from "../../typings";

import questions from "../../questions";

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
        }) => (
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
            <form className="block-form">
              <div className="block-grid">
                {values.map((value) => {
                  const generatedRandomizedValue: string = randomizedValue(
                    value
                  );
                  if (value === "None") return null;
                  return (
                    <div key={generatedRandomizedValue}>
                      <input
                        type="radio"
                        id={generatedRandomizedValue}
                        value={generatedRandomizedValue}
                      />
                      <label
                        className="block-label"
                        htmlFor={generatedRandomizedValue}
                      >
                        {value}
                      </label>
                    </div>
                  );
                })}
              </div>
            </form>
          </div>
        )
      )}
    </section>
  );
}

export default CompilerOptions;
