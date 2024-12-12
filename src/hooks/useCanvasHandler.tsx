import { useCallback } from "react";
import CanvasDraw from "react-canvas-draw";
import SignatureCanvas from "react-signature-canvas";

type CanvasRef = React.RefObject<CanvasDraw | SignatureCanvas>;

function useCanvasHandler(ref: CanvasRef, setStateFn: (data: string) => void) {
  return useCallback(() => {
    try {
      const currentCanvas = ref.current;
      if (!currentCanvas) return;

      if ("getSaveData" in currentCanvas) {
        const canvasData = currentCanvas.getSaveData();
        if (canvasData) setStateFn(canvasData);
      } else if ("toDataURL" in currentCanvas) {
        const canvasData = currentCanvas.toDataURL();
        if (canvasData) setStateFn(canvasData);
      }
    } catch (err) {
      console.error("Failed to get canvas data", err);
    }
  }, [ref, setStateFn]);
}

export default useCanvasHandler;
