import React from "react";
import { InputTypes } from "../typings";

import styles from "../styles/Option.module.scss";
import OptionHeading from "./OptionHeading";
import OptionParagraph from "./OptionParagraph";

type OptionInputTypes = {
  type: InputTypes | undefined;
  heading: string;
  paragraph: string;
  values?: string[];
  defaultValue?: string;
};

const OptionInput = ({
  type,
  heading,
  paragraph,
  values,
  defaultValue,
}: OptionInputTypes) => {
  const renderText = () => (
    <div>
      <OptionHeading>{heading}</OptionHeading>
      <OptionParagraph>{paragraph}</OptionParagraph>
    </div>
  );

  return type === "singleChoice" ? (
    <div className={styles.Option_singlechoice}>
      <div className={styles.Option_checkboxcontainer}>
        <input type="checkbox" className={styles.Option_checkbox} />
      </div>
      {renderText()}
    </div>
  ) : (
    <div>
      {renderText()}
      {values ? (
        <select defaultValue={defaultValue!} className={styles.Option_select}>
          {values.map((value, idx) => (
            <option key={idx}>{value}</option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export default OptionInput;
