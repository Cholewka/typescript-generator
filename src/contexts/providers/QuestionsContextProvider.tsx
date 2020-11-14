import React, { Component } from "react";
import {
  Question,
  Questions,
  Answers,
  Answer,
  ParsedAnswer,
  Preset,
  Presets,
} from "../../typings";
import QuestionsContext from "../QuestionsContext";
import questions from "../../data/questions";
import presets from "../../data/presets";

type QuestionsContextProviderProps = {
  children: any;
};

export type QuestionsContextProvidedState = {
  questions: Questions;
  presets: Presets;
  categories: string[];
  answers: Answers;
  selectedPreset: Preset | null;
  getPresets: () => Presets;
  getPresetForQuestion: (
    questionCategoryIndex: number,
    questionIndex: number
  ) => string;
  setPreset: (preset: Preset) => void;
  setPresetsInAnswers: (preset: Preset) => void;
  getSelectedPreset: () => Preset | null;
  getQuestions: () => Questions;
  getFieldNameCategory: (fieldName: string) => string;
  getQuestionIndex: (fieldName: string) => number;
  getQuestionsFromIndex: (index: number) => Question[];
  getAnswers: () => Answers;
  sendNewAnswer: (
    questionIndex: number,
    fieldName: string,
    answer: string | boolean
  ) => void | boolean | string;
  parseAnswers: () => string;
};

export default class QuestionsContextProvider extends Component<
  QuestionsContextProviderProps,
  QuestionsContextProvidedState
> {
  public readonly state: QuestionsContextProvidedState = {
    questions: questions,
    presets: presets,
    categories: [],
    answers: [],
    selectedPreset: null,
    getPresets: this.getPresets.bind(this),
    getPresetForQuestion: this.getPresetForQuestion.bind(this),
    setPreset: this.setPreset.bind(this),
    setPresetsInAnswers: this.setPresetsInAnswers.bind(this),
    getSelectedPreset: this.getSelectedPreset.bind(this),
    getQuestions: this.getQuestions.bind(this),
    getFieldNameCategory: this.getFieldNameCategory.bind(this),
    getQuestionIndex: this.getQuestionIndex.bind(this),
    getQuestionsFromIndex: this.getQuestionsFromIndex.bind(this),
    getAnswers: this.getAnswers.bind(this),
    sendNewAnswer: this.sendNewAnswer.bind(this),
    parseAnswers: this.parseAnswers.bind(this),
  };

  constructor(props: any) {
    super(props);
    const endingAnswersArray = this.state.answers;
    const endingCatagoriesArray = this.state.categories;
    const alreadyUsedKeys: string[] = [];
    this.state.questions.forEach(({ key }) => {
      if (alreadyUsedKeys.find((value) => value === key)) return;
      endingAnswersArray.push([]);
      endingCatagoriesArray.push(key);
      alreadyUsedKeys.push(key);
    });
    this.state.answers = endingAnswersArray;
    this.state.categories = endingCatagoriesArray;
  }

  public getPresets(): Presets {
    return this.state.presets;
  }

  public getPresetForQuestion(
    questionCategoryIndex: number,
    questionIndex: number,
    preset?: Preset
  ): string {
    return this.state.questions[questionCategoryIndex].values[questionIndex]
      .presets[preset || this.state.selectedPreset!];
  }

  public setPreset(preset: Preset): void {
    this.setState({
      selectedPreset: preset,
    });
  }

  private getDefaultValueForQuestion(
    questionCategoryIndex: number,
    questionIndex: number
  ): string {
    return this.state.questions[questionCategoryIndex].values[questionIndex]
      .defaultValue;
  }

  public setPresetsInAnswers(preset: Preset): void {
    this.state.categories.forEach((_, key) => {
      this.state.questions.forEach(({ values }, idx) => {
        values.forEach(({ name }, questionKey) => {
          const selectedPreset = this.getPresetForQuestion(
            idx,
            questionKey,
            preset
          );
          let newPreset: string | boolean = selectedPreset;
          if (selectedPreset === "true") newPreset = true;
          if (selectedPreset === "false") newPreset = false;
          if (
            selectedPreset === this.getDefaultValueForQuestion(idx, questionKey)
          )
            return;
          this.sendNewAnswer(key, name, newPreset);
        });
      });
    });
  }

  public getSelectedPreset(): Preset | null {
    return this.state.selectedPreset;
  }

  public getQuestions(): Questions {
    return this.state.questions;
  }

  public getFieldNameCategory(fieldName: string): string {
    const question = this.state.questions.find(({ values }) =>
      values.find(({ name }) => name === fieldName)
    );
    if (question) return question.key;
    return "compilerOptions";
  }

  public getQuestionIndex(fieldName: string): number {
    return this.state.categories.findIndex(
      (value) => value === this.getFieldNameCategory(fieldName)
    );
  }

  public getQuestionsFromIndex(index: number): Question[] {
    return this.state.questions[index].values;
  }

  public getAnswers(): Answers {
    return this.state.answers;
  }

  public sendNewAnswer(
    questionIndex: number,
    fieldName: string,
    answer: string | boolean
  ): void | boolean | string {
    const alreadyAnsweredField = this.state.answers[questionIndex].find(
      ({ name }) => name === fieldName
    );
    if (alreadyAnsweredField) {
      return (alreadyAnsweredField.value = answer);
    }
    const endingAnswersField = this.state.answers;
    endingAnswersField[questionIndex].push({
      name: fieldName,
      value: answer,
    });
    this.setState({
      answers: endingAnswersField,
    });
  }

  public parseAnswers(): string {
    const parsedAnswer: ParsedAnswer = {};
    this.state.categories.forEach((value, key) => {
      parsedAnswer[value] = {};
      this.getAnswers()[key].forEach((answer: Answer) => {
        parsedAnswer[value][answer.name] = answer.value;
      });
    });
    return JSON.stringify(parsedAnswer, null, 2);
  }

  public render() {
    return (
      <QuestionsContext.Provider value={this.state}>
        {this.props.children}
      </QuestionsContext.Provider>
    );
  }
}
