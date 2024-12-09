import { useRef } from "react";
import { useCanvas } from "../../../context/CanvasContext";
import { useFormContext } from "../../../context/FormContext";
import CanvasDraw from "react-canvas-draw";
import FormInput from "../../../components/FormInput/FormInput";
import styles from "../Form.module.css";
import useWindowWidth from "../../../hooks/useWindowWidth";
import useCanvasHandler from "../../../hooks/useCanvasHandler";

function FormStepThree() {
  const [windowWidth] = useWindowWidth();
  const {
    driverDamageDetails,
    tpDamageDetails,
    setDriverDamageDetails,
    setTpDamageDetails,
  } = useFormContext();

  const { driverDamageVeh, setDriverDamageVeh, setTpDamageVeh } = useCanvas();

  // get window width to adjust canvas width

  const handleDriverDamageCanvas = useCanvasHandler(setDriverDamageVeh);
  const handleTpDamageCanvas = useCanvasHandler(setTpDamageVeh);

  const driverVehCanvasRef = useRef<CanvasDraw>(null);
  const tpVehCanvasRef = useRef<CanvasDraw>(null);

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
        />

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
        />
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
          handleDriverDamageCanvas(driverVehCanvasRef);
          handleTpDamageCanvas(tpVehCanvasRef);
        }}
      >
        SAVE
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          const x = driverVehCanvasRef.current?.loadSaveData(
            driverDamageVeh,
            true
          );
          console.log(driverVehCanvasRef.current);
          console.log(x);
        }}
      >
        watch
      </button>
    </div>
  );
}

export default FormStepThree;
