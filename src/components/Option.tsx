import React from "react";
import { InputTypes } from "../typings";

import OptionInput from "./OptionInput";

import styles from "../styles/Option.module.scss";

import StepsContext from "../contexts/StepsContext";
import QuestionsContext from "../contexts/QuestionsContext";

type OptionProps = {
  idx: number;
  heading: string;
  paragraph: string;
  inputType?: InputTypes;
  clickEvent?: () => void;
  values?: string[];
  defaultValue?: string;
};

const Option = ({
  heading,
  paragraph,
  inputType,
  clickEvent,
  values,
  defaultValue,
}: OptionProps) => {
  const StepContext = React.useContext(StepsContext);
  const QuestionContext = React.useContext(QuestionsContext);

  const currentStep = StepContext!.currentStep;
  const isInputStep = currentStep > 0;

  function getDefaultValue(): string {
    const questionIndex = QuestionContext!
      .getQuestions()
      [currentStep - 1].values.findIndex(({ name }) => name === heading);
    return QuestionContext!.getPresetForQuestion(
      currentStep - 1,
      questionIndex
    );
  }

  return (
    <div
      className={`${styles.Option_block} ${
        isInputStep ? styles.Option_inputblock : null
      }`}
      onClick={clickEvent}
    >
      <OptionInput
        heading={heading}
        paragraph={paragraph}
        type={inputType}
        values={values}
        defaultValue={currentStep > 0 ? getDefaultValue() : undefined}
      />
    </div>
  );
};

export default Option;
