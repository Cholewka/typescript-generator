import React, { Profiler } from "react";
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
};

const OptionInput = ({
  type,
  heading,
  paragraph,
  values,
  defaultValue,
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
      [QuestionContext!.getQuestionIndex(heading)].find(
        ({ name, value }) => name === heading && value === true
      )
      ? true
      : false;
  }

  function getSelectedAnswer(): string {
    return (
      QuestionContext!
        .getAnswers()
        [QuestionContext!.getQuestionIndex(heading)].find(
          ({ name }) => name === heading
        )
        ?.value.toString() || defaultValue!
    );
  }

  const [selectedAnswer, setSelectedAnswer] = React.useState<boolean>(
    isSelectedAnswer()
  );

  return type === "singleChoice" ? (
    <div className={styles.Option_singlechoice}>
      <div className={styles.Option_checkboxcontainer}>
        <Profiler
          id="CurrentAnswer"
          onRender={() => setSelectedAnswer(isSelectedAnswer())}
        >
          <input
            type="checkbox"
            className={styles.Option_checkbox}
            checked={isSelectedAnswer()}
            onChange={() => {
              QuestionContext!.sendNewAnswer(
                QuestionContext!.getQuestionIndex(heading),
                heading,
                !selectedAnswer
              );
              setSelectedAnswer(!selectedAnswer);
            }}
          />
        </Profiler>
      </div>
      {renderText()}
    </div>
  ) : (
    <div>
      {renderText()}
      {values ? (
        <select
          defaultValue={getSelectedAnswer()!}
          className={styles.Option_select}
        >
          {values.map((value, idx) => (
            <option
              key={idx}
              onClick={() => {
                QuestionContext!.sendNewAnswer(
                  QuestionContext!.getQuestionIndex(heading),
                  heading,
                  value
                );
              }}
            >
              {value}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export default OptionInput;
