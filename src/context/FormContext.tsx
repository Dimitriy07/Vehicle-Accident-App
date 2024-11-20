import { createContext, useContext, useState } from "react";

interface FormContextValue {
  photoDetails: boolean;
  tpDetails: any;
  callManager: boolean;
  setPhotoDetails: (value: boolean) => void;
}

const FormContext = createContext<FormContextValue | null>(null);

function FormProvider({ children }: any) {
  ////// Steps state
  const [photoDetails, setPhotoDetails] = useState<boolean>(false);
  const [tpDetails, setTpDetails] = useState(null);
  const [callManager, setCallManager] = useState<boolean>(false);

  ////// TP Details info
  const [isVehInvolved, setIsVehInvolved] = useState("yes");
  const [isDriverOwner, setIsDriverOwner] = useState("yes");

  const [regNumber, setRegNumber] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const [ownerName, setOwnerName] = useState("");
  const [ownerTelephone, setOwnerTelephone] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");

  const [driverName, setDriverName] = useState("");
  const [driverTelephone, setDriverTelephone] = useState("");
  const [driverAddress, setDriverAddress] = useState("");

  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [policyNo, setPolicyNo] = useState("");

  return (
    <FormContext.Provider
      value={{ photoDetails, tpDetails, callManager, setPhotoDetails }}
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
  return context;
}
export { useFormContext, FormProvider };
