import React from "react";
import styles from "../styles/Sidebar.module.scss";

import StepsContext from "../contexts/StepsContext";

import steps from "../data/steps";

const SidebarList = () => {
  const StepContext = React.useContext(StepsContext);
  const currentStep = StepContext!.currentStep;

  function isAlreadyDone(value: number) {
    if (value <= currentStep) {
      return true;
    }
    return false;
  }

  return (
    <ul className={styles.SidebarList_list}>
      {steps.map((step, idx) => (
        <li
          key={idx}
          className={isAlreadyDone(idx) ? styles.SidebarList_done : ""}
        >
          {step.stepName}
        </li>
      ))}
    </ul>
  );
};

export default SidebarList;
