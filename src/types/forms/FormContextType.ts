export interface FormContextType {
  STEPS_NUMBERS: number;

  formStep: number;
  isWitness: string;
  witnessName: string;
  witnessAddress: string;
  isPolice: string;
  isInjury: string;
  injuryDetails: string;
  policeName: string;
  policeStattion: string;
  policeRefN: string;
  accidentDate: Date;
  accidentTime: string;
  accidentLocation: string;
  weatherCondition: string;
  roadCondition: string;
  driverSpeed: string;
  tpSpeed: string;
  driverDamageDetails: string;
  tpDamageDetails: string;
  driverStatement: string;

  setFormStep: (value: number | ((prev: number) => number)) => void;
  setIsWitness: (value: string) => void;
  setWitnessName: (value: string) => void;
  setWitnessAddress: (value: string) => void;
  setIsPolice: (value: string) => void;
  setIsInjury: (value: string) => void;
  setInjuryDetails: (value: string) => void;
  setPoliceName: (value: string) => void;
  setPoliceStattion: (value: string) => void;
  setPoliceRefN: (value: string) => void;
  setAccidentDate: (value: Date) => void;
  setAccidentTime: (value: string) => void;
  setAccidentLocation: (value: string) => void;
  setWeatherCondition: (value: string) => void;
  setRoadCondition: (value: string) => void;
  setDriverSpeed: (value: string) => void;
  setTpSpeed: (value: string) => void;
  setDriverDamageDetails: (value: string) => void;
  setTpDamageDetails: (value: string) => void;
  setDriverStatement: (value: string) => void;
}
