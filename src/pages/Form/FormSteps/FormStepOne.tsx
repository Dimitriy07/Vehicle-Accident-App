import { useTranslation } from "react-i18next";
import FormInput from "../../../components/FormInput/FormInput";
import { useFormContext } from "../../../context/FormContext";
import styles from "../Form.module.css";

function FormStepOne() {
  const {
    isWitness,
    witnessName,
    witnessAddress,
    isInjury,
    injuryDetails,
    isPolice,
    policeName,
    policeStattion,
    policeRefN,
    setIsWitness,
    setWitnessName,
    setWitnessAddress,
    setIsPolice,
    setIsInjury,
    setInjuryDetails,
    setPoliceName,
    setPoliceStattion,
    setPoliceRefN,
  } = useFormContext();
  const { t } = useTranslation();
  return (
    <div className={`${styles.form}`}>
      <fieldset>
        <legend>{t("formInformation.additionalDetails")}</legend>

        <FormInput
          type="select"
          label={t("formInformation.isInjury")}
          value={isInjury}
          onChangeSet={setIsInjury}
          options={[
            { value: "no", label: t("commonAnswers.no") },
            { value: "yes", label: t("commonAnswers.yes") },
          ]}
        />

        {isInjury === "yes" && (
          <FormInput
            type="textarea"
            rows={10}
            cols={50}
            label={t("formInformation.injuryDetails")}
            value={injuryDetails}
            onChangeSet={setInjuryDetails}
          />
        )}
        <FormInput
          type="select"
          label={t("formInformation.isWitness")}
          value={isWitness}
          onChangeSet={setIsWitness}
          options={[
            { value: "no", label: t("commonAnswers.no") },
            { value: "yes", label: t("commonAnswers.yes") },
          ]}
        />

        {isWitness === "yes" && (
          <>
            <FormInput
              type="input-text"
              placeholder={t("formInformation.witnessName")}
              value={witnessName}
              onChangeSet={setWitnessName}
            />
            <FormInput
              type="input-text"
              placeholder={t("formInformation.witnessAddress")}
              value={witnessAddress}
              onChangeSet={setWitnessAddress}
            />
          </>
        )}
        <FormInput
          type="select"
          label={t("formInformation.isPolice")}
          value={isPolice}
          onChangeSet={setIsPolice}
          options={[
            { value: "no", label: t("commonAnswers.no") },
            { value: "yes", label: t("commonAnswers.yes") },
          ]}
        />

        {isPolice === "yes" && (
          <>
            <FormInput
              type="input-text"
              placeholder={t("formInformation.policeName")}
              value={policeName}
              onChangeSet={setPoliceName}
            />
            <FormInput
              type="input-text"
              placeholder={t("formInformation.policeStation")}
              value={policeStattion}
              onChangeSet={setPoliceStattion}
            />
            <FormInput
              type="input-text"
              placeholder={t("formInformation.policeRefN")}
              value={policeRefN}
              onChangeSet={setPoliceRefN}
            />
          </>
        )}
      </fieldset>
    </div>
  );
}

export default FormStepOne;
