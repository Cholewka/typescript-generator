import React from "react";

import Sidebar from "./Sidebar";
import Content from "./Content";

import styles from "../styles/App.module.scss";

import QuestionsContextProvider from "../contexts/providers/QuestionsContextProvider";
import StepsContextProvider from "../contexts/providers/StepsContextProvider";

const App = () => (
  <QuestionsContextProvider>
    <div className={styles.App_container}>
      <main className={styles.App_grid}>
        <StepsContextProvider>
          <Sidebar />
          <Content />
        </StepsContextProvider>
      </main>
    </div>
  </QuestionsContextProvider>
);

export default App;
