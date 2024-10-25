import { useState } from "react";

import {
  MainNavigationHandlers,
  handleBackToMain,
} from "../../utils/navigationSteps";
import Button from "../../components/Buttons/Button";
import NavigationEl from "../../components/Navigation/Navigation";

interface FormProps {
  navObj: MainNavigationHandlers;
}

function Form({ navObj }: FormProps) {
  const [formStep, setFormStep] = useState(1);
  const [isInjury, setIsInjury] = useState("no");
  const [isWitness, setIsWitness] = useState("no");
  const [isPolice, setIsPolice] = useState("no");

  function handleNext(formStep: number) {
    setFormStep(() => formStep + 1);
  }

  function handleBack(formStep: number) {
    setFormStep(() => formStep - 1);
  }

  const stepsNumber = 5;

  return (
    <div className="interface-screen">
      <div>
        {formStep}/{stepsNumber}
      </div>
      <div>
        <form className="details-form details-form__input">
          {/* First Page  */}
          <div className={formStep !== 1 ? "display-none" : ""}>
            <div>
              <label>Is Anyone Injured</label>
              <select
                value={isInjury}
                onChange={(e) => setIsInjury(e.target.value)}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
              {isInjury === "yes" && (
                <>
                  <span>
                    <NavigationEl>Call Emergency Service!!!</NavigationEl>
                  </span>
                  <label>Details of infury</label>
                  <textarea rows={5} cols={50}></textarea>
                </>
              )}
            </div>
            <div>
              <label>Is Any Witness</label>
              <select
                value={isWitness}
                onChange={(e) => setIsWitness(e.target.value)}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
              {isWitness === "yes" && (
                <>
                  <input type="text" placeholder="Witness Name" />
                  <input type="text" placeholder="Witness Address" />
                </>
              )}
            </div>
            <div>
              <label>Is Police attanded</label>
              <select
                value={isPolice}
                onChange={(e) => setIsPolice(e.target.value)}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
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
            </div>
          </div>

          {/* Second Page  */}

          <div className={formStep !== 2 ? "display-none" : ""}>
            <input type="text" placeholder="Date" />
            <input type="text" placeholder="Time" />
            <input type="text" placeholder="Location" />
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
          </div>

          {/* Third Page  */}

          <div className={formStep !== 3 ? "display-none" : ""}>
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

          <div className={formStep !== 4 ? "display-none" : ""}>
            <div>
              <label>
                Driver's Statement(Please explain fully and clearly what
                happened)
              </label>
              <textarea rows={10} cols={50}></textarea>
            </div>
          </div>

          {/* Fifth Page  */}

          <div className={formStep !== 5 ? "display-none" : ""}>
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
          onClick={
            formStep > 1
              ? () => handleBack(formStep)
              : () => handleBackToMain(navObj)
          }
        >
          Back
        </Button>
        <Button onClick={() => formStep < stepsNumber && handleNext(formStep)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Form;
