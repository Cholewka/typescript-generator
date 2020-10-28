import { Question, Questions, Answers, Answer, ParsedAnswer } from "../typings";
import questions from "../data/questions";

export default class QuestionDatabase {
  private readonly questions: Questions = questions;
  private categories: string[] = [];

  private answers: Answers = [];

  constructor() {
    this.questions.forEach(({ key }) => {
      this.answers.push([]);
      this.categories.push(key);
    });
  }

  private checkIndexLength(index: number, length: number) {
    if (index! <= length) {
      return true;
    }
    throw new Error("You've set the wrong index.");
  }

  public getQuestions(): Questions {
    return this.questions;
  }

  public getQuestionsFromIndex(index: number): Question[] | boolean {
    if (!this.checkIndexLength(index, questions.length)) {
      return false;
    }
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
    if (!this.checkIndexLength(questionIndex, questions.length)) {
      return false;
    }
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

  public parseAnswers() {
    const parsedAnswer: ParsedAnswer = {};
    this.categories.forEach((value, key) => {
      parsedAnswer[value] = {};
      this.getAnswers()[key].forEach((answer: Answer) => {
        parsedAnswer[value][answer.name] = answer.value;
      });
    });
  }
}
