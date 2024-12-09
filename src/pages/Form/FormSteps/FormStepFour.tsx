import { useFormContext } from "../../../context/FormContext";
import FormInput from "../../../components/FormInput/FormInput";
import styles from "../Form.module.css";

function FormStepFour() {
  const { driverStatement, setDriverStatement } = useFormContext();
  return (
    <div className={`${styles.form}`}>
      <div>
        <FormInput
          type="textarea"
          rows={10}
          cols={50}
          label=" Driver's Statement(Please explain fully and clearly what
    happened)"
          value={driverStatement}
          onChangeSet={setDriverStatement}
        />
      </div>
    </div>
  );
}

export default FormStepFour;
