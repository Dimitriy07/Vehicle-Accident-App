export interface CanvasType {
  driverSignature: string;
  driverDamageVeh: string;
  tpDamageVeh: string;
  schemeBeforeAccident: string;
  schemeAfterAccident: string;
  setDriverDamageVeh: (value: string) => void;
  setTpDamageVeh: (value: string) => void;
  setSchemeBeforeAccident: (value: string) => void;
  setSchemeAfterAccident: (value: string) => void;
  setDriverSignature: (value: string) => void;
}
