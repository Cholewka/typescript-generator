import React from "react";
import { StepEnum } from "../typings";

import { QuestionsContext, StepsContext } from "./App";

import Option from "./Option";

import styles from "../styles/App.module.scss";

const Content = () => {
  const QuestionContext = React.useContext(QuestionsContext);
  const StepContext = React.useContext(StepsContext);

  const renderItems = () => {
    const currentStep = StepContext.getStep();
    if (currentStep.step === StepEnum.CHOOSING_PRESET) {
      return QuestionContext.getPresets().map(({ name, description }, idx) => (
        <Option key={idx} heading={name} paragraph={description} />
      ));
    }
  };

  return <section className={styles.App_gridItem}>{renderItems()}</section>;
};
export default Content;
