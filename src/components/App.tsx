import React, { createContext } from "react";
import { Steps } from "../typings";

import Sidebar from "./Sidebar";
import Content from "./Content";

import styles from "../styles/App.module.scss";

import QuestionDatabase from "../app/Questions";

import steps from "../data/steps";

const questionsInstance = new QuestionDatabase();
export const QuestionsContext = createContext<QuestionDatabase>(
  questionsInstance
);

export const StepsContext = createContext<Steps>(steps);

const App = () => (
  <QuestionsContext.Provider value={questionsInstance}>
    <div className={styles.App_container}>
      <main className={styles.App_grid}>
        <StepsContext.Provider value={steps}>
          <Sidebar />
          <Content />
        </StepsContext.Provider>
      </main>
    </div>
  </QuestionsContext.Provider>
);

export default App;
