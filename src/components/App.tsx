import React, { createContext } from "react";

import Sidebar from "./Sidebar";
import Content from "./Content";

import styles from "../styles/App.module.scss";

import QuestionsContextProvider from "../contexts/providers/QuestionsContextProvider";
import StepsDatabase from "../app/Steps";

const stepsInstance = new StepsDatabase();
export const StepsContext = createContext<StepsDatabase>(stepsInstance);

const App = () => (
  <QuestionsContextProvider>
    <div className={styles.App_container}>
      <main className={styles.App_grid}>
        <StepsContext.Provider value={stepsInstance}>
          <Sidebar />
          <Content />
        </StepsContext.Provider>
      </main>
    </div>
  </QuestionsContextProvider>
);

export default App;
