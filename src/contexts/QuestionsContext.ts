import { createContext } from "react";
import { QuestionsContextProvidedState } from "./providers/QuestionsContextProvider";

const QuestionsContext = createContext<QuestionsContextProvidedState | null>(
  null
);

export default QuestionsContext;
