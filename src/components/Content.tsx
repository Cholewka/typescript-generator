import React from "react";
import { StepEnum } from "../typings";

import QuestionsContext from "../contexts/QuestionsContext";
import StepsContext from "../contexts/StepsContext";

import Option from "./Option";
import Ending from "./Ending";

import styles from "../styles/App.module.scss";
import steps from "../data/steps";

const Content = () => {
  const QuestionContext = React.useContext(QuestionsContext);
  const StepContext = React.useContext(StepsContext);

  const renderItems = () => {
    const currentStep = StepContext!.getStep();
    if (currentStep.step === StepEnum.CHOOSING_PRESET) {
      return QuestionContext!
        .getPresets()
        .map(({ name, description, presetEnum }, idx) => (
          <Option
            key={idx}
            idx={idx}
            heading={name}
            paragraph={description}
            clickEvent={() => {
              StepContext!.nextStep();
              QuestionContext!.setPreset(presetEnum);
              QuestionContext!.setPresetsInAnswers(presetEnum);
            }}
          />
        ));
    } else if (currentStep.step === steps.length - 1) {
      return <Ending>{QuestionContext!.parseAnswers()}</Ending>;
    } else if (currentStep.step > 0) {
      return QuestionContext!
        .getQuestionsFromIndex(currentStep.step - 1)
        .map(({ name, description, ...inputValues }, idx) => (
          <Option
            key={idx}
            idx={idx}
            heading={name}
            paragraph={description}
            {...inputValues}
          />
        ));
    }
  };

  return <section className={styles.App_gridItem}>{renderItems()}</section>;
};
export default Content;
