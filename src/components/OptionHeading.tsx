import React from "react";
import styles from "../styles/Option.module.scss";

type OptionHeadingTypes = {
  children: string;
};

const OptionHeading = ({ children }: OptionHeadingTypes) => (
  <h2 className={styles.Option_heading}>{children}</h2>
);

export default OptionHeading;
