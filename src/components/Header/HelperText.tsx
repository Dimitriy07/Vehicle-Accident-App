import { useFormContext } from "../../context/FormContext";
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

  // Helper function to determine the message
  const getHelperMessage = () => {
    if (!startAccident) return "Choose Driver Name";
    if (!steps && driverForm) return "Back To Immediate Steps Steps";
    if (!steps) return "Go To Steps";
    if (!photoDetailsDone) return "Go To Photos";
    if (!tpDetailsDone) return "Go To TP Details";
    if (!callManagerDone) return "Call Manager";
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
