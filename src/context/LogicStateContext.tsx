import { createContext, PropsWithChildren, useContext, useState } from "react";
import { LogicStateType } from "../types/forms/LogicStateType";

const LogicStateContext = createContext<LogicStateType | null>(null);

function LogicStateProvider({ children }: PropsWithChildren) {
  ////// Steps state
  const [isStartAccident, setIsStartAccident] = useState<boolean>(false);
  const [isPhotoDetailsDone, setIsPhotoDetailsDone] = useState<boolean>(false);
  const [isTpDetailsDone, setIsTpDetailsDone] = useState<boolean>(false);
  const [isCallManagerDone, setIsCallManagerDone] = useState<boolean>(false);
  const [isStepsStarts, setIsStepsStarts] = useState<boolean>(false);
  const [isStepsDone, setIsStepsDone] = useState<boolean>(false);
  const [isDriverFormStarts, setIsDriverFormStarts] = useState(false);
  const [isVehDamageCanvasSave, setIsVehDamageCanvasSave] = useState(false);
  const [isSchemaCanvasSave, setIsSchemaCanvasSave] = useState(false);

  return (
    <LogicStateContext.Provider
      value={{
        isStartAccident,
        isPhotoDetailsDone,
        isTpDetailsDone,
        isCallManagerDone,
        isStepsStarts,
        isStepsDone,
        isDriverFormStarts,
        isVehDamageCanvasSave,
        isSchemaCanvasSave,
        setIsStartAccident,
        setIsPhotoDetailsDone,
        setIsTpDetailsDone,
        setIsCallManagerDone,
        setIsStepsStarts,
        setIsStepsDone,
        setIsDriverFormStarts,
        setIsVehDamageCanvasSave,
        setIsSchemaCanvasSave,
      }}
    >
      {children}
    </LogicStateContext.Provider>
  );
}

function useLogicState() {
  const context = useContext(LogicStateContext);
  if (!context)
    throw new Error("LogicState Context used outside LogicState Provider");
  return context;
}

export { LogicStateProvider, useLogicState };
