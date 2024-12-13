import { useDriver } from "../../context/DriverContext";
import { useFormContext } from "../../context/FormContext";
import { useLogicState } from "../../context/LogicStateContext";
import { useVehicle } from "../../context/VehicleContext";
import styles from "./Header.module.css";

function HelperText() {
  const {
    startAccident,
    steps,
    photoDetailsDone,
    tpDetailsDone,
    callManagerDone,
    stepsDone,
    driverForm,
  } = useFormContext();

  const { selectedItemId: driverId} = useDriver();
  const { selectedItemId: vehicleId} = useVehicle();
  const {isStartAccident,  isPhotoDetailsDone, isTpDetailsDone,isCallManagerDone} = useLogicState()
  // Helper function to determine the message
  const getHelperMessage = () => {
    if (!driverId) return "Choose Driver Name";
    if (!vehicleId) return "Choose Vehicle Name";
    
    if (!steps && driverForm) return "Back To Immediate Steps Steps";
    if (!isStartAccident) return "Go To Steps";
    if (!isPhotoDetailsDone) return "Go To Photos";
    if (!isTpDetailsDone) return "Go To TP Details";
    if (!isCallManagerDone) return "Call Manager";
    if (!stepsDone) return "Press Submit";
    if (!driverForm && stepsDone) return "Go To Form";
    if (driverForm) return "Form Progress:";
  };

  return (
    <div className={styles.helperText}>
      <span>{getHelperMessage()}</span>
    </div>
  );
}

export default HelperText;
