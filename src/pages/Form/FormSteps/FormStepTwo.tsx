import { useFormContext } from "../../../context/FormContext";

import FormInput from "../../../components/FormInput/FormInput";

import styles from "../Form.module.css";

function FormStepTwo() {
  const {
    accidentDate,
    accidentTime,
    accidentLocation,
    weatherCondition,
    roadCondition,
    driverSpeed,
    tpSpeed,
    setAccidentDate,
    setAccidentTime,
    setAccidentLocation,
    setWeatherCondition,
    setRoadCondition,
    setDriverSpeed,
    setTpSpeed,
  } = useFormContext();

  return (
    <div className={`${styles.form}`}>
      <fieldset>
        <legend>Date and Time of Accident</legend>

        <FormInput
          type="input-date"
          placeholder="Date"
          value={accidentDate}
          onChangeSetDate={setAccidentDate}
        />
        <FormInput
          type="input-time"
          placeholder="Time"
          value={accidentTime}
          onChangeSet={setAccidentTime}
        />
        <FormInput
          type="input-text"
          placeholder="Location"
          value={accidentLocation}
          onChangeSet={setAccidentLocation}
        />
      </fieldset>
      <fieldset>
        <legend>Weather and Road Condition</legend>
        <FormInput
          type="select"
          label="Weather Condition"
          value={weatherCondition}
          onChangeSet={setWeatherCondition}
          options={[
            "clear",
            "cloudy",
            "foggy",
            "raining",
            "snow",
            "sunny",
            "wet",
          ]}
        />
        <FormInput
          type="select"
          label="Road Condition"
          value={roadCondition}
          onChangeSet={setRoadCondition}
          options={["good", "average", "poor"]}
        />

        <FormInput
          type="input-text"
          placeholder="Your speed"
          value={driverSpeed}
          onChangeSet={setDriverSpeed}
        />
        <FormInput
          type="input-text"
          placeholder="Third party speed"
          value={tpSpeed}
          onChangeSet={setTpSpeed}
        />
      </fieldset>
    </div>
  );
}

export default FormStepTwo;
