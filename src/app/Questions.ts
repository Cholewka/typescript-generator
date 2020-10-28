import {
  Question,
  Questions,
  Answers,
  Answer,
  ParsedAnswer,
  Preset,
  Presets,
} from "../typings";

import questions from "../data/questions";
import presets from "../data/presets";

export default class QuestionDatabase {
  private readonly questions: Questions = questions;
  private readonly presets: Presets = presets;

  private categories: string[] = [];

  private answers: Answers = [];

  private selectedPreset: Preset | null = null;

  constructor() {
    this.questions.forEach(({ key }) => {
      this.answers.push([]);
      this.categories.push(key);
    });
  }

  public getPresets(): Presets {
    return this.presets;
  }

  public setPreset(preset: Preset): void {
    this.selectedPreset = preset;
  }

  public getSelectedPreset(): Preset | null {
    return this.selectedPreset;
  }

  public getQuestions(): Questions {
    return this.questions;
  }

  public getQuestionsFromIndex(index: number): Question[] | boolean {
    return this.questions[index].values;
  }

  public getAnswers(): Answers {
    return this.answers;
  }

  public sendNewAnswer(
    questionIndex: number,
    fieldName: string,
    answer: string | boolean
  ): void | boolean | string {
    const alreadyAnsweredField = this.answers[questionIndex].find(
      ({ name }) => name === fieldName
    );
    if (alreadyAnsweredField) {
      return (alreadyAnsweredField.value = answer);
    }
    this.answers[questionIndex].push({
      name: fieldName,
      value: answer,
    });
  }

  public parseAnswers(): ParsedAnswer {
    const parsedAnswer: ParsedAnswer = {};
    this.categories.forEach((value, key) => {
      parsedAnswer[value] = {};
      this.getAnswers()[key].forEach((answer: Answer) => {
        parsedAnswer[value][answer.name] = answer.value;
      });
    });
    return parsedAnswer;
  }
}
