import React from "react";

import StepsContext from "../contexts/StepsContext";

import SidebarHeading from "./SidebarHeading";
import SidebarParagraph from "./SidebarParagraph";

import styles from "../styles/App.module.scss";

const Sidebar = () => {
  const StepContext = React.useContext(StepsContext);
  const currentStep = StepContext!.getStep();

  return (
    <section className={`${styles.App_gridItem} ${styles.App_sideItem}`}>
      <SidebarHeading>{currentStep.stepName}</SidebarHeading>
      <SidebarParagraph>{currentStep.stepDescription}</SidebarParagraph>
    </section>
  );
};

export default Sidebar;
