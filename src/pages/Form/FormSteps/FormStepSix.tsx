import { useCanvas } from "../../../context/CanvasContext";
import { useEffect } from "react";
import { useLogicState } from "../../../context/LogicStateContext";

import SignatureCanvas from "react-signature-canvas";
import styles from "../Form.module.css";
import { useTranslation } from "react-i18next";
function FormStepSix() {
  const { signatureRef } = useCanvas();
  const { setIsDriverSignature } = useLogicState();
  const { t } = useTranslation();
  useEffect(function () {
    setIsDriverSignature(true);
  }, []);
  function handleClearSignature(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    signatureRef.current?.clear();
  }

  return (
    <div className={`${styles.form}`}>
      <label>{t("signature.signature")}</label>
      <SignatureCanvas
        ref={signatureRef}
        canvasProps={{
          height: 400,
          style: { border: "1px solid #ccc", borderRadius: "8px" },
        }}
        clearOnResize={false}
      />
      <button onClick={handleClearSignature}>{t("actions.clear")}</button>
    </div>
  );
}

export default FormStepSix;
