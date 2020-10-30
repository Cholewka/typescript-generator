import { Steps, Step } from "../typings";

import steps from "../data/steps";

export default class StepDatabase {
  private readonly steps: Steps = steps;
  private currentStep: Step = 0;

  public getStep(): Step {
    return this.currentStep;
  }

  public nextStep(): void {
    if (this.currentStep >= this.steps.length) return;
    this.currentStep++;
  }

  public previousStep(): void {
    if (this.currentStep === 0) return;
    this.currentStep--;
  }
}
