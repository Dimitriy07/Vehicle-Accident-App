import { useFormContext } from "../../context/FormContext";
import { useLogicState } from "../../context/LogicStateContext";
import styles from "./Header.module.css";

function ProgressInfo() {
  const { STEPS_NUMBERS, formStep } = useFormContext();
  const { isDriverFormStarts, isStepsDone } = useLogicState();
  if (isDriverFormStarts && isStepsDone)
    return (
      <div className={styles.progressInfo}>
        {formStep}/{STEPS_NUMBERS}
      </div>
    );
}

export default ProgressInfo;
