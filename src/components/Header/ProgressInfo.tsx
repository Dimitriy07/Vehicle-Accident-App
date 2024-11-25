import { useFormContext } from "../../context/FormContext";
import styles from "./Header.module.css";

function ProgressInfo() {
  const { STEPS_NUMBERS, formStep, driverForm, stepsDone } = useFormContext();
  if (driverForm && stepsDone)
    return (
      <div className={styles.progressInfo}>
        {formStep}/{STEPS_NUMBERS}
      </div>
    );
}

export default ProgressInfo;
