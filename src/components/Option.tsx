import React from "react";

import OptionHeading from "./OptionHeading";
import OptionParagraph from "./OptionParagraph";

import styles from "../styles/Option.module.scss";

type OptionProps = {
  heading: string;
  paragraph: string;
  clickEvent?: () => void;
};

const Option = ({ heading, paragraph, clickEvent }: OptionProps) => (
  <div className={styles.Option_block} onClick={clickEvent}>
    <OptionHeading>{heading}</OptionHeading>
    <OptionParagraph>{paragraph}</OptionParagraph>
  </div>
);

export default Option;
