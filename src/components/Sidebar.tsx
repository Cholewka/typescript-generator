import React from "react";

import StepsContext from "../contexts/StepsContext";

import SidebarHeading from "./SidebarHeading";
import SidebarParagraph from "./SidebarParagraph";
import SidebarProgressbar from "./SidebarProgressbar";
import SidebarButtons from "./SidebarButtons";

import styles from "../styles/App.module.scss";

const Sidebar = () => {
  const StepContext = React.useContext(StepsContext);
  const currentStep = StepContext!.getStep();

  return (
    <section className={`${styles.App_gridItem} ${styles.App_sideItem}`}>
      <SidebarHeading>{currentStep.stepName}</SidebarHeading>
      <SidebarParagraph>{currentStep.stepDescription}</SidebarParagraph>
      <SidebarProgressbar />
      <SidebarButtons
        showPreviousButton={currentStep.step > 0}
        showNextButton={
          currentStep.step !== 0 &&
          currentStep.step < StepContext!.getStepsCount()
        }
      />
    </section>
  );
};

export default Sidebar;
