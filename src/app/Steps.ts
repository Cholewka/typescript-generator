import { Steps, Step } from "../typings";

import steps from "../data/steps";

export default class StepDatabase {
  private readonly steps: Steps = steps;
  private currentStep: number = steps[0].step;

  public getStep(): Step {
    return this.steps[this.currentStep];
  }

  public nextStep(): Step {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
    return this.getStep();
  }

  public previousStep(): Step {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
    return this.getStep();
  }
}
