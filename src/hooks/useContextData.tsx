/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDriver } from "../context/DriverContext";
// import { useFormContext } from "../context/FormContext";

export function useContextData() {
  //   const formContext = useFormContext();
  const driverContext = useDriver();

  const dataObj = { ...driverContext.driver };
  return dataObj;
}
