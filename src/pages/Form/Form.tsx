import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useFormContext } from "../../context/FormContext";

import { useLogicState } from "../../context/LogicStateContext";
import { useCanvas } from "../../context/CanvasContext";
import useCanvasHandler from "../../hooks/useCanvasHandler";

import Button from "../../components/Button/Button";
import FormStepOne from "./FormSteps/FormStepOne";
import FormStepTwo from "./FormSteps/FormStepTwo";
import FormStepThree from "./FormSteps/FormStepThree";
import FormStepFour from "./FormSteps/FormStepFour";
import FormStepFive from "./FormSteps/FormStepFive";
import FormStepSix from "./FormSteps/FormStepSix";

import styles from "./Form.module.css";

import { useTranslation } from "react-i18next";

function Form() {
  const { STEPS_NUMBERS, formStep, setFormStep } = useFormContext();

  const {
    isStepsDone,
    isVehDamageCanvasSave,
    isSchemaCanvasSave,
    isDriverSignature,
    setIsDriverFormStarts,
    setIsVehDamageCanvasSave,
    setIsSchemaCanvasSave,
    setIsDriverSignature,
  } = useLogicState();

  const {
    driverVehCanvasRef,
    tpVehCanvasRef,
    schemaBeforeCanvasRef,
    schemaAfterCanvasRef,
    signatureRef,
    setDriverDamageVeh,
    setTpDamageVeh,
    setTpDamageVehUrl,
    setDriverDamageVehUrl,
    setSchemeBeforeAccident,
    setSchemeBeforeAccidentUrl,
    setSchemeAfterAccident,
    setSchemeAfterAccidentUrl,
    setDriverSignature,
  } = useCanvas();

  const navigate = useNavigate();

  const { t } = useTranslation();
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

  // to use conditionally useCanvasHandler in button
  const saveDriverDamageCanvas = useCanvasHandler(
    driverVehCanvasRef,
    setDriverDamageVeh,
    setDriverDamageVehUrl
  );
  const saveTpDamageCanvas = useCanvasHandler(
    tpVehCanvasRef,
    setTpDamageVeh,
    setTpDamageVehUrl
  );
  const saveSchemeBeforeAccident = useCanvasHandler(
    schemaBeforeCanvasRef,
    setSchemeBeforeAccident,
    setSchemeBeforeAccidentUrl
  );
  const saveSchemeAfterAccident = useCanvasHandler(
    schemaAfterCanvasRef,
    setSchemeAfterAccident,
    setSchemeAfterAccidentUrl
  );

  const saveDriverSignature = useCanvasHandler(
    signatureRef,
    setDriverSignature
  );

  function handleDamageCanvas() {
    saveDriverDamageCanvas();
    saveTpDamageCanvas();
    setIsVehDamageCanvasSave(false);
  }

  function handleSchemeCanvas() {
    saveSchemeBeforeAccident();
    saveSchemeAfterAccident();
    setIsSchemaCanvasSave(false);
  }

  function handleSignedForm() {
    saveDriverSignature();

    navigate("/steps-nav", { replace: true });
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

          {/* Sixth Page  */}
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
            if (isVehDamageCanvasSave) {
              handleDamageCanvas();
            }
            if (isSchemaCanvasSave) {
              handleSchemeCanvas();
            }
            if (isDriverSignature) {
              setIsDriverSignature(false);
            }
          }}
        >
          {t("actions.back")}
        </Button>
        {!isStepsDone ? (
          <div></div>
        ) : (
          <Button
            onClick={() => {
              if (formStep < STEPS_NUMBERS) handleNext();
              if (isVehDamageCanvasSave) {
                handleDamageCanvas();
              }
              if (isSchemaCanvasSave) {
                handleSchemeCanvas();
              }
              if (isDriverSignature) {
                handleSignedForm();
              }
            }}
          >
            {formStep === STEPS_NUMBERS
              ? t("actions.submit")
              : t("actions.next")}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Form;
