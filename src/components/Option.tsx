import React from "react";
import { QuestionsPresets, InputTypes } from "../typings";

import OptionHeading from "./OptionHeading";
import OptionParagraph from "./OptionParagraph";

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
  presets?: QuestionsPresets;
};

const Option = ({
  idx,
  heading,
  paragraph,
  inputType,
  clickEvent,
  values,
  defaultValue,
  presets,
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
      {inputType === "singleChoice" ? (
        <div className={styles.Option_singlechoice}>
          <div className={styles.Option_checkboxcontainer}>
            <input type="checkbox" className={styles.Option_checkbox} />
          </div>
          <div>
            <OptionHeading>{heading}</OptionHeading>
            <OptionParagraph>{paragraph}</OptionParagraph>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <OptionHeading>{heading}</OptionHeading>
          <OptionParagraph>{paragraph}</OptionParagraph>
          <form className={styles.Option_form}>
            {values ? (
              <select defaultValue={getDefaultValue()}>
                {values.map((value, idx) => (
                  <option key={idx}>{value}</option>
                ))}
              </select>
            ) : null}
          </form>
        </React.Fragment>
      )}
    </div>
  );
};

export default Option;
