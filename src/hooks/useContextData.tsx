/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCanvas } from "../context/CanvasContext";
import { useDriver } from "../context/DriverContext";
import { useFormContext } from "../context/FormContext";
import { useGeolocation } from "../context/GeolocationContext";
import { useTpDetails } from "../context/TpDetailsContext";
import { useVehicle } from "../context/VehicleContext";

export function useContextData() {
  const canvasContext = useCanvas();
  const { getSelectedItem: getSelectedDriver } = useDriver();
  const { getSelectedItem: getSelectedVehicle } = useVehicle();
  const formContext = useFormContext();
  const geolocationContext = useGeolocation();
  const tpDetailsContext = useTpDetails();
  const vehicleContext = getSelectedVehicle();
  const driverContext = getSelectedDriver();

  const dataObj = {
    ...canvasContext,
    ...driverContext,
    ...formContext,
    ...geolocationContext,
    ...tpDetailsContext,
    ...vehicleContext,
  };
  return dataObj;
}
