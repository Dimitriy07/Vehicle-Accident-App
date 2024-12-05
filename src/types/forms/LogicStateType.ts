export interface LogicStateType {
  startAccident: boolean;
  photoDetailsDone: boolean;
  tpDetailsDone: boolean;
  callManagerDone: boolean;
  steps: boolean;
  stepsDone: boolean;
  setStartAccident: (value: boolean) => void;
  setPhotoDetails: (value: boolean) => void;
  setTpDetails: (value: boolean) => void;
  setCallManager: (value: boolean) => void;
  setSteps: (value: boolean) => void;
  setStepsDone: (value: boolean) => void;
}
