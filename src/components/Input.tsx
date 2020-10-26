import React from "react";
import { Questions } from "../typings";

type InputProps = {
  keyString: string;
  presetValue: string;
  value: string;
  selectedValue: string | boolean | null;
  setValue: (newValue: string) => void;
  hasChanged: boolean;
  setHasChanged: React.Dispatch<React.SetStateAction<boolean>>;
  updateOption: (
    options: Questions,
    updateOptions: React.Dispatch<React.SetStateAction<Questions>>,
    currentStep: string,
    currentInput: number,
    selectedValue: string,
    presetValue: string
  ) => void;
  updateOptions: React.Dispatch<React.SetStateAction<Questions>>;
  currentStep: string;
  options: Questions;
  currentInput: number;
};

function Input({
  keyString,
  presetValue,
  value,
  selectedValue,
  setValue,
  hasChanged,
  setHasChanged,
  updateOption,
  updateOptions,
  currentStep,
  options,
  currentInput,
}: InputProps) {
  let isPresetOption: boolean = false;
  let isSelected: boolean = false;
  if (value === "None") return null;
  if (value === selectedValue) isSelected = true;
  if (value === presetValue) isPresetOption = true;
  function handleInputClick() {
    setValue(value);
    setHasChanged(true);
    updateOption(
      options,
      updateOptions,
      currentStep,
      currentInput,
      value,
      presetValue
    );
  }
  return (
    <div key={keyString} onClick={handleInputClick}>
      <input
        type="radio"
        id={keyString}
        value={keyString}
        defaultChecked={
          isSelected ? true : !hasChanged ? isPresetOption : false
        }
      />
      <label className="block-label" htmlFor={keyString}>
        {value}
      </label>
    </div>
  );
}

export default Input;
