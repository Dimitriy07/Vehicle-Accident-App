import { createContext, useContext, useState, PropsWithChildren } from "react";
import { FormContextType } from "../types";

const FormContext = createContext<FormContextType | null>(null);

function FormProvider({ children }: PropsWithChildren) {
  /////// Driver's Form Details

  const [isInjury, setIsInjury] = useState("no");
  const [injuryDetails, setInjuryDetails] = useState("");
  const [formStep, setFormStep] = useState(1);
  const [isWitness, setIsWitness] = useState("no");
  const [witnessName, setWitnessName] = useState("");
  const [witnessAddress, setWitnessAddress] = useState("");
  const [isPolice, setIsPolice] = useState("no");
  const [policeName, setPoliceName] = useState("");
  const [policeStattion, setPoliceStattion] = useState("");
  const [policeRefN, setPoliceRefN] = useState("");
  const [accidentDate, setAccidentDate] = useState(new Date());
  const [accidentTime, setAccidentTime] = useState("");
  const [accidentLocation, setAccidentLocation] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("clear");
  const [roadCondition, setRoadCondition] = useState("good");
  const [driverSpeed, setDriverSpeed] = useState("");
  const [tpSpeed, setTpSpeed] = useState("");
  const [driverDamageDetails, setDriverDamageDetails] = useState("");
  const [tpDamageDetails, setTpDamageDetails] = useState("");
  const [driverStatement, setDriverStatement] = useState("");

  // Number of steps in the form
  const STEPS_NUMBERS = 6;

  return (
    <FormContext.Provider
      value={{
        formStep,
        isWitness,
        witnessName,
        witnessAddress,
        isPolice,
        isInjury,
        injuryDetails,
        STEPS_NUMBERS,

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

        setFormStep,
        setIsWitness,
        setWitnessName,
        setWitnessAddress,
        setIsPolice,
        setIsInjury,
        setInjuryDetails,
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
  return context as FormContextType;
}
export { FormProvider, useFormContext };
