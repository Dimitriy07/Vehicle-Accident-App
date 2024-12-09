import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import { TpDetailsType } from "../types/forms/TpDetailsType";

const TpDetailsContext = createContext<TpDetailsType | null>(null);

function TpDetailsProvider({ children }: PropsWithChildren) {
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
    <TpDetailsContext.Provider
      value={{
        tpRef,
        tpFormData,
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
        setTpFormData,
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
      }}
    >
      {children}
    </TpDetailsContext.Provider>
  );
}

function useTpDetails() {
  const context = useContext(TpDetailsContext);
  if (!context)
    throw new Error("TpDetails Context used outside LogicState Provider");
  return context;
}

export { TpDetailsProvider, useTpDetails };
