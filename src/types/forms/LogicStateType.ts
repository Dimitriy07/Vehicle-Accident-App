export interface LogicStateType {
  isStartAccident: boolean;
  isPhotoDetailsDone: boolean;
  isTpDetailsDone: boolean;
  isCallManagerDone: boolean;
  isStepsStarts: boolean;
  isStepsDone: boolean;
  isDriverFormStarts: boolean;
  isVehDamageCanvasSave: boolean;
  isSchemaCanvasSave: boolean;
  isDriverSignature: boolean;
  setIsStartAccident: (value: boolean) => void;
  setIsPhotoDetailsDone: (value: boolean) => void;
  setIsTpDetailsDone: (value: boolean) => void;
  setIsCallManagerDone: (value: boolean) => void;
  setIsStepsStarts: (value: boolean) => void;
  setIsStepsDone: (value: boolean) => void;
  setIsDriverFormStarts: (value: boolean) => void;
  setIsVehDamageCanvasSave: (value: boolean) => void;
  setIsSchemaCanvasSave: (value: boolean) => void;
  setIsDriverSignature: (value: boolean) => void;
}
