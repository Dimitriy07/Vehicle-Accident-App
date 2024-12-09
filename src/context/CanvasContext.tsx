import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CanvasType } from "../types/forms/CanvasType";

const CanvasContext = createContext<CanvasType | null>(null);

function CanvasProvider({ children }: PropsWithChildren) {
  const [driverDamageVeh, setDriverDamageVeh] = useState("");
  const [tpDamageVeh, setTpDamageVeh] = useState("");
  const [schemeBeforeAccident, setSchemeBeforeAccident] = useState("");
  const [schemeAfterAccident, setSchemeAfterAccident] = useState("");
  const [driverSignature, setDriverSignature] = useState("");

  return (
    <CanvasContext.Provider
      value={{
        driverDamageVeh,
        tpDamageVeh,
        schemeBeforeAccident,
        schemeAfterAccident,
        driverSignature,
        setDriverDamageVeh,
        setTpDamageVeh,
        setSchemeBeforeAccident,
        setSchemeAfterAccident,
        setDriverSignature,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
}

function useCanvas() {
  const context = useContext(CanvasContext);
  if (!context)
    throw new Error("Canvas Context used outside LogicState Provider");
  return context;
}

export { CanvasProvider, useCanvas };
