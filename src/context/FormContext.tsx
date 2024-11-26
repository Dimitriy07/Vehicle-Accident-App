/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useRef,
} from "react";

interface FormContextValue {
  startAccident: boolean;
  photoDetailsDone: boolean;
  tpDetailsDone: any;
  callManagerDone: boolean;
  steps: boolean;
  stepsDone: boolean;
  isVehInvolved: string;
  isTpDriverOwner: string;
  tpRegNumber: string;
  tpMake: string;
  tpModel: string;
  tpOwnerName: string;
  tpOwnerTelephone: string;
  tpOwnerAddress: string;
  tpDriverName: string;
  tpDriverTelephone: string;
  tpDriverAddress: string;
  tpInsuranceCompany: string;
  tpPolicyNo: string;
  tpRef: React.RefObject<HTMLFormElement>;
  tpFormData: FormData | null;
  formStep: number;
  isWitness: string;
  witnessName: string;
  witnessAddress: string;
  isPolice: string;
  isInjury: string;
  STEPS_NUMBERS: number;
  driverForm: boolean;
  policeName: string;
  policeStattion: string;
  policeRefN: string;
  accidentDate: Date;
  accidentTime: Date;
  accidentLocation: string;
  weatherCondition: string;
  roadCondition: string;
  driverSpeed: number;
  tpSpeed: number;
  driverDamageDetails: string;
  tpDamageDetails: string;
  driverStatement: string;
  driverSignature: HTMLImageElement | null;

  setStartAccident: (value: boolean) => void;
  setPhotoDetails: (value: boolean) => void;
  setTpDetails: (value: boolean) => void;
  setCallManager: (value: boolean) => void;
  setSteps: (value: boolean) => void;
  setStepsDone: (value: boolean) => void;
  setIsVehInvolved: (value: string) => void;
  setTpIsDriverOwner: (value: string) => void;
  setTpRegNumber: (value: string) => void;
  setTpMake: (value: string) => void;
  setTpModel: (value: string) => void;
  setTpOwnerName: (value: string) => void;
  setTpOwnerTelephone: (value: string) => void;
  setTpOwnerAddress: (value: string) => void;
  setTpDriverName: (value: string) => void;
  setTpDriverTelephone: (value: string) => void;
  setTpDriverAddress: (value: string) => void;
  setTpInsuranceCompany: (value: string) => void;
  setTpPolicyNo: (value: string) => void;
  setTpFormData: (value: FormData) => void;
  setFormStep: (value: number | ((prev: number) => number)) => void;
  setIsWitness: (value: string) => void;
  setWitnessName: (value: string) => void;
  setWitnessAddress: (value: string) => void;
  setIsPolice: (value: string) => void;
  setIsInjury: (value: string) => void;
  setDriverForm: (value: boolean) => void;
  setPoliceName: (value: string) => void;
  setPoliceStattion: (value: string) => void;
  setPoliceRefN: (value: string) => void;
  setAccidentDate: (value: Date) => void;
  setAccidentTime: (value: Date) => void;
  setAccidentLocation: (value: string) => void;
  setWeatherCondition: (value: string) => void;
  setRoadCondition: (value: string) => void;
  setDriverSpeed: (value: number) => void;
  setTpSpeed: (value: number) => void;
  setDriverDamageDetails: (value: string) => void;
  setTpDamageDetails: (value: string) => void;
  setDriverStatement: (value: string) => void;
  setDriverSignature: (value: HTMLImageElement | null) => void;
}

const FormContext = createContext<Partial<FormContextValue> | null>(null);

