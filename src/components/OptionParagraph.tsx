import React from "react";
import styles from "../styles/Option.module.scss";

type OptionParagraphTypes = {
  children: string | JSX.Element;
};

const OptionParagraph = ({ children }: OptionParagraphTypes) => (
  <p className={styles.Option_paragraph}>{children}</p>
);

export default OptionParagraph;
