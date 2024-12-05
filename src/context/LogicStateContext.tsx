import { createContext, PropsWithChildren, useContext, useState } from "react";
import { LogicStateType } from "../types/forms/LogicStateType";

const LogicStateContext = createContext<LogicStateType | null>(null);

function LogicStateProvider({ children }: PropsWithChildren) {
  ////// Steps state
  const [startAccident, setStartAccident] = useState<boolean>(false);
  const [photoDetailsDone, setPhotoDetails] = useState<boolean>(false);
  const [tpDetailsDone, setTpDetails] = useState<boolean>(false);
  const [callManagerDone, setCallManager] = useState<boolean>(false);
  const [steps, setSteps] = useState<boolean>(false);
  const [stepsDone, setStepsDone] = useState<boolean>(false);
  return (
    <LogicStateContext.Provider
      value={{
        startAccident,
        photoDetailsDone,
        tpDetailsDone,
        callManagerDone,
        steps,
        stepsDone,
        setStartAccident,
        setPhotoDetails,
        setTpDetails,
        setCallManager,
        setSteps,
        setStepsDone,
      }}
    >
      {children}
    </LogicStateContext.Provider>
  );
}

function useLogicState() {
  const context = useContext(LogicStateContext);
  if (context === undefined)
    throw new Error("LogicState Context used outside LogicState Provider");
  return context;
}

export { LogicStateProvider, useLogicState };
