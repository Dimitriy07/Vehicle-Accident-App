import FormInput from "../../../components/FormInput/FormInput";
import { useFormContext } from "../../../context/FormContext";
import styles from "../Form.module.css";

function FormStepOne() {
  const {
    isWitness,
    witnessName,
    witnessAddress,
    isInjury,
    isPolice,
    policeName,
    policeStattion,
    policeRefN,
    setIsWitness,
    setWitnessName,
    setWitnessAddress,
    setIsPolice,
    setIsInjury,
    setPoliceName,
    setPoliceStattion,
    setPoliceRefN,
  } = useFormContext();

  return (
    <div className={`${styles.form}`}>
      <fieldset>
        <legend>Injury/Witness/Police Details</legend>

        <FormInput
          type="select"
          label="Is Anyone Injured"
          value={isInjury}
          onChangeSet={setIsInjury}
          options={["no", "yes"]}
        />

        {isInjury === "yes" && (
          <>
            <label>Details of infury</label>
            <textarea rows={5} cols={50}></textarea>
          </>
        )}
        <FormInput
          type="select"
          label="Is Any Witness"
          value={isWitness}
          onChangeSet={setIsWitness}
          options={["no", "yes"]}
        />

        {isWitness === "yes" && (
          <>
            <FormInput
              type="input-text"
              placeholder="Witness Name"
              value={witnessName}
              onChangeSet={setWitnessName}
            />
            <FormInput
              type="input-text"
              placeholder="Witness Address"
              value={witnessAddress}
              onChangeSet={setWitnessAddress}
            />
          </>
        )}
        <FormInput
          type="select"
          label="Is Police attanded"
          value={isPolice}
          onChangeSet={setIsPolice}
          options={["no", "yes"]}
        />

        {isPolice === "yes" && (
          <>
            <FormInput
              type="input-text"
              placeholder="Number and Name of the Officer"
              value={policeName}
              onChangeSet={setPoliceName}
            />
            <FormInput
              type="input-text"
              placeholder="Station of Attending Officer"
              value={policeStattion}
              onChangeSet={setPoliceStattion}
            />
            <FormInput
              type="input-text"
              placeholder="Police reference No (if applicable)"
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
