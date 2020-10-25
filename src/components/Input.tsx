import React from "react";

type InputProps = {
  keyString: string;
  presetValue: string;
  value: string;
  selectedValue: string | boolean | null;
  setValue: (newValue: string) => void;
  hasChanged: boolean;
  setHasChanged: React.Dispatch<React.SetStateAction<boolean>>;
};

function Input({
  keyString,
  presetValue,
  value,
  selectedValue,
  setValue,
  hasChanged,
  setHasChanged,
}: InputProps) {
  let isPresetOption: boolean = false;
  let isSelected: boolean = false;
  if (value === "None") return null;
  if (value === selectedValue) isSelected = true;
  if (value === presetValue) isPresetOption = true;
  function handleInputClick() {
    setValue(value);
    setHasChanged(true);
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
