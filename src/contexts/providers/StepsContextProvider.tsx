import React, { Component } from "react";
import { Steps, Step } from "../../typings";
import StepsContext from "../StepsContext";
import steps from "../../data/steps";

type StepsContextProviderProps = {
  children: any;
};

export type StepsContextProvidedState = {
  steps: Steps;
  currentStep: number;
  getStep: () => Step;
  nextStep: () => Step;
  previousStep: () => Step;
  getStepsCount: () => number;
};

export default class StepsContextProvider extends Component<
  StepsContextProviderProps,
  StepsContextProvidedState
> {
  public readonly state: StepsContextProvidedState = {
    steps: steps,
    currentStep: steps[0].step,
    getStep: this.getStep.bind(this),
    nextStep: this.nextStep.bind(this),
    previousStep: this.previousStep.bind(this),
    getStepsCount: this.getStepsCount.bind(this),
  };

  public getStep(): Step {
    return this.state.steps[this.state.currentStep];
  }

  public nextStep(): Step {
    if (this.state.currentStep < this.state.steps.length - 1) {
      this.setState((state) => ({
        currentStep: state.currentStep + 1,
      }));
    }
    return this.getStep();
  }

  public previousStep(): Step {
    if (this.state.currentStep > 0) {
      this.setState((state) => ({
        currentStep: state.currentStep - 1,
      }));
    }
    return this.getStep();
  }

  public getStepsCount(): number {
    return this.state.steps.length - 1;
  }

  public render() {
    return (
      <StepsContext.Provider value={this.state}>
        {this.props.children}
      </StepsContext.Provider>
    );
  }
}
