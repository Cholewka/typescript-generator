import React, { useState, Suspense } from "react";
import { Preset, Questions, Steps, Question } from "../typings";

import ChoosePreset, { ChoosePresetSettings } from "../steps/ChoosePreset";
import CompilerOptions, {
  CompilerOptionsSettings,
} from "../steps/CompilerOptions";
import Ending, { EndingSettings } from "../steps/Ending";

import questions from "../questions";

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [preset, setPreset] = useState<Preset>(Preset.UNDEFINED);
  const [options, updateOptions] = useState<Questions>(questions);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const previousStep = () => {
    if (currentStep === 0) return;
    setCurrentStep(currentStep - 1);
  };
  const setPresetMethod = (preset: Preset) => {
    setPreset(preset);
    let newArray: Questions = questions;
    const steps = [Steps.COMPILER_OPTIONS];
    for (let i = 0; i < steps.length; i++) {
      newArray[steps[i]].forEach((value: Question, index: number) => {
        let newValue: string | boolean = value.presets[preset];
        if (newValue === "true") newValue = true;
        if (newValue === "false") newValue = false;
        newArray[steps[i]][index].selectedValue = newValue;
      });
    }
    updateOptions(newArray);
  };

  const steps = [
    <ChoosePreset nextStep={nextStep} setPreset={setPresetMethod} />,
    <CompilerOptions
      preset={preset}
      options={options}
      updateOptions={updateOptions}
    />,
    <Ending questions={questions} />,
  ];

  const descriptions = [
    ChoosePresetSettings.description,
    CompilerOptionsSettings.description,
    EndingSettings.description,
  ];

  return (
    <div className="app-container">
      <main className="app-grid">
        <section className="app-grid-item app-side">
          <h2 className="section-heading">
            TypeScript configuration file creation process
          </h2>
          <p className="section-paragraph">{descriptions[currentStep]}</p>
          <hr className="section-divider" />
          <p className="section-step">
            Current step: {currentStep + 1}. out of {steps.length}
          </p>
          <progress
            className="section-progressbar"
            value={currentStep + 1}
            max={steps.length}
          />
          {currentStep > 0 ? (
            <React.Fragment>
              <hr className="section-divider" />
              <div className="section-links">
                <button onClick={previousStep}>Previous step</button>
                {currentStep < steps.length - 1 ? (
                  <button onClick={nextStep} className="primary">
                    Next step
                  </button>
                ) : null}
              </div>
            </React.Fragment>
          ) : null}
        </section>
        <Suspense fallback={<p>Loading!</p>}>{steps[currentStep]}</Suspense>
      </main>
    </div>
  );
}

export default App;
