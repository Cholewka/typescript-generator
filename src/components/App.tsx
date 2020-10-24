import React, { useState, Suspense } from "react";
import { Preset } from "../typings";

import ChoosePreset, { ChoosePresetSettings } from "../steps/ChoosePreset";
import CompilerOptions, {
  CompilerOptionsSettings,
} from "../steps/CompilerOptions";

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [preset, setPreset] = useState<Preset>(Preset.UNDEFINED);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const previousStep = () => {
    if (currentStep === 0) return;
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    <ChoosePreset nextStep={nextStep} setPreset={setPreset} />,
    <CompilerOptions preset={preset} />,
  ];

  const descriptions = [
    ChoosePresetSettings.description,
    CompilerOptionsSettings.description,
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
