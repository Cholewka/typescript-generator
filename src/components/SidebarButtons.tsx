import React from "react";
import styles from "../styles/Sidebar.module.scss";

import StepsContext from "../contexts/StepsContext";

type SidebarButtonsProps = {
  showPreviousButton: boolean;
  showNextButton: boolean;
};

const SidebarButtons = ({
  showPreviousButton,
  showNextButton,
}: SidebarButtonsProps) => {
  const StepContext = React.useContext(StepsContext);

  function handleClick(action: "previous" | "next"): void {
    if (action === "previous") StepContext!.previousStep();
    if (action === "next") StepContext!.nextStep();
  }

  const renderDivider = () =>
    showPreviousButton || showNextButton ? (
      <hr className={styles.SidebarProgressbar_divider} />
    ) : null;
  const renderPreviousButton = () =>
    showPreviousButton ? (
      <button
        className={styles.SidebarButtons_button}
        onClick={() => handleClick("previous")}
      >
        &laquo; Previous step
      </button>
    ) : null;
  const renderNextButton = () =>
    showNextButton ? (
      <button
        className={styles.SidebarButtons_button}
        onClick={() => handleClick("next")}
      >
        Next step &raquo;
      </button>
    ) : null;
  return (
    <React.Fragment>
      {renderDivider()}
      <div className={styles.SidebarButtons_buttonlist}>
        {renderPreviousButton()}
        {renderNextButton()}
      </div>
    </React.Fragment>
  );
};

export default SidebarButtons;
