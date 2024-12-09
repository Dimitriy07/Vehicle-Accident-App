/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useFormContext } from "../../context/FormContext";

import { useLogicState } from "../../context/LogicStateContext";

import Button from "../../components/Button/Button";

import FormStepOne from "./FormSteps/FormStepOne";
import FormStepTwo from "./FormSteps/FormStepTwo";
import FormStepThree from "./FormSteps/FormStepThree";
import FormStepFour from "./FormSteps/FormStepFour";
import FormStepFive from "./FormSteps/FormStepFive";
import FormStepSix from "./FormSteps/FormStepSix";

import styles from "./Form.module.css";

function Form() {
  const { STEPS_NUMBERS, formStep, setFormStep } = useFormContext();

  const { isStepsDone, setIsDriverFormStarts } = useLogicState();

  const navigate = useNavigate();

  useEffect(
    function () {
      setIsDriverFormStarts(true);
      return () => setIsDriverFormStarts(false);
    },
    [setIsDriverFormStarts]
  );

  function handleNext(): void {
    setFormStep(() => formStep + 1);
  }

  function handleBack(): void {
    setFormStep(() => formStep - 1);
  }

  // Change isStepsDone = true condition in <form></form> and button while developing (change back for production)
  return (
    <div className="container-input__form">
      <div>
        <form
          className={`${styles.form} ${!isStepsDone ? "display-none" : ""}`}
        >
          {/* First Page  Injury/Witness/Police Details*/}
          {formStep === 1 && <FormStepOne />}

          {/* Second Page  */}

          {formStep === 2 && <FormStepTwo />}

          {/* Third Page  */}
          {formStep === 3 && <FormStepThree />}
          {/* Forth Page  */}
          {formStep === 4 && <FormStepFour />}

          {/* Fifth Page  */}
          {formStep === 5 && <FormStepFive />}

          {formStep === 6 && <FormStepSix />}
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
        {!isStepsDone ? (
          <div></div>
        ) : (
          <Button onClick={() => formStep < STEPS_NUMBERS && handleNext()}>
            {formStep === STEPS_NUMBERS ? "Submit" : "Next"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Form;
