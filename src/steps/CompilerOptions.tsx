import React, { useCallback } from "react";
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

function CompilerOptions({ preset }: CompilerOptionsProps) {
  const renderItems = useCallback(() => {
    return questions.compilerOptions.map((item, idx) => {
      return <CompilerOption item={item} preset={preset} key={idx} />;
    });
  }, [preset]);

  return <section className="app-grid-item">{renderItems()}</section>;
}

export default CompilerOptions;
