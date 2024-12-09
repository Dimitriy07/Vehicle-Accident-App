import SignatureCanvas from "react-signature-canvas";

import styles from "../Form.module.css";
// import { useCanvas } from "../../../context/CanvasContext";
import { useRef } from "react";
import { generatePDF } from "../../../utils/generatePDF";
import { useContextData } from "../../../hooks/useContextData";

function FormStepSix() {
  //   const { setDriverSignature } = useCanvas();
  const data = useContextData();
  function handleClearSignature(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    signatureRef.current?.clear();
  }

  //   function handleSaveSignature(): void {
  //     const signatureUrl = signatureRef.current?.toDataURL();
  //     if (signatureUrl === undefined) return;
  //     setDriverSignature(signatureUrl);
  //   }

  const signatureRef = useRef<SignatureCanvas>(null);
  return (
    <div className={`${styles.form}`}>
      <label>Signature</label>
      <SignatureCanvas
        ref={signatureRef}
        canvasProps={{
          width: 300,
          height: 200,
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
