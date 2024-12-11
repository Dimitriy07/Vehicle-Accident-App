import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import { CanvasType } from "../types/forms/CanvasType";
import CanvasDraw from "react-canvas-draw";
import useCanvasHandler from "../hooks/useCanvasHandler";

const CanvasContext = createContext<CanvasType | null>(null);

function CanvasProvider({ children }: PropsWithChildren) {
  const [driverDamageVeh, setDriverDamageVeh] = useState("");
  const [tpDamageVeh, setTpDamageVeh] = useState("");
  const [schemeBeforeAccident, setSchemeBeforeAccident] = useState("");
  const [schemeAfterAccident, setSchemeAfterAccident] = useState("");
  const [driverSignature, setDriverSignature] = useState("");

  //get canvas html elements for damages
  const driverVehCanvasRef = useRef<CanvasDraw | null>(null);
  const tpVehCanvasRef = useRef<CanvasDraw | null>(null);

  // handle Canvas Damage vehicles and pass it for saving canvas
  const handleDriverDamageCanvas = useCanvasHandler(setDriverDamageVeh);
  const handleTpDamageCanvas = useCanvasHandler(setTpDamageVeh);

  return (
    <CanvasContext.Provider
      value={{
        driverDamageVeh,
        tpDamageVeh,
        schemeBeforeAccident,
        schemeAfterAccident,
        driverSignature,
        driverVehCanvasRef,
        tpVehCanvasRef,
        setDriverDamageVeh,
        setTpDamageVeh,
        setSchemeBeforeAccident,
        setSchemeAfterAccident,
        setDriverSignature,
        handleDriverDamageCanvas,
        handleTpDamageCanvas,
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
