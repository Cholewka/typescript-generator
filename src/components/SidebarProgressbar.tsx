import React from "react";
import styles from "../styles/Sidebar.module.scss";

import StepsContext from "../contexts/StepsContext";

const SidebarProgressbar = () => {
  const StepContext = React.useContext(StepsContext);
  const currentStep = StepContext!.currentStep;
  const stepsCount = StepContext!.getStepsCount();
  return (
    <React.Fragment>
      <hr className={styles.SidebarProgressbar_divider} />
      <p className={styles.SidebarProgressbar_paragraph}>
        Current step: {currentStep + 1}. out of {stepsCount + 1}
      </p>
      <progress
        className={styles.SidebarProgressbar_progressbar}
        value={currentStep}
        max={stepsCount}
      />
    </React.Fragment>
  );
};

export default SidebarProgressbar;
