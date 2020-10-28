import React from "react";

import OptionHeading from "./OptionHeading";
import OptionParagraph from "./OptionParagraph";

import styles from "../styles/Option.module.scss";

type OptionProps = {
  heading: string;
  paragraph: string;
};

const Option = ({ heading, paragraph }: OptionProps) => (
  <div className={styles.Option_block}>
    <OptionHeading>{heading}</OptionHeading>
    <OptionParagraph>{paragraph}</OptionParagraph>
  </div>
);

export default Option;