function FormProvider({ children }: PropsWithChildren) {
  const [startAccident, setStartAccident] = useState<boolean>(false);
  ////// Steps state
  const [photoDetailsDone, setPhotoDetails] = useState<boolean>(false);
  const [tpDetailsDone, setTpDetails] = useState<boolean>(false);
  const [callManagerDone, setCallManager] = useState<boolean>(false);
  const [steps, setSteps] = useState<boolean>(false);
  const [stepsDone, setStepsDone] = useState<boolean>(false);

  ////// TP Details info
  const [isVehInvolved, setIsVehInvolved] = useState("yes");
  const [isTpDriverOwner, setTpIsDriverOwner] = useState("yes");

  const [tpRegNumber, setTpRegNumber] = useState("");
  const [tpMake, setTpMake] = useState("");
  const [tpModel, setTpModel] = useState("");

  const [tpOwnerName, setTpOwnerName] = useState("");
  const [tpOwnerTelephone, setTpOwnerTelephone] = useState("");
  const [tpOwnerAddress, setTpOwnerAddress] = useState("");

  const [tpDriverName, setTpDriverName] = useState("");
  const [tpDriverTelephone, setTpDriverTelephone] = useState("");
  const [tpDriverAddress, setTpDriverAddress] = useState("");

  const [tpInsuranceCompany, setTpInsuranceCompany] = useState("");
  const [tpPolicyNo, setTpPolicyNo] = useState("");

  /////// Driver's Form Details
  const [driverForm, setDriverForm] = useState(false);
  const [isInjury, setIsInjury] = useState("no");
  const [formStep, setFormStep] = useState(1);
  const [isWitness, setIsWitness] = useState("no");
  const [witnessName, setWitnessName] = useState("");
  const [witnessAddress, setWitnessAddress] = useState("");
  const [isPolice, setIsPolice] = useState("no");
  const [policeName, setPoliceName] = useState("");
  const [policeStattion, setPoliceStattion] = useState("");
  const [policeRefN, setPoliceRefN] = useState("");
  const [accidentDate, setAccidentDate] = useState<Date>(new Date());
  const [accidentTime, setAccidentTime] = useState<Date>(new Date());
  const [accidentLocation, setAccidentLocation] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [roadCondition, setRoadCondition] = useState("");
  const [driverSpeed, setDriverSpeed] = useState(0);
  const [tpSpeed, setTpSpeed] = useState(0);
  const [driverDamageDetails, setDriverDamageDetails] = useState("");
  const [tpDamageDetails, setTpDamageDetails] = useState("");
  const [driverStatement, setDriverStatement] = useState("");
  const [driverSignature, setDriverSignature] =
    useState<HTMLImageElement | null>(null);

  ////////// Reference to Tp data
  const tpRef = useRef<HTMLFormElement>(null);
  const [tpFormData, setTpFormData] = useState<FormData | null>(null);

  const STEPS_NUMBERS = 5;

  return (
    <FormContext.Provider
      value={{
        startAccident,
        photoDetailsDone,
        tpDetailsDone,
        callManagerDone,
        steps,
        stepsDone,
        setPhotoDetails,
        setTpDetails,
        setCallManager,
        setSteps,
        setStepsDone,
        isVehInvolved,
        isTpDriverOwner,
        tpRegNumber,
        tpMake,
        tpModel,
        tpOwnerName,
        tpOwnerTelephone,
        tpOwnerAddress,
        tpDriverName,
        tpDriverTelephone,
        tpDriverAddress,
        tpInsuranceCompany,
        tpPolicyNo,
        tpRef,
        tpFormData,
        formStep,
        isWitness,
        witnessName,
        witnessAddress,
        isPolice,
        isInjury,
        STEPS_NUMBERS,
        driverForm,
        policeName,
        policeStattion,
        policeRefN,
        accidentDate,
        accidentTime,
        accidentLocation,
        weatherCondition,
        roadCondition,
        driverSpeed,
        tpSpeed,
        driverDamageDetails,
        tpDamageDetails,
        driverStatement,
        driverSignature,
        setStartAccident,
        setIsVehInvolved,
        setTpIsDriverOwner,
        setTpRegNumber,
        setTpMake,
        setTpModel,
        setTpOwnerName,
        setTpOwnerTelephone,
        setTpOwnerAddress,
        setTpDriverName,
        setTpDriverTelephone,
        setTpDriverAddress,
        setTpInsuranceCompany,
        setTpPolicyNo,
        setTpFormData,
        setFormStep,
        setIsWitness,
        setWitnessName,
        setWitnessAddress,
        setIsPolice,
        setIsInjury,
        setDriverForm,
        setPoliceName,
        setPoliceStattion,
        setPoliceRefN,
        setAccidentDate,
        setAccidentTime,
        setAccidentLocation,
        setWeatherCondition,
        setRoadCondition,
        setDriverSpeed,
        setTpSpeed,
        setDriverDamageDetails,
        setTpDamageDetails,
        setDriverStatement,
        setDriverSignature,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context as FormContextValue;
}
export { useFormContext, FormProvider };
