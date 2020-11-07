import { Steps, StepEnum } from "../typings";

const steps: Steps = [
  {
    step: StepEnum.CHOOSING_PRESET,
    stepName: "Choosing preset",
    stepDescription:
      "Do you want to start creating a configuration file from a preset?",
  },
  {
    step: StepEnum.SELECTIONS,
    stepName: "Selections",
    stepDescription: "Let's set the target and module options.",
  },
  {
    step: StepEnum.STRICT_CHECKS,
    stepName: "Strict checks",
    stepDescription: "Let's see what parts of code will be strict-checked.",
  },
  {
    step: StepEnum.MODULE_RESOLUTIONS,
    stepName: "Module resolutions",
    stepDescription: "Let's set the module resolutions.",
  },
  {
    step: StepEnum.ADVANCED,
    stepName: "Advanced options",
    stepDescription: "Let's dive in into the advances.",
  },
  {
    step: StepEnum.ENDING,
    stepName: "Ending",
    stepDescription:
      "Your journey ends here. You can now get your generated code!",
  },
];

export default steps;
