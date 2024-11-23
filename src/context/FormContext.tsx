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
  photoDetailsDone: boolean;
  tpDetailsDone: any;
  callManagerDone: boolean;
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

  setPhotoDetails: (value: boolean) => void;
  setTpDetails: (value: boolean) => void;
  setCallManager: (value: boolean) => void;
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
}

const FormContext = createContext<Partial<FormContextValue> | null>(null);

function FormProvider({ children }: PropsWithChildren) {
  ////// Steps state
  const [photoDetailsDone, setPhotoDetails] = useState<boolean>(false);
  const [tpDetailsDone, setTpDetails] = useState<boolean>(false);
  const [callManagerDone, setCallManager] = useState<boolean>(false);

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

  ////////// Reference to Tp data
  const tpRef = useRef<HTMLFormElement>(null);
  const [tpFormData, setTpFormData] = useState<FormData | null>(null);

  return (
    <FormContext.Provider
      value={{
        photoDetailsDone,
        tpDetailsDone,
        callManagerDone,
        setPhotoDetails,
        setTpDetails,
        setCallManager,
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
