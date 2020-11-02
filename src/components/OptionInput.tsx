import React from "react";
import { InputTypes } from "../typings";

import styles from "../styles/Option.module.scss";
import OptionHeading from "./OptionHeading";
import OptionParagraph from "./OptionParagraph";

import QuestionsContext from "../contexts/QuestionsContext";

type OptionInputTypes = {
  type: InputTypes | undefined;
  heading: string;
  paragraph: string;
  values?: string[];
  defaultValue?: string;
  selectedValue: string | boolean | null;
  setSelectedValue: React.Dispatch<
    React.SetStateAction<string | boolean | null>
  >;
};

const OptionInput = ({
  type,
  heading,
  paragraph,
  values,
  defaultValue,
  selectedValue,
  setSelectedValue,
}: OptionInputTypes) => {
  const QuestionContext = React.useContext(QuestionsContext);

  const renderText = () => (
    <div>
      <OptionHeading>{heading}</OptionHeading>
      <OptionParagraph>{paragraph}</OptionParagraph>
    </div>
  );

  function isSelectedAnswer(): boolean {
    return QuestionContext!
      .getAnswers()
      [QuestionContext!.getQuestionIndex(heading)].find(({ name, value }) => {
        console.log(name);
        return name === heading && value === true;
      })
      ? true
      : false;
  }

  return type === "singleChoice" ? (
    <div className={styles.Option_singlechoice}>
      <div className={styles.Option_checkboxcontainer}>
        <input
          type="checkbox"
          className={styles.Option_checkbox}
          checked={isSelectedAnswer()}
          onChange={() => {
            QuestionContext!.sendNewAnswer(
              QuestionContext!.getQuestionIndex(heading),
              heading,
              selectedValue === null ? true : !selectedValue
            );
            setSelectedValue(selectedValue === null ? true : !selectedValue);
          }}
        />
      </div>
      {renderText()}
    </div>
  ) : (
    <div>
      {renderText()}
      {values ? (
        <select defaultValue={defaultValue!} className={styles.Option_select}>
          {values.map((value, idx) => (
            <option key={idx}>{value}</option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export default OptionInput;
