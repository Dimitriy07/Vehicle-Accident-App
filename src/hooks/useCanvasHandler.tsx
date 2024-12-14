import { useCallback } from "react";
import CanvasDraw from "react-canvas-draw";
import SignatureCanvas from "react-signature-canvas";

type CanvasRef = React.RefObject<CanvasDraw | SignatureCanvas>;

function useCanvasHandler(
  ref: CanvasRef,
  setStateFn: (data: string) => void,
  setStateFnUrl?: (data: string) => void
) {
  return useCallback(() => {
    try {
      const currentCanvas = ref.current;
      if (!currentCanvas) return;

      if ("getSaveData" in currentCanvas) {
        // Type assertion to inform TypeScript that getDataURL exists as getDataURL doesn't exist in type CanvasDraw
        const canvasDrawRef = currentCanvas as CanvasDraw & {
          getDataURL: (fileType: string, useBgImage: boolean) => string;
        };

        const canvasData = canvasDrawRef.getSaveData();
        const canvasDataUrl = canvasDrawRef.getDataURL("png", false);

        if (canvasData) setStateFn(canvasData);
        if (canvasDataUrl && setStateFnUrl) setStateFnUrl(canvasDataUrl);
      } else if ("toDataURL" in currentCanvas) {
        const canvasData = currentCanvas.toDataURL();
        if (canvasData) setStateFn(canvasData);
      }
    } catch (err) {
      console.error("Failed to get canvas data", err);
    }
  }, [ref, setStateFn, setStateFnUrl]);
}

export default useCanvasHandler;
