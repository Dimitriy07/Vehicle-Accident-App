/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import { useFormContext } from "../../context/FormContext";
import { useEffect } from "react";
import FormInput from "../../components/FormInput/FormInput";

import styles from "./Form.module.css";

function Form() {
  const {
    stepsDone,
    driverForm,
    formStep,
    isWitness,
    witnessName,
    witnessAddress,
    isPolice,
    isInjury,
    STEPS_NUMBERS,
    setFormStep,
    setIsWitness,
    setWitnessName,
    setWitnessAddress,
    setIsPolice,
    setIsInjury,
    setDriverForm,
  } = useFormContext();

  const navigate = useNavigate();

  useEffect(
    function () {
      setDriverForm(true);
      return () => setDriverForm(false);
    },
    [setDriverForm]
  );

  function handleNext(): void {
    setFormStep(() => formStep + 1);
  }

  function handleBack(): void {
    setFormStep(() => formStep - 1);
  }

  return (
    <div className="container-input__form">
      <div>
        <form className={`${styles.form} ${!stepsDone ? "display-none" : ""}`}>
          {/* First Page  */}
          <div
            className={`${styles.form} ${formStep !== 1 ? "display-none" : ""}`}
          >
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
                  <input
                    type="text"
                    placeholder="Number and Input of Officer"
                  />
                  <input
                    type="text"
                    placeholder="Station of Attending Officer"
                  />
                  <input
                    type="text"
                    placeholder="Police reference No (if applicable)"
                  />
                </>
              )}
            </fieldset>
          </div>

          {/* Second Page  */}

          <div
            className={`${formStep !== 2 ? "display-none" : ""} ${styles.form}`}
          >
            <fieldset>
              <legend>Date and Time of Accident</legend>

              <input type="text" placeholder="Date" />
              <input type="text" placeholder="Time" />
              <input type="text" placeholder="Location" />
            </fieldset>
            <fieldset>
              <legend>Weather and Road Condition</legend>
              <label>Weather Condition</label>
              <select>
                <option value="clear">Clear</option>
                <option value="cloudy">Cloudy</option>
                <option value="foggy">Foggy</option>
                <option value="raining">Raining</option>
                <option value="snow">Snow</option>
                <option value="sunny">Sunny</option>
                <option value="wet">Wet</option>
              </select>
              <label>Road Condition</label>
              <select>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="poor">Poor</option>
              </select>
              <input type="text" placeholder="Your speed" />
              <input type="text" placeholder="Third party speed" />
            </fieldset>
          </div>

          {/* Third Page  */}

          <div
            className={`${formStep !== 3 ? "display-none" : ""} ${styles.form}`}
          >
            <div>
              <label>Details of damage (Your vehicle)</label>
              <textarea rows={5} cols={50}></textarea>
            </div>
            <div>
              <label>Details of damage (Your third party vehicle)</label>
              <textarea rows={5} cols={50}></textarea>
            </div>
          </div>
          {/* Forth Page  */}

          <div
            className={`${formStep !== 4 ? "display-none" : ""} ${styles.form}`}
          >
            <div>
              <label>
                Driver's Statement(Please explain fully and clearly what
                happened)
              </label>
              <textarea rows={10} cols={50}></textarea>
            </div>
          </div>

          {/* Fifth Page  */}

          <div
            className={`${formStep !== 5 ? "display-none" : ""} ${styles.form}`}
          >
            <div>
              <label>Signature</label>
              <textarea rows={10} cols={50}></textarea>
            </div>
          </div>
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
        {!stepsDone ? (
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
