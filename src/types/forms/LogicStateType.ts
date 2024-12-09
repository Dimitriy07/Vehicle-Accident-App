export interface LogicStateType {
  isStartAccident: boolean;
  isPhotoDetailsDone: boolean;
  isTpDetailsDone: boolean;
  isCallManagerDone: boolean;
  isStepsStarts: boolean;
  isStepsDone: boolean;
  isDriverFormStarts: boolean;
  setIsStartAccident: (value: boolean) => void;
  setIsPhotoDetailsDone: (value: boolean) => void;
  setIsTpDetailsDone: (value: boolean) => void;
  setIsCallManagerDone: (value: boolean) => void;
  setIsStepsStarts: (value: boolean) => void;
  setIsStepsDone: (value: boolean) => void;
  setIsDriverFormStarts: (value: boolean) => void;
}
