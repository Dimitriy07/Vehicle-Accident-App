import { useFormContext } from "../../../context/FormContext";

import FormInput from "../../../components/FormInput/FormInput";

import styles from "../Form.module.css";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();
  return (
    <div className={`${styles.form}`}>
      <fieldset>
        <legend>{t("incidentDetails.sectionTitle")}</legend>

        <FormInput
          type="input-date"
          placeholder={t("incidentDetails.accidentDate")}
          value={accidentDate}
          onChangeSetDate={setAccidentDate}
        />
        <FormInput
          type="input-time"
          placeholder={t("incidentDetails.accidentTime")}
          value={accidentTime}
          onChangeSet={setAccidentTime}
        />
        <FormInput
          type="input-text"
          placeholder={t("incidentDetails.accidentLocation")}
          value={accidentLocation}
          onChangeSet={setAccidentLocation}
        />
      </fieldset>
      <fieldset>
        <legend>{t("incidentDetails.weatherRoadCondition")}</legend>
        <FormInput
          type="select"
          label={t("incidentDetails.weatherConditions")}
          value={weatherCondition}
          onChangeSet={setWeatherCondition}
          options={[
            { value: "clear", label: t("weatherCondition.clear") },
            { value: "cloudy", label: t("weatherCondition.cloudy") },
            { value: "foggy", label: t("weatherCondition.foggy") },
            { value: "raining", label: t("weatherCondition.raining") },
            { value: "snow", label: t("weatherCondition.snow") },
            { value: "sunny", label: t("weatherCondition.sunny") },
            { value: "wet", label: t("weatherCondition.wet") },
          ]}
        />
        <FormInput
          type="select"
          label={t("incidentDetails.roadConditions")}
          value={roadCondition}
          onChangeSet={setRoadCondition}
          options={[
            { value: "good", label: t("roadCondition.good") },
            { value: "average", label: t("roadCondition.average") },
            { value: "poor", label: t("roadCondition.poor") },
          ]}
        />

        <FormInput
          type="input-text"
          placeholder={t("incidentDetails.driverSpeed")}
          value={driverSpeed}
          onChangeSet={setDriverSpeed}
        />
        <FormInput
          type="input-text"
          placeholder={t("incidentDetails.tpSpeed")}
          value={tpSpeed}
          onChangeSet={setTpSpeed}
        />
      </fieldset>
    </div>
  );
}

export default FormStepTwo;
