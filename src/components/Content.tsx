import React from "react";
import { QuestionsContext } from "./App";

import Option from "./Option";

import styles from "../styles/App.module.scss";

const Content = () => {
  const QuestionContext = React.useContext(QuestionsContext);

  return (
    <section className={styles.App_gridItem}>
      {QuestionContext.getPresets().map(({ name, description }, idx) => (
        <Option key={idx} heading={name} paragraph={description} />
      ))}
    </section>
  );
};
export default Content;
