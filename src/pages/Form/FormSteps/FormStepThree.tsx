import { useCanvas } from "../../../context/CanvasContext";
import { useFormContext } from "../../../context/FormContext";
import CanvasDraw from "react-canvas-draw";
import FormInput from "../../../components/FormInput/FormInput";
import styles from "../Form.module.css";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { useEffect } from "react";
import { useLogicState } from "../../../context/LogicStateContext";

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

  useEffect(
    function () {
      setIsVehDamageCanvasSave(true);
      return setIsVehDamageCanvasSave(false);
    },
    [setIsVehDamageCanvasSave]
  );

  return (
    <div className={`${styles.form}`}>
      <fieldset>
        <legend>Your vehicle</legend>

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
          Clear
        </button>
        <FormInput
          type="textarea"
          placeholder="Your Vehicle Damage Description"
          rows={5}
          cols={30}
          label="Details of damage (Your vehicle)"
          value={driverDamageDetails}
          onChangeSet={setDriverDamageDetails}
        />
      </fieldset>
      <fieldset>
        <legend>TP Vehcile</legend>

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
          Clear
        </button>
        <FormInput
          type="textarea"
          placeholder="TP Vehicle Damage Description"
          rows={5}
          cols={30}
          label="Details of damage (Third party vehicle)"
          value={tpDamageDetails}
          onChangeSet={setTpDamageDetails}
        />
      </fieldset>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        SAVE
      </button>
    </div>
  );
}

export default FormStepThree;
