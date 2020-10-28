import React from "react";

import Sidebar from "./Sidebar";
import Content from "./Content";

import styles from "../styles/App.module.scss";

import QuestionDatabase from "../app/Questions";

const QuestionDatabaseInstance = new QuestionDatabase();

export const QuestionsContext = React.createContext<QuestionDatabase>(
  QuestionDatabaseInstance
);

const App = () => (
  <QuestionsContext.Provider value={QuestionDatabaseInstance}>
    <div className={styles.App_container}>
      <main className={styles.App_grid}>
        <Sidebar />
        <Content />
      </main>
    </div>
  </QuestionsContext.Provider>
);

export default App;
