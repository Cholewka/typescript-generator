import React, { useCallback } from "react";
import { Preset, Settings, Questions, Steps } from "../typings";

import questions from "../questions";

import Option from "../components/Option";

export const CompilerOptionsSettings: Settings = {
  description:
    'Let\'s set the "compilerOptions" values. Hover over the options to get more informations about them.',
};

type CompilerOptionsProps = {
  preset: Preset;
  options: Questions;
  updateOptions: React.Dispatch<React.SetStateAction<Questions>>;
};

function CompilerOptions({
  preset,
  options,
  updateOptions,
}: CompilerOptionsProps) {
  const currentStep = Steps.COMPILER_OPTIONS;
  const renderItems = useCallback(() => {
    return questions.compilerOptions.map((item, idx) => {
      return (
        <Option
          updateOptions={updateOptions}
          options={options}
          item={item}
          preset={preset}
          key={idx}
          currentInput={idx}
          currentStep={currentStep}
        />
      );
    });
  }, [preset, options, updateOptions, currentStep]);

  return <section className="app-grid-item">{renderItems()}</section>;
}

export default CompilerOptions;
