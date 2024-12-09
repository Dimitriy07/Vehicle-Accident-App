import { useRef } from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { useCanvas } from "../../../context/CanvasContext";

import CanvasDraw from "react-canvas-draw";

import styles from "../Form.module.css";

function FormStepFive() {
  const { setSchemeBeforeAccident, setSchemeAfterAccident } = useCanvas();
  const [windowWidth] = useWindowWidth();
  function handleBeforeAccCanvas(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const canvasBeforeAcc = schemaBeforeCanvasRef.current?.getSaveData();
    if (canvasBeforeAcc === undefined) return;
    setSchemeBeforeAccident(canvasBeforeAcc);
  }
  function handleAfterAccCanvas(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const canvasAfterAcc = schemaAfterCanvasRef.current?.getSaveData();
    if (canvasAfterAcc === undefined) return;
    setSchemeAfterAccident(canvasAfterAcc);
  }
  const schemaBeforeCanvasRef = useRef<CanvasDraw>(null);
  const schemaAfterCanvasRef = useRef<CanvasDraw>(null);
  return (
    <div className={`${styles.form}`}>
      <label>Draw Scheme Before Accident</label>
      <CanvasDraw
        ref={schemaBeforeCanvasRef}
        canvasWidth={windowWidth - 20}
        canvasHeight={250}
        brushColor="#000"
        brushRadius={2}
        lazyRadius={1}
        hideInterface={false}
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      />{" "}
      <label>Draw Scheme After Accident</label>
      <CanvasDraw
        ref={schemaAfterCanvasRef}
        canvasWidth={windowWidth - 20}
        canvasHeight={250}
        brushColor="#000"
        brushRadius={2}
        lazyRadius={1}
        hideInterface={false}
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      />
      <button
        onClick={(e) => {
          handleBeforeAccCanvas(e);
          handleAfterAccCanvas(e);
        }}
      >
        SAVE
      </button>
    </div>
  );
}

export default FormStepFive;
