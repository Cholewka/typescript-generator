import { Steps, StepEnum } from "../typings";

const steps: Steps = [
  {
    step: StepEnum.CHOOSING_PRESET,
    stepName: "Choosing preset",
    stepDescription:
      "Do you want to start creating a configuration file from a preset?",
  },
  {
    step: StepEnum.COMPILER_OPTIONS,
    stepName: "Compiler options",
    stepDescription:
      'Let\'s set the "compilerOptions" values. Hover over the options to get more informations about them.',
  },
];

export default steps;
