import React from "react";
import { QuestionsPresets } from "../typings";

import OptionHeading from "./OptionHeading";
import OptionParagraph from "./OptionParagraph";
import OptionInput from "./OptionInput";

import styles from "../styles/Option.module.scss";

import StepsContext from "../contexts/StepsContext";
import QuestionsContext from "../contexts/QuestionsContext";

type OptionProps = {
  idx: number;
  heading: string;
  paragraph: string;
  clickEvent?: () => void;
  values?: string[];
  defaultValue?: string;
  presets?: QuestionsPresets;
};

const Option = ({
  idx,
  heading,
  paragraph,
  clickEvent,
  values,
  defaultValue,
  presets,
}: OptionProps) => {
  const StepContext = React.useContext(StepsContext);
  const QuestionContext = React.useContext(QuestionsContext);

  const currentStep = StepContext!.currentStep;
  const isInputStep = currentStep > 0;

  function checkIsSelected(value: string): boolean {
    if (!isInputStep) return false;
    return (
      QuestionContext!.getPresetForQuestion(currentStep - 1, idx) === value
    );
  }

  return (
    <div
      className={`${styles.Option_block} ${
        isInputStep ? styles.Option_inputblock : null
      }`}
      onClick={clickEvent}
    >
      <OptionHeading>{heading}</OptionHeading>
      <OptionParagraph>{paragraph}</OptionParagraph>
      <form className={styles.Option_form}>
        <div className={styles.Option_grid}>
          {values?.map((value, idx) => (
            <OptionInput
              key={idx}
              idx={idx}
              value={value}
              isDefault={checkIsSelected(value)}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Option;
