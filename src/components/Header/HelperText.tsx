import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  // Helper function to determine the message
  const getHelperMessage = () => {
    if (!driverId) return t("helperText.isDriver");
    if (!vehicleId) return t("helperText.isVehicle");

    if (!isStartAccident) return t("helperText.isStartAccidentForm");
    if (!isStepsStarts) return t("helperText.isImmediatteSteps");
    if (!isPhotoDetailsDone) return t("helperText.isPhotos");
    if (!isTpDetailsDone) return t("helperText.isTpDetails");
    if (!isCallManagerDone) return t("helperText.isCallManager");
    if (!isStepsDone) return t("helperText.isPressSubmit");
    if (!isDriverFormStarts && isStepsDone) return t("helperText.isForm");
    if (isDriverFormStarts) return t("helperText.isFormProgress");
  };

  return (
    <div className={styles.helperText}>
      <span>{getHelperMessage()}</span>
    </div>
  );
}

export default HelperText;
