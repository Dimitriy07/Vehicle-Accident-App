import { useCanvas } from "../../../context/CanvasContext";
import { useFormContext } from "../../../context/FormContext";
import CanvasDraw from "react-canvas-draw";
import FormInput from "../../../components/FormInput/FormInput";
import styles from "../Form.module.css";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { useEffect } from "react";
import { useLogicState } from "../../../context/LogicStateContext";
import { useTranslation } from "react-i18next";

function FormStepThree() {
  const [windowWidth] = useWindowWidth();
  const {
    driverDamageDetails,
    tpDamageDetails,
    setDriverDamageDetails,
    setTpDamageDetails,
  } = useFormContext();

  const { driverDamageVeh, tpDamageVeh, driverVehCanvasRef, tpVehCanvasRef } =
    useCanvas();

  const { setIsVehDamageCanvasSave } = useLogicState();

  const { t } = useTranslation();

  // let Next button make saving of canvas
  useEffect(function () {
    setIsVehDamageCanvasSave(true);
  }, []);

  return (
    <div className={`${styles.form}`}>
      <fieldset>
        <legend>{t("damageDescriptions.yourVehicle")}</legend>

        <CanvasDraw
          ref={driverVehCanvasRef}
          canvasWidth={windowWidth - 30}
          canvasHeight={150}
          lazyRadius={1}
          brushRadius={2}
          imgSrc="/damageVeh.png"
          saveData={driverDamageVeh}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            driverVehCanvasRef.current?.clear();
          }}
        >
          {t("actions.clear")}
        </button>
        <FormInput
          type="textarea"
          placeholder={t("damageDescriptions.driverVehDamagePlaceholder")}
          rows={5}
          cols={30}
          label={t("damageDescriptions.driverDamageDetailsLabel")}
          value={driverDamageDetails}
          onChangeSet={setDriverDamageDetails}
        />
      </fieldset>
      <fieldset>
        <legend>{t("damageDescriptions.tpVehicle")}</legend>

        <CanvasDraw
          ref={tpVehCanvasRef}
          canvasWidth={windowWidth - 30}
          canvasHeight={150}
          lazyRadius={1}
          brushRadius={2}
          imgSrc="/damageVeh.png"
          saveData={tpDamageVeh}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            tpVehCanvasRef.current?.clear();
          }}
        >
          {t("actions.clear")}
        </button>
        <FormInput
          type="textarea"
          placeholder={t("damageDescriptions.tpVehDamagePlaceholder")}
          rows={5}
          cols={30}
          label={t("damageDescriptions.tpDamageDetailsLabel")}
          value={tpDamageDetails}
          onChangeSet={setTpDamageDetails}
        />
      </fieldset>
    </div>
  );
}

export default FormStepThree;
