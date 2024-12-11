import CanvasDraw from "react-canvas-draw";

export interface CanvasType {
  driverSignature: string;
  driverDamageVeh: string;
  tpDamageVeh: string;
  schemeBeforeAccident: string;
  schemeAfterAccident: string;
  driverVehCanvasRef: React.RefObject<CanvasDraw>;
  tpVehCanvasRef: React.RefObject<CanvasDraw>;
  setDriverDamageVeh: (value: string) => void;
  setTpDamageVeh: (value: string) => void;
  setSchemeBeforeAccident: (value: string) => void;
  setSchemeAfterAccident: (value: string) => void;
  setDriverSignature: (value: string) => void;
  handleDriverDamageCanvas: (value: React.RefObject<CanvasDraw>) => void;
  handleTpDamageCanvas: (value: React.RefObject<CanvasDraw>) => void;
}
