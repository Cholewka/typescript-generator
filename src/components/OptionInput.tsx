import React from "react";
import styles from "../styles/Option.module.scss";

type OptionInputProps = {
  idx: any;
  value: string;
  isDefault: boolean;
};

const OptionInput = ({ value, isDefault }: OptionInputProps) => {
  const generatedId: string = `${value}_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
  return (
    <div>
      <input type="radio" id={generatedId} defaultChecked={isDefault} />
      <label className={styles.Option_label} htmlFor={generatedId}>
        {value}
      </label>
    </div>
  );
};

export default OptionInput;
