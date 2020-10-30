import React, { createContext } from "react";

import Sidebar from "./Sidebar";
import Content from "./Content";

import styles from "../styles/App.module.scss";

import QuestionDatabase from "../app/Questions";
import StepsDatabase from "../app/Steps";

const questionsInstance = new QuestionDatabase();
export const QuestionsContext = createContext<QuestionDatabase>(
  questionsInstance
);

const stepsInstance = new StepsDatabase();
export const StepsContext = createContext<StepsDatabase>(stepsInstance);

const App = () => (
  <QuestionsContext.Provider value={questionsInstance}>
    <div className={styles.App_container}>
      <main className={styles.App_grid}>
        <StepsContext.Provider value={stepsInstance}>
          <Sidebar />
          <Content />
        </StepsContext.Provider>
      </main>
    </div>
  </QuestionsContext.Provider>
);

export default App;
