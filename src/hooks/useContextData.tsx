/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDriver } from "../context/DriverContext";
import { useFormContext } from "../context/FormContext";
import { DriverType } from "../types/DriverType";
import { FormContextValue } from "../types/FormType";

export function useContextData() {
  type ContextDataObj = DriverType & FormContextValue;
  const formContext = useFormContext();
  const driverContext = useDriver();

  const dataObj: Partial<ContextDataObj> = {
    ...driverContext.driver,
    ...formContext,
  };
  return dataObj;
}
