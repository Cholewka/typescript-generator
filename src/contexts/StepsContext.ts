import { createContext } from "react";
import { StepsContextProvidedState } from "./providers/StepsContextProvider";

const StepsContext = createContext<StepsContextProvidedState | null>(null);

export default StepsContext;
