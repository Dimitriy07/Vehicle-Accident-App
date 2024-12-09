import CanvasDraw from "react-canvas-draw";

function useCanvasHandler(setStateFn: (data: string) => void) {
  return (ref: React.RefObject<CanvasDraw>) => {
    try {
      const canvas = ref.current?.getSaveData();
      if (canvas) setStateFn(canvas);
    } catch (err) {
      console.log("Failed to get canvas data", err);
    }
  };
}

export default useCanvasHandler;
