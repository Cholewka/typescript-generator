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
  setPreset: (preset: Preset) => void;
  getSelectedPreset: () => Preset | null;
  getQuestions: () => Questions;
  getQuestionsFromIndex: (index: number) => Question[] | boolean;
  getAnswers: () => Answers;
  sendNewAnswer: (
    questionIndex: number,
    fieldName: string,
    answer: string | boolean
  ) => void | boolean | string;
  parseAnswers: () => ParsedAnswer;
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
    getPresets: this.getPresets,
    setPreset: this.setPreset,
    getSelectedPreset: this.getSelectedPreset,
    getQuestions: this.getQuestions,
    getQuestionsFromIndex: this.getQuestionsFromIndex,
    getAnswers: this.getAnswers,
    sendNewAnswer: this.sendNewAnswer,
    parseAnswers: this.parseAnswers,
  };

  constructor(props: any) {
    super(props);
    const endingAnswersArray = this.state.answers;
    const endingCatagoriesArray = this.state.categories;
    this.state.questions.forEach(({ key }) => {
      endingAnswersArray.push([]);
      endingCatagoriesArray.push(key);
    });
    this.setState({
      answers: endingAnswersArray,
      categories: endingCatagoriesArray,
    });
    this.state.getPresets = this.getPresets.bind(this);
  }

  public getPresets(): Presets {
    return this.state.presets;
  }

  public setPreset(preset: Preset): void {
    this.state.selectedPreset = preset;
  }

  public getSelectedPreset(): Preset | null {
    return this.state.selectedPreset;
  }

  public getQuestions(): Questions {
    return this.state.questions;
  }

  public getQuestionsFromIndex(index: number): Question[] | boolean {
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

  public parseAnswers(): ParsedAnswer {
    const parsedAnswer: ParsedAnswer = {};
    this.state.categories.forEach((value, key) => {
      parsedAnswer[value] = {};
      this.getAnswers()[key].forEach((answer: Answer) => {
        parsedAnswer[value][answer.name] = answer.value;
      });
    });
    return parsedAnswer;
  }

  public render() {
    return (
      <QuestionsContext.Provider value={this.state}>
        {this.props.children}
      </QuestionsContext.Provider>
    );
  }
}
