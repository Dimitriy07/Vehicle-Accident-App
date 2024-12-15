import { useFormContext } from "../../../context/FormContext";
import FormInput from "../../../components/FormInput/FormInput";
import styles from "../Form.module.css";
import { useTranslation } from "react-i18next";

function FormStepFive() {
  const { driverStatement, setDriverStatement } = useFormContext();
  const { t } = useTranslation();
  return (
    <div className={`${styles.form}`}>
      <div>
        <FormInput
          type="textarea"
          rows={10}
          cols={50}
          label={t("driverStatement.driverStatement")}
          value={driverStatement}
          onChangeSet={setDriverStatement}
        />
      </div>
    </div>
  );
}

export default FormStepFive;
