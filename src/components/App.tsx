import React, { useState, Suspense } from "react";
import { Preset } from "../typings";

import ChoosePreset from "./steps/ChoosePreset";

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [preset, setPreset] = useState<Preset>(0);

  const handleStepChange = () => {
    setCurrentStep(currentStep + 1);
  };

  const steps = [
    <ChoosePreset nextStep={handleStepChange} setPreset={setPreset} />,
  ];

  return (
    <div className="app-container">
      <main className="app-grid">
        <section className="app-grid-item app-side">
          <h2 className="section-heading">
            TypeScript configuration file creation process
          </h2>
          <p className="section-paragraph">
            Do you want to start creating a configuration file from a preset?
          </p>
        </section>
        <Suspense fallback={<p>Loading!</p>}>{steps[currentStep]}</Suspense>
        <button onClick={() => console.log(currentStep, preset)}>
          Sprawdź step i preset
        </button>
      </main>
    </div>
  );
}

export default App;
