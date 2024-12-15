import { useEffect } from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { useCanvas } from "../../../context/CanvasContext";

import CanvasDraw from "react-canvas-draw";

import styles from "../Form.module.css";
import { useLogicState } from "../../../context/LogicStateContext";
import { useTranslation } from "react-i18next";

function FormStepFour() {
  const { setIsSchemaCanvasSave } = useLogicState();
  const {
    schemeBeforeAccident,
    schemeAfterAccident,
    schemaBeforeCanvasRef,
    schemaAfterCanvasRef,
  } = useCanvas();
  const [windowWidth] = useWindowWidth();

  const { t } = useTranslation();
  useEffect(function () {
    setIsSchemaCanvasSave(true);
  }, []);

  return (
    <div className={`${styles.form}`}>
      <label>{t("accidentDiagrams.beforeImpact")}</label>
      <CanvasDraw
        ref={schemaBeforeCanvasRef}
        canvasWidth={windowWidth - 20}
        canvasHeight={250}
        brushColor="#000"
        brushRadius={2}
        lazyRadius={1}
        hideInterface={false}
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        saveData={schemeBeforeAccident}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          schemaBeforeCanvasRef.current?.clear();
        }}
      >
        {t("actions.clear")}
      </button>
      <label>{t("accidentDiagrams.afterImpact")}</label>
      <CanvasDraw
        ref={schemaAfterCanvasRef}
        canvasWidth={windowWidth - 20}
        canvasHeight={250}
        brushColor="#000"
        brushRadius={2}
        lazyRadius={1}
        hideInterface={false}
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        saveData={schemeAfterAccident}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          schemaAfterCanvasRef.current?.clear();
        }}
      >
        {t("actions.clear")}
      </button>
    </div>
  );
}

export default FormStepFour;
