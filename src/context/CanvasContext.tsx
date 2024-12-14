import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import { CanvasType } from "../types/forms/CanvasType";
import CanvasDraw from "react-canvas-draw";
import SignatureCanvas from "react-signature-canvas";

const CanvasContext = createContext<CanvasType | null>(null);

function CanvasProvider({ children }: PropsWithChildren) {
  const [driverDamageVeh, setDriverDamageVeh] = useState("");
  const [driverDamageVehUrl, setDriverDamageVehUrl] = useState("");
  const [tpDamageVeh, setTpDamageVeh] = useState("");
  const [tpDamageVehUrl, setTpDamageVehUrl] = useState("");
  const [schemeBeforeAccident, setSchemeBeforeAccident] = useState("");
  const [schemeBeforeAccidentUrl, setSchemeBeforeAccidentUrl] = useState("");
  const [schemeAfterAccident, setSchemeAfterAccident] = useState("");
  const [schemeAfterAccidentUrl, setSchemeAfterAccidentUrl] = useState("");
  const [driverSignature, setDriverSignature] = useState("");

  //get canvas html elements for damages
  const driverVehCanvasRef = useRef<CanvasDraw | null>(null);
  const tpVehCanvasRef = useRef<CanvasDraw | null>(null);

  //get canvas html elements for schema
  const schemaBeforeCanvasRef = useRef<CanvasDraw | null>(null);
  const schemaAfterCanvasRef = useRef<CanvasDraw | null>(null);

  //get canvas html elements for signature
  const signatureRef = useRef<SignatureCanvas | null>(null);

  return (
    <CanvasContext.Provider
      value={{
        driverDamageVeh,
        driverDamageVehUrl,
        tpDamageVeh,
        tpDamageVehUrl,
        schemeBeforeAccident,
        schemeBeforeAccidentUrl,
        schemeAfterAccident,
        schemeAfterAccidentUrl,
        driverSignature,
        driverVehCanvasRef,
        tpVehCanvasRef,
        schemaBeforeCanvasRef,
        schemaAfterCanvasRef,
        signatureRef,
        setDriverDamageVeh,
        setDriverDamageVehUrl,
        setTpDamageVeh,
        setTpDamageVehUrl,
        setSchemeBeforeAccident,
        setSchemeBeforeAccidentUrl,
        setSchemeAfterAccident,
        setSchemeAfterAccidentUrl,
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
