import React from "react";

type CompilerOptionProps = {
  keyString: string;
  presetValue: string;
  value: string;
  setValue: (newValue: string) => void;
};

function CompilerOption({
  keyString,
  presetValue,
  value,
  setValue,
}: CompilerOptionProps) {
  let isPresetOption: boolean = false;
  if (value === "None") return null;
  if (value === presetValue) {
    isPresetOption = true;
  }
  return (
    <div key={keyString}>
      <input
        type="radio"
        id={keyString}
        value={keyString}
        defaultChecked={isPresetOption}
        onSelect={() => {
          setValue(value);
        }}
      />
      <label className="block-label" htmlFor={keyString}>
        {value}
      </label>
    </div>
  );
}

export default CompilerOption;
