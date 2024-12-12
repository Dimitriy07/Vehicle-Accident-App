import CanvasDraw from "react-canvas-draw";
import SignatureCanvas from "react-signature-canvas";

export interface CanvasType {
  driverSignature: string;
  driverDamageVeh: string;
  tpDamageVeh: string;
  schemeBeforeAccident: string;
  schemeAfterAccident: string;
  driverVehCanvasRef: React.RefObject<CanvasDraw>;
  tpVehCanvasRef: React.RefObject<CanvasDraw>;
  schemaBeforeCanvasRef: React.RefObject<CanvasDraw>;
  schemaAfterCanvasRef: React.RefObject<CanvasDraw>;
  signatureRef: React.RefObject<SignatureCanvas>;
  setDriverDamageVeh: (value: string) => void;
  setTpDamageVeh: (value: string) => void;
  setSchemeBeforeAccident: (value: string) => void;
  setSchemeAfterAccident: (value: string) => void;
  setDriverSignature: (value: string) => void;
}
