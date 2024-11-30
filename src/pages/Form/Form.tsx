/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useFormContext } from "../../context/FormContext";

import SignatureCanvas from "react-signature-canvas";
import CanvasDraw from "react-canvas-draw";

import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";

import styles from "./Form.module.css";

function Form() {
  const {
    STEPS_NUMBERS,
    stepsDone,
    formStep,
    isWitness,
    witnessName,
    witnessAddress,
    isInjury,
    isPolice,
    policeName,
    policeStattion,
    policeRefN,
    accidentDate,
    accidentTime,
    accidentLocation,
    weatherCondition,
    roadCondition,
    driverSpeed,
    tpSpeed,
    driverDamageDetails,
    tpDamageDetails,
    driverStatement,
    driverSignature,

    setFormStep,
    setIsWitness,
    setWitnessName,
    setWitnessAddress,
    setIsPolice,
    setIsInjury,
    setDriverForm,
    setPoliceName,
    setPoliceStattion,
    setPoliceRefN,
    setAccidentDate,
    setAccidentTime,
    setAccidentLocation,
    setWeatherCondition,
    setRoadCondition,
    setDriverSpeed,
    setTpSpeed,
    setDriverDamageDetails,
    setTpDamageDetails,
    setDriverStatement,
    setDriverSignature,
  } = useFormContext();

  const navigate = useNavigate();

  useEffect(
    function () {
      setDriverForm(true);
      return () => setDriverForm(false);
    },
    [setDriverForm]
  );

  const signatureRef = useRef<SignatureCanvas>(null);
  const driverVehCanvas = useRef<CanvasDraw>(null);

  function handleNext(): void {
    setFormStep(() => formStep + 1);
  }

  function handleBack(): void {
    setFormStep(() => formStep - 1);
  }

  function handleClearSignature(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    signatureRef.current?.clear();
  }

  function handleSaveSignature(): void {
    const signatureUrl = signatureRef.current?.toDataURL();
    if (signatureUrl === undefined) return;
    setDriverSignature(signatureUrl);
  }

  // Change stepsDone = true condition in <form></form> and button while developing (change back for production)
  return (
    <div className="container-input__form">
      <div>
        <form className={`${styles.form} ${stepsDone ? "display-none" : ""}`}>
          {/* First Page  */}
          {formStep === 1 && (
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
          )}

          {/* Second Page  */}

          {formStep === 2 && (
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
          )}

          {/* Third Page  */}
          {formStep === 3 && (
            <div className={`${styles.form}`}>
              <FormInput
                type="textarea"
                rows={5}
                cols={30}
                label="Details of damage (Your vehicle)"
                value={driverDamageDetails}
                onChangeSet={setDriverDamageDetails}
              />
              <div className={`${styles.canvas}`}>
                <CanvasDraw
                  canvasWidth={400}
                  canvasHeight={200}
                  lazyRadius={1}
                  brushRadius={2}
                  imgSrc="/damageVeh.png"
                />
              </div>

              <FormInput
                type="textarea"
                rows={5}
                cols={30}
                label="Details of damage (Third party vehicle)"
                value={tpDamageDetails}
                onChangeSet={setTpDamageDetails}
              />
            </div>
          )}
          {/* Forth Page  */}
          {formStep === 4 && (
            <div
              className={`${formStep !== 4 ? "display-none" : ""} ${
                styles.form
              }`}
            >
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
          )}

          {/* Fifth Page  */}
          {formStep === 5 && (
            <div
              className={`${formStep !== 5 ? "display-none" : ""} ${
                styles.form
              }`}
            >
              <label>Signature</label>
              <SignatureCanvas
                ref={signatureRef}
                canvasProps={{
                  width: 300,
                  height: 200,
                  style: { border: "1px solid #000" },
                }}
                clearOnResize={false}
              />
              <button onClick={handleClearSignature}>Clear</button>
            </div>
          )}
          {/* ////////////////////////// */}
        </form>
      </div>
      <div className="btn-container">
        <Button
          onClick={() => {
            if (formStep > 1) {
              handleBack();
            } else {
              navigate("/steps-nav", { replace: true });
            }
          }}
        >
          Back
        </Button>
        {stepsDone ? (
          <div></div>
        ) : (
          <Button onClick={() => formStep < STEPS_NUMBERS && handleNext()}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default Form;
