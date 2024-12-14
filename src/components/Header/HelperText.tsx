import { useDriver } from "../../context/DriverContext";

import { useLogicState } from "../../context/LogicStateContext";
import { useVehicle } from "../../context/VehicleContext";
import styles from "./Header.module.css";

function HelperText() {
  const { selectedItemId: driverId } = useDriver();
  const { selectedItemId: vehicleId } = useVehicle();
  const {
    isStartAccident,
    isStepsStarts,
    isPhotoDetailsDone,
    isTpDetailsDone,
    isCallManagerDone,
    isStepsDone,
    isDriverFormStarts,
  } = useLogicState();

  // Helper function to determine the message
  const getHelperMessage = () => {
    if (!driverId) return "Choose Driver Name";
    if (!vehicleId) return "Choose Vehicle Name";

    if (!isStartAccident) return "Start Accident Form";
    if (!isStepsStarts) return "Go to Immediate Steps";
    if (!isPhotoDetailsDone) return "Go To Photos";
    if (!isTpDetailsDone) return "Go To TP Details";
    if (!isCallManagerDone) return "Call Manager";
    if (!isStepsDone) return "Press Submit";
    if (!isDriverFormStarts && isStepsDone) return "Go To Form";
    if (isDriverFormStarts) return "Form Progress:";
  };

  return (
    <div className={styles.helperText}>
      <span>{getHelperMessage()}</span>
    </div>
  );
}

export default HelperText;
