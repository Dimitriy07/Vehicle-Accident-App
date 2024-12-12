import SignatureCanvas from "react-signature-canvas";

import styles from "../Form.module.css";
import { useCanvas } from "../../../context/CanvasContext";

import { generatePDF } from "../../../utils/generatePDF";
import { useContextData } from "../../../hooks/useContextData";
import { useEffect } from "react";
import { useLogicState } from "../../../context/LogicStateContext";

function FormStepSix() {
  const { signatureRef } = useCanvas();
  const { setIsDriverSignature } = useLogicState();

  const data = useContextData();

  useEffect(function () {
    setIsDriverSignature(true);
  }, []);
  function handleClearSignature(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    signatureRef.current?.clear();
  }

  // function handleSaveSignature(): void {
  //   const signatureUrl = signatureRef.current?.toDataURL();
  //   if (signatureUrl === undefined) return;
  //   setDriverSignature(signatureUrl);
  // }

  return (
    <div className={`${styles.form}`}>
      <label>Signature</label>
      <SignatureCanvas
        ref={signatureRef}
        canvasProps={{
          height: 400,
          style: { border: "1px solid #ccc", borderRadius: "8px" },
        }}
        clearOnResize={false}
      />
      <button onClick={handleClearSignature}>Clear</button>
      <button
        onClick={(e) => {
          e.preventDefault();
          generatePDF(data);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default FormStepSix;
