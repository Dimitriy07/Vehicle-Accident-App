import CanvasDraw from "react-canvas-draw";
import SignatureCanvas from "react-signature-canvas";

export interface CanvasType {
  driverSignature: string;
  driverDamageVeh: string;
  driverDamageVehUrl: string;
  tpDamageVeh: string;
  tpDamageVehUrl: string;
  schemeBeforeAccident: string;
  schemeBeforeAccidentUrl: string;
  schemeAfterAccident: string;
  schemeAfterAccidentUrl: string;
  driverVehCanvasRef: React.RefObject<CanvasDraw>;
  tpVehCanvasRef: React.RefObject<CanvasDraw>;
  schemaBeforeCanvasRef: React.RefObject<CanvasDraw>;
  schemaAfterCanvasRef: React.RefObject<CanvasDraw>;
  signatureRef: React.RefObject<SignatureCanvas>;
  setDriverDamageVeh: (value: string) => void;
  setDriverDamageVehUrl: (value: string) => void;
  setTpDamageVeh: (value: string) => void;
  setTpDamageVehUrl: (value: string) => void;
  setSchemeBeforeAccident: (value: string) => void;
  setSchemeBeforeAccidentUrl: (value: string) => void;
  setSchemeAfterAccident: (value: string) => void;
  setSchemeAfterAccidentUrl: (value: string) => void;
  setDriverSignature: (value: string) => void;
}
